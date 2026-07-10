import { eq } from "drizzle-orm"
import { headers } from "next/headers"
import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

import { db } from "@/db"
import { memberships, purchases } from "@/db/schema"
import { getStripe, getWebhookSecret, isStripePillar } from "@/lib/stripe"

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ pillar: string }> }
) {
  const { pillar } = await params

  if (!isStripePillar(pillar)) {
    return NextResponse.json({ error: "Unknown pillar" }, { status: 404 })
  }

  const body = await request.text()
  const signature = (await headers()).get("stripe-signature")

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    const stripe = getStripe(pillar)
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      getWebhookSecret(pillar)
    )
  } catch (err) {
    console.error(`Webhook verification failed for pillar: ${pillar}`, err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  try {
    await handleStripeEvent(event)
  } catch (error) {
    console.error(`Webhook processing failed for pillar: ${pillar}`, error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }

  return NextResponse.json({ received: true })
}

async function handleStripeEvent(event: Stripe.Event) {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session
      const productId = session.metadata?.productId
      const userId = session.metadata?.userId

      if (userId && session.mode === "subscription" && session.subscription) {
        await upsertMembershipFromCheckout(session, userId)
      }

      if (productId && userId) {
        const existingPurchase = await db.query.purchases.findFirst({
          where: eq(purchases.stripeCheckoutSessionId, session.id),
        })

        if (!existingPurchase && isUuid(productId)) {
          await db.insert(purchases).values({
            productId,
            status: "completed",
            stripeCheckoutSessionId: session.id,
            userId,
          })
        }
      }
      break
    }

    case "customer.subscription.created":
    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription
      await upsertMembershipFromSubscription(subscription)
      break
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription
      await db
        .update(memberships)
        .set({ status: "cancelled" })
        .where(eq(memberships.stripeSubscriptionId, subscription.id))
      break
    }

    default:
      console.log(`Unhandled Stripe event: ${event.type}`)
  }
}

async function upsertMembershipFromCheckout(
  session: Stripe.Checkout.Session,
  userId: string
) {
  const subscriptionId =
    typeof session.subscription === "string"
      ? session.subscription
      : session.subscription?.id

  if (!subscriptionId) return

  const existingMembership = await db.query.memberships.findFirst({
    where: eq(memberships.stripeSubscriptionId, subscriptionId),
  })

  const values = {
    status: "active",
    stripeSubscriptionId: subscriptionId,
    tier:
      session.metadata?.productSlug || session.metadata?.productId || "gateway",
    userId,
  }

  if (existingMembership) {
    await db
      .update(memberships)
      .set(values)
      .where(eq(memberships.stripeSubscriptionId, subscriptionId))
    return
  }

  await db.insert(memberships).values(values)
}

async function upsertMembershipFromSubscription(
  subscription: Stripe.Subscription
) {
  const currentPeriodEnd = (
    subscription as unknown as {
      current_period_end?: number
    }
  ).current_period_end
  const existingMembership = await db.query.memberships.findFirst({
    where: eq(memberships.stripeSubscriptionId, subscription.id),
  })
  const values = {
    currentPeriodEnd: currentPeriodEnd
      ? new Date(currentPeriodEnd * 1000)
      : null,
    status: subscription.status === "active" ? "active" : "inactive",
    tier: subscription.metadata?.tier || "gateway",
  }

  if (existingMembership) {
    await db
      .update(memberships)
      .set(values)
      .where(eq(memberships.stripeSubscriptionId, subscription.id))
    return
  }

  const userId = subscription.metadata?.userId
  if (!userId) return

  await db.insert(memberships).values({
    ...values,
    stripeSubscriptionId: subscription.id,
    userId,
  })
}

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value
  )
}

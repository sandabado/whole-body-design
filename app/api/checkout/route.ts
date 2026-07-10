import { eq } from "drizzle-orm"
import { type NextRequest, NextResponse } from "next/server"

import { auth, normalizeEmail } from "@/auth"
import { db } from "@/db"
import { products } from "@/db/schema"
import { findCatalogProduct } from "@/lib/catalog"
import { getStripe } from "@/lib/stripe"

type CheckoutProduct = {
  description: string | null
  id: string
  isActive: boolean | null
  pillar: string
  priceCents: number | null
  slug?: string
  stripePriceId?: string | null
  title: string
  type: string
}

export async function POST(request: NextRequest) {
  const isFormPost = Boolean(
    request.headers
      .get("content-type")
      ?.includes("application/x-www-form-urlencoded")
  )

  try {
    const session = await auth()
    const payload = await parseCheckoutPayload(request)
    const identifier = cleanIdentifier(payload.productId || payload.productSlug)
    const email = normalizeEmail(payload.email || "")

    if (!session?.user) {
      if (isFormPost) {
        const signInUrl = new URL(
          "/sign-in",
          process.env.BASE_URL || request.nextUrl.origin
        )
        signInUrl.searchParams.set("redirect", "/store")
        return NextResponse.redirect(signInUrl, { status: 303 })
      }

      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!identifier)
      return checkoutError("Product is required", 400, isFormPost)

    const product = await resolveProduct(identifier)

    if (!product || product.isActive === false) {
      return checkoutError("Product not found", 404, isFormPost)
    }

    if (!product.stripePriceId && !product.priceCents) {
      return checkoutError("Product price is not configured", 422, isFormPost)
    }

    const stripe = getStripe(product.pillar)
    const baseUrl = process.env.BASE_URL || request.nextUrl.origin
    const mode = product.type === "subscription" ? "subscription" : "payment"
    const lineItem = product.stripePriceId
      ? { price: product.stripePriceId, quantity: 1 }
      : {
          price_data: {
            currency: "usd",
            product_data: {
              description: product.description || undefined,
              name: product.title,
            },
            unit_amount: product.priceCents || 0,
          },
          quantity: 1,
        }

    const checkoutSession = await stripe.checkout.sessions.create({
      cancel_url: `${baseUrl}/store?canceled=true`,
      client_reference_id: session.user.id,
      customer_email: session.user.email || email || undefined,
      line_items: [lineItem],
      metadata: {
        productId: product.id,
        productSlug: product.slug || "",
        productType: product.type,
        pillar: product.pillar,
        userId: session.user.id,
      },
      mode,
      payment_method_types: ["card"],
      subscription_data:
        mode === "subscription"
          ? {
              metadata: {
                productId: product.id,
                productSlug: product.slug || "",
                pillar: product.pillar,
                tier: product.slug || product.id,
                userId: session.user.id,
              },
            }
          : undefined,
      success_url: `${baseUrl}/account/library?success=true`,
    })

    if (isFormPost && checkoutSession.url) {
      return NextResponse.redirect(checkoutSession.url, { status: 303 })
    }

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Checkout error:", error)
    return checkoutError("Failed to create checkout session", 500, isFormPost)
  }
}

async function parseCheckoutPayload(request: NextRequest) {
  const contentType = request.headers.get("content-type") || ""

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const formData = await request.formData()
    return {
      email: String(formData.get("email") || ""),
      productId: String(formData.get("productId") || ""),
      productSlug: String(formData.get("productSlug") || ""),
    }
  }

  const payload = (await request.json()) as {
    email?: string
    productId?: string
    productSlug?: string
  }

  return {
    email: payload.email || "",
    productId: payload.productId || "",
    productSlug: payload.productSlug || "",
  }
}

async function resolveProduct(
  identifier: string
): Promise<CheckoutProduct | null> {
  const catalogProduct = findCatalogProduct(identifier)
  if (catalogProduct) return catalogProduct

  const productById = await db.query.products.findFirst({
    where: eq(products.id, identifier),
  })
  if (productById) return productById

  return (
    (await db.query.products.findFirst({
      where: eq(products.slug, identifier),
    })) || null
  )
}

function checkoutError(message: string, status: number, redirect: boolean) {
  if (redirect) {
    const url = new URL(
      "/store",
      process.env.BASE_URL || "http://localhost:3001"
    )
    url.searchParams.set("checkout", "error")
    url.searchParams.set("message", message)
    return NextResponse.redirect(url, { status: 303 })
  }

  return NextResponse.json({ error: message }, { status })
}

function cleanIdentifier(value: string | undefined) {
  return (value || "").trim()
}

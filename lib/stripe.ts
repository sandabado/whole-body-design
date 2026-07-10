import Stripe from "stripe"

export const STRIPE_PILLARS = [
  "studios",
  "press",
  "presence",
  "foundation",
] as const

export type StripePillar = (typeof STRIPE_PILLARS)[number]

const STRIPE_KEYS: Record<string, string | undefined> = {
  foundation: process.env.STRIPE_SECRET_KEY_FOUNDATION,
  presence: process.env.STRIPE_SECRET_KEY_PRESENCE,
  press: process.env.STRIPE_SECRET_KEY_PRESS,
  studios: process.env.STRIPE_SECRET_KEY_STUDIOS,
}

const stripeInstances: Record<string, Stripe> = {}

export function isStripePillar(pillar: string): pillar is StripePillar {
  return STRIPE_PILLARS.includes(pillar as StripePillar)
}

export function getStripe(pillar: string): Stripe {
  if (!isStripePillar(pillar)) {
    throw new Error(`Unsupported Stripe pillar: ${pillar}`)
  }

  if (!stripeInstances[pillar]) {
    const key = STRIPE_KEYS[pillar]
    if (!key) throw new Error(`No Stripe key configured for pillar: ${pillar}`)
    stripeInstances[pillar] = new Stripe(key)
  }

  return stripeInstances[pillar]
}

export function getWebhookSecret(pillar: string): string {
  if (!isStripePillar(pillar)) {
    throw new Error(`Unsupported Stripe pillar: ${pillar}`)
  }

  const secrets: Record<string, string | undefined> = {
    foundation: process.env.STRIPE_WEBHOOK_SECRET_FOUNDATION,
    presence: process.env.STRIPE_WEBHOOK_SECRET_PRESENCE,
    press: process.env.STRIPE_WEBHOOK_SECRET_PRESS,
    studios: process.env.STRIPE_WEBHOOK_SECRET_STUDIOS,
  }
  const secret = secrets[pillar]
  if (!secret) throw new Error(`No webhook secret for pillar: ${pillar}`)
  return secret
}

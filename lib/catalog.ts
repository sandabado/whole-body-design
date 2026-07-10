export type Pillar = "studios" | "press" | "presence" | "foundation"

export type CatalogProduct = {
  aliases?: readonly string[]
  description: string
  id: string
  isActive: boolean
  pillar: Pillar
  priceCents: number
  slug: string
  title: string
  type: "digital" | "physical" | "service" | "subscription"
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    description: "Digital edition for the secure reader library.",
    aliases: ["press-manual-1-digital"],
    id: "11111111-1111-4111-8111-111111111111",
    isActive: true,
    pillar: "press",
    priceCents: 2200,
    slug: "manual-i-whole-body-presence-digital",
    title: "Manual I - Whole Body Presence",
    type: "digital",
  },
  {
    description:
      "All five Whole Body Series volumes in the digital reader library.",
    aliases: ["press-digital-bundle"],
    id: "22222222-2222-4222-8222-222222222222",
    isActive: true,
    pillar: "press",
    priceCents: 11100,
    slug: "codex-digital-bundle",
    title: "Whole Body Series Digital Bundle",
    type: "digital",
  },
  {
    description: "Printed and bound Whole Body Series bundle.",
    aliases: ["press-physical-bundle"],
    id: "33333333-3333-4333-8333-333333333333",
    isActive: true,
    pillar: "press",
    priceCents: 33300,
    slug: "codex-physical-bundle",
    title: "Whole Body Series Physical Bundle",
    type: "physical",
  },
  {
    description: "Sandabado vinyl from Whole Body Studios.",
    aliases: ["studios-sandabado-vinyl"],
    id: "44444444-4444-4444-8444-444444444444",
    isActive: true,
    pillar: "studios",
    priceCents: 3300,
    slug: "sandabado-vinyl",
    title: "Sandabado Vinyl",
    type: "physical",
  },
  {
    description: "Living Library membership with recurring access.",
    aliases: ["press-living-library-membership"],
    id: "55555555-5555-4555-8555-555555555555",
    isActive: true,
    pillar: "press",
    priceCents: 1111,
    slug: "living-library-membership",
    title: "Living Library Membership",
    type: "subscription",
  },
]

export function findCatalogProduct(identifier: string) {
  return CATALOG_PRODUCTS.find(
    (product) =>
      product.id === identifier ||
      product.slug === identifier ||
      product.aliases?.includes(identifier)
  )
}

export function formatPrice(cents: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: cents % 100 === 0 ? 0 : 2,
    style: "currency",
  }).format(cents / 100)
}

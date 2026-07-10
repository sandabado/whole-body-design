import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

type Category = "Books" | "Consultations" | "Events" | "Membership" | "Music"

const filters = [
  "All",
  "Music",
  "Books",
  "Events",
  "Consultations",
  "Membership",
] as const

type Filter = (typeof filters)[number]
type ToneVariant =
  | "ember"
  | "emberOutline"
  | "gold"
  | "goldOutline"
  | "teal"
  | "tealOutline"
  | "violet"
  | "violetOutline"

const categoryTones: Record<
  Category,
  {
    activeBorder: string
    cardBorder: string
    button: ToneVariant
    buttonOutline: ToneVariant
    hover: string
    label: string
    symbol: string
  }
> = {
  Books: {
    activeBorder: "border-gold",
    cardBorder: "border-gold/25 hover:border-gold/70",
    button: "gold",
    buttonOutline: "goldOutline",
    hover: "hover:text-gold",
    label: "text-gold",
    symbol: "🜁",
  },
  Consultations: {
    activeBorder: "border-violet",
    cardBorder: "border-violet/25 hover:border-violet/70",
    button: "violet",
    buttonOutline: "violetOutline",
    hover: "hover:text-violet",
    label: "text-violet",
    symbol: "⊙",
  },
  Events: {
    activeBorder: "border-ember",
    cardBorder: "border-ember/25 hover:border-ember/70",
    button: "ember",
    buttonOutline: "emberOutline",
    hover: "hover:text-ember",
    label: "text-ember",
    symbol: "🜂",
  },
  Membership: {
    activeBorder: "border-ember",
    cardBorder: "border-ember/25 hover:border-ember/70",
    button: "ember",
    buttonOutline: "emberOutline",
    hover: "hover:text-ember",
    label: "text-ember",
    symbol: "🜂",
  },
  Music: {
    activeBorder: "border-teal",
    cardBorder: "border-teal/25 hover:border-teal/70",
    button: "teal",
    buttonOutline: "tealOutline",
    hover: "hover:text-teal",
    label: "text-teal",
    symbol: "🜄",
  },
}

const products = [
  {
    actions: [
      ["Buy Digital", "/store"],
      ["Order Vinyl", "/store"],
    ],
    category: "Music",
    details: [
      "🜄 Twelve tracks. Twelve Houses.",
      "Digital — $25 · Vinyl — $150",
    ],
    title: "Living Earth: Vol. 1",
  },
  {
    actions: [
      ["Stream Free", "/studios/sandabado"],
      ["Order Vinyl", "/store"],
    ],
    category: "Music",
    details: ["🜄 Vinyl — $33 · Stream Free"],
    title: "Sandabado — Debut Album",
  },
  {
    actions: [
      ["Buy Digital Bundle — $111", "/manuals"],
      ["Buy Physical Bundle — $333", "/manuals"],
    ],
    category: "Books",
    details: [
      "🜁 Five volumes. From instrument to spiral.",
      'I. Whole Body Presence — "Build the instrument." — $22/$77',
      'II. Twelvefold Harmonics — "Play the song." — $22/$77',
      'III. Infinite Presence — "Be the silence." — $22/$77',
      'IV. The Living Spiral — "Dance the turn." — $22/$77',
      'V. Triangle of Trust — "Build the home." — $22/$77',
    ],
    title: "The Codex",
  },
  {
    actions: [["Reserve Your Seat", "/presence"]],
    category: "Events",
    details: [
      "🜂 Monthly Virtual Circle · Free",
      "Every [day TBD] · 60 min · Virtual",
    ],
    title: "Hearthfire Session",
  },
  {
    actions: [["View Dates", "/presence"]],
    category: "Events",
    details: [
      "🜂 Monthly In-Person · Location Rotates",
      "Deep work. Closed container.",
    ],
    title: "Circle in the Stone",
  },
  {
    actions: [["Join Interest List", "/presence"]],
    category: "Events",
    details: ["🜂 Seasonal · In-Person · Invitation Only", "Coming Autumn 2027"],
    title: "Rite of Passage",
  },
  {
    actions: [["Book Now", "/book?type=free_20"]],
    category: "Consultations",
    details: ["⊙ 20 min · Jesse Gawlik · Free"],
    title: "Free Discovery",
  },
  {
    actions: [["Book Now", "/book?type=full_60"]],
    category: "Consultations",
    details: ["⊙ 60 min · Jesse Gawlik · $111"],
    title: "Full Session",
  },
  {
    actions: [["Book Now", "/book?type=architect_90"]],
    category: "Consultations",
    details: ["⊙ 90 min · Jesse Gawlik · $333"],
    title: "Architect & Sovereign",
  },
  {
    actions: [["Join the Guild", "/guild"]],
    category: "Membership",
    details: [
      "🜂 $11.11/month · Full Access",
      "Everything WholeBody creates. One price.",
    ],
    title: "The Guild",
  },
] as const

function isFilter(value: string | string[] | undefined): value is Filter {
  return (
    typeof value === "string" &&
    filters.some((filter) => filter.toLowerCase() === value.toLowerCase())
  )
}

export default async function StorePage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>
}) {
  const params = await searchParams
  const activeFilter = isFilter(params.filter)
    ? filters.find(
        (filter) => filter.toLowerCase() === params.filter?.toLowerCase()
      ) || "All"
    : "All"
  const visibleProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter)

  return (
    <PageShell>
      <section className="border-b border-gold/10 bg-obsidian px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            Store
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            The Store
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/72">
            Music, books, consultations, events, and memberships. One place for
            everything WholeBody.
          </p>
        </div>
      </section>

      <section className="sticky top-[4.5rem] z-30 border-b border-gold/10 bg-obsidian/94 px-6 py-3 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-5 overflow-x-auto">
          {filters.map((filter) => {
            const href =
              filter === "All"
                ? "/store"
                : `/store?filter=${filter.toLowerCase()}`
            const isActive = filter === activeFilter
            const tone = filter === "All" ? null : categoryTones[filter]

            return (
              <Link
                className={`shrink-0 border-b-2 px-1 py-2 font-mono text-xs tracking-[0.16em] uppercase transition ${
                  isActive
                    ? tone
                      ? `${tone.activeBorder} ${tone.label}`
                      : "border-pink text-pink"
                    : `border-transparent text-moonstone/54 ${
                        tone?.hover || "hover:text-pink-light"
                      }`
                }`}
                href={href}
                key={filter}
              >
                {filter}
              </Link>
            )
          })}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => {
            const tone = categoryTones[product.category]

            return (
              <Card
                className={`flex min-h-80 flex-col bg-obsidian/82 p-6 transition ${tone.cardBorder}`}
                key={product.title}
              >
                <p
                  className={`font-mono text-xs tracking-[0.18em] uppercase ${tone.label}`}
                >
                  {tone.symbol} {product.category}
                </p>
                <h2 className="mt-4 font-display text-2xl text-moonstone">
                  {product.title}
                </h2>
                <div className="mt-5 flex-1 space-y-3 text-sm leading-6 text-moonstone/70">
                  {product.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                {product.title === "Living Earth: Vol. 1" ? (
                  <Button variant={tone.buttonOutline} className="mt-5" asChild>
                    <Link href="/studios/vol-1">▶ Play Preview</Link>
                  </Button>
                ) : null}
                <div className="mt-5 flex flex-wrap gap-3">
                  {product.actions.map(([label, href], index) => (
                    <Button
                      variant={index === 0 ? tone.button : tone.buttonOutline}
                      asChild
                      key={label}
                    >
                      <Link href={href}>{label} →</Link>
                    </Button>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="border-t border-gold/10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-2xl text-gold">
            Bundles
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <Card className="border-gold/25 bg-obsidian/82 p-6 text-center">
              <h3 className="font-display text-2xl text-moonstone">
                Digital Codex Bundle — $111
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-moonstone/66">
                All 5 volumes in secure reader. Lifetime access.
              </p>
              <Button variant="gold" className="mt-6" asChild>
                <Link href="/manuals">Buy Bundle →</Link>
              </Button>
            </Card>
            <Card className="border-gold/25 bg-obsidian/82 p-6 text-center">
              <h3 className="font-display text-2xl text-moonstone">
                Physical Codex Bundle — $333
              </h3>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-moonstone/66">
                All 5 volumes printed, bound, shipped.
              </p>
              <Button variant="goldOutline" className="mt-6" asChild>
                <Link href="/manuals">Order Bundle →</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

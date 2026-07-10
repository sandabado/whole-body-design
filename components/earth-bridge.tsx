import Link from "next/link"

import { Button } from "@/components/ui/button"

export type EarthBridgeVariant =
  | "default"
  | "reading"
  | "houses"
  | "guild"
  | "about"
  | "pricing"
  | "faq"
  | "how-it-works"
  | "compare"
  | "contact"

type BridgeCard = {
  description: string
  href: string
  label: string
  symbol?: string
  title: string
}

type BridgeContent = {
  body: string
  cards?: BridgeCard[]
  eyebrow: string
  microcopy: string
  title: string
}

const pillars: BridgeCard[] = [
  {
    symbol: "🜂",
    title: "Presence",
    description: "Fire · Gatherings, circles, retreats",
    href: "https://wholebody.earth/presence",
    label: "Explore Presence →",
  },
  {
    symbol: "🜁",
    title: "Press",
    description: "Air · Publishing, Codex, author platform",
    href: "https://wholebody.earth/press",
    label: "Explore Press →",
  },
  {
    symbol: "🜄",
    title: "Studios",
    description: "Water · Music production and releases",
    href: "https://wholebody.earth/studios",
    label: "Explore Studios →",
  },
  {
    symbol: "🜃",
    title: "Foundation",
    description: "Earth · Land and sacred geometry builds",
    href: "https://wholebody.earth/foundation",
    label: "Explore Foundation →",
  },
  {
    symbol: "⊙",
    title: "Guardian",
    description: "Ether · Trust architecture",
    href: "https://wholebody.earth/guardian",
    label: "Explore Guardian →",
  },
]

const content: Record<EarthBridgeVariant, BridgeContent> = {
  default: {
    eyebrow: "The Constellation",
    title: "There’s a Whole Body waiting for you.",
    body: "WholeBody Design tells you your House. wholebody.earth is where you build inside it — five pillars, manuals, music, events, consultations, and land.",
    cards: [
      {
        symbol: "🜂 🜁 🜄 🜃 ⊙",
        title: "Explore the Five Pillars",
        description: "Presence · Press · Studios · Foundation · Guardian",
        href: "https://wholebody.earth",
        label: "Visit wholebody.earth →",
      },
    ],
    microcopy: "wholebody.earth → Where the work lives.",
  },
  reading: {
    eyebrow: "Your Design Has a Destination",
    title: "Your House points to a pillar.",
    body: "Knowing your House is the first step. On wholebody.earth, each pillar is a living business with products, events, and opportunities to build.",
    cards: pillars,
    microcopy: "Your reading told you where. wholebody.earth shows you how.",
  },
  houses: {
    eyebrow: "Where the Elements Live",
    title: "Each element is a business.",
    body: "The five elements are not just archetypes. They are five pillars of real work — publishing, music, community, land, and trust architecture.",
    cards: [
      {
        title: "The Five Pillars",
        description: "Presence · Press · Studios · Foundation · Guardian",
        href: "https://wholebody.earth",
        label: "Explore the constellation →",
      },
      {
        title: "The Codex",
        description:
          "Five volumes. From instrument to spiral. The operating system.",
        href: "https://wholebody.earth/manuals",
        label: "Browse the manuals →",
      },
    ],
    microcopy: "wholebody.earth → Where the work lives.",
  },
  guild: {
    eyebrow: "Your Membership Extends",
    title: "One membership. Two worlds.",
    body: "Guild membership extends to wholebody.earth, where the products live. Members save 15% on the Codex, music, vinyl, and consultations.",
    cards: [
      {
        symbol: "📖",
        title: "The Codex",
        description: "Five volumes. Digital and physical.",
        href: "https://wholebody.earth/manuals",
        label: "Browse →",
      },
      {
        symbol: "🎵",
        title: "The Music",
        description: "Living Earth Vol. 1 + Sandabado",
        href: "https://wholebody.earth/studios",
        label: "Listen →",
      },
      {
        symbol: "📞",
        title: "Consultations",
        description: "Free / $111 / $333 — with Jesse",
        href: "https://wholebody.earth/book",
        label: "Book →",
      },
    ],
    microcopy:
      "Guild members save 15%. wholebody.earth → Where the work lives.",
  },
  about: {
    eyebrow: "The Ecosystem",
    title: "Two sites. One architecture.",
    body: "Whole Body Design is the discovery layer — where you find your House and meet your people. wholebody.earth is the product layer — where the pillars live and the work is sold.",
    cards: [
      {
        symbol: "🌍",
        title: "wholebody.earth",
        description:
          "Five pillars. The Codex. Music. Events. Consultations. Land.",
        href: "https://wholebody.earth",
        label: "Explore the products →",
      },
      {
        symbol: "⚡",
        title: "fate.energy",
        description: "The calculation engine behind the Dodecanic System.",
        href: "https://fate.energy",
        label: "Learn more →",
      },
    ],
    microcopy:
      "wholebody.design → Who you are. wholebody.earth → What you build.",
  },
  pricing: {
    eyebrow: "What Your Membership Unlocks",
    title: "$11.11/month connects both worlds.",
    body: "Guild membership gives you the network here and 15% off everything on wholebody.earth. Two sites. One subscription.",
    cards: [
      {
        symbol: "🜂 🜁 🜄 🜃 ⊙",
        title: "One Membership. Two Worlds.",
        description:
          "Reading archive, directory, gathering, and voting here. Codex, music, vinyl, and consultations on .earth.",
        href: "https://wholebody.earth",
        label: "Visit wholebody.earth →",
      },
    ],
    microcopy: "One membership. Two worlds. No paywalls inside the paywall.",
  },
  faq: {
    eyebrow: "Related Question",
    title: "How does wholebody.design connect to wholebody.earth?",
    body: "WholeBody Design is where you discover your House and join the Guild. wholebody.earth is where the Codex, music, events, consultations, and Foundation land project live.",
    cards: [
      {
        title: "wholebody.earth",
        description: "Products, pillars, and the work itself.",
        href: "https://wholebody.earth",
        label: "Explore wholebody.earth →",
      },
      {
        title: "The Codex",
        description: "Five volumes of manuals for the work.",
        href: "https://wholebody.earth/manuals",
        label: "Browse the Codex →",
      },
    ],
    microcopy: "wholebody.design → Discovery. wholebody.earth → Creation.",
  },
  "how-it-works": {
    eyebrow: "Step 7 — Build",
    title: "Take your design to the workshop.",
    body: "Steps 1–6 happen here — discovery, understanding, and connection. Step 7 happens on wholebody.earth, where your pillar becomes real work.",
    cards: pillars,
    microcopy:
      "wholebody.design → Who you are. wholebody.earth → What you build.",
  },
  compare: {
    eyebrow: "The Advantage",
    title: "Most systems stop at the reading.",
    body: "The Dodecanic System tells you your House — then gives you a place to build. wholebody.earth is that place: five pillars of products, services, events, land, and trust architecture.",
    cards: [
      {
        title: "The Workshop",
        description:
          "Five pillars of real work, built for what your House is here to make.",
        href: "https://wholebody.earth",
        label: "Explore where your House leads →",
      },
    ],
    microcopy: "Other systems hand you a label. We hand you a workshop.",
  },
  contact: {
    eyebrow: "More Ways to Engage",
    title: "Looking for products or consultations?",
    body: "wholebody.earth is where you will find the Codex, music releases, consultations with Jesse, and the Glory Peak land project.",
    cards: [
      {
        title: "wholebody.earth",
        description: "Products and services live there.",
        href: "https://wholebody.earth",
        label: "Visit wholebody.earth →",
      },
      {
        title: "Consultations",
        description: "Find a time to work with Jesse.",
        href: "https://wholebody.earth/book",
        label: "Book a consultation →",
      },
    ],
    microcopy: "wholebody.design → Discovery. wholebody.earth → Creation.",
  },
}

export function EarthBridge({
  variant = "default",
}: {
  variant?: EarthBridgeVariant
}) {
  const bridge = content[variant]
  const gridClass =
    bridge.cards?.length === 5
      ? "md:grid-cols-3 lg:grid-cols-5"
      : bridge.cards?.length === 3
        ? "md:grid-cols-3"
        : bridge.cards && bridge.cards.length > 1
          ? "md:grid-cols-2"
          : "mx-auto max-w-2xl"

  return (
    <section className="relative overflow-hidden border-t border-gold/10 bg-[radial-gradient(circle_at_80%_20%,rgba(51,26,82,0.18),transparent_38%),linear-gradient(135deg,#0d0d0d,#0a0a14)] py-16">
      <div className="absolute inset-y-0 left-0 w-px bg-gold/20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-gold/60 uppercase">
          {bridge.eyebrow}
        </p>
        <h3 className="mt-4 font-display text-2xl text-moonstone sm:text-3xl">
          {bridge.title}
        </h3>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-moonstone/70">
          {bridge.body}
        </p>
        {bridge.cards ? (
          <div className={`mt-8 grid gap-4 ${gridClass}`}>
            {bridge.cards.map((card) => (
              <div
                className="rounded-lg border border-gold/20 bg-white/[0.03] p-5 text-left"
                key={card.title}
              >
                <p className="text-lg">{card.symbol}</p>
                <h4 className="mt-2 font-display text-xl text-moonstone">
                  {card.title}
                </h4>
                <p className="mt-2 text-sm leading-6 text-moonstone/62">
                  {card.description}
                </p>
                <Button
                  className="mt-5"
                  size="sm"
                  variant="goldOutline"
                  asChild
                >
                  <Link href={card.href}>{card.label}</Link>
                </Button>
              </div>
            ))}
          </div>
        ) : null}
        <p className="mt-8 font-mono text-xs text-moonstone/40">
          {bridge.microcopy}
        </p>
      </div>
    </section>
  )
}

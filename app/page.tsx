import Link from "next/link"

import { PlatonicBackground } from "@/components/platonic-background"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { StarReadingForm } from "@/components/star-reading-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const architecture = [
  {
    symbol: "🜂",
    title: "Element",
    description:
      "Your primary frequency. Fire, Air, Water, Earth, or Ether. Determines how you move energy.",
  },
  {
    symbol: "🧭",
    title: "Archetype",
    description:
      "The role you play in the system. Ignition, Signal, Ground, and more. Determines your function.",
  },
  {
    symbol: "🏛️",
    title: "Pillar",
    description:
      "Where your design manifests: Presence, Press, Studios, Foundation, or Guardian. Determines your output.",
  },
] as const

const featuredHouses = [
  {
    house: "I",
    symbol: "🜂",
    element: "Fire",
    archetype: "Ignition",
    quote: "You begin. You start. You are the spark.",
    pillar: "Presence",
    tone: "text-ember border-ember/25",
  },
  {
    house: "III",
    symbol: "🜁",
    element: "Air",
    archetype: "Signal",
    quote: "You carry the word. You transmit what needs to be heard.",
    pillar: "Press",
    tone: "text-gold border-gold/25",
  },
  {
    house: "IV",
    symbol: "🜃",
    element: "Earth",
    archetype: "Ground",
    quote: "You root the vision. You build what lasts.",
    pillar: "Foundation",
    tone: "text-sage border-sage/25",
  },
  {
    house: "V",
    symbol: "⊙",
    element: "Ether",
    archetype: "Sovereign",
    quote: "You protect the system. You ensure the work outlasts you.",
    pillar: "Guardian",
    tone: "text-violet border-violet/25",
  },
] as const

const guildBenefits = [
  "Whole Body Design Reading archive",
  "Monthly virtual gathering (first Tuesday)",
  "Member directory (search by House or Element)",
  "Voting rights on Guild decisions",
  "Direct AMA with Jesse (quarterly)",
  "15% discount on wholebody.earth products",
] as const

const trustSignals = [
  ["🔒", "Zero-Knowledge Encryption", "Your data is yours. We cannot read it."],
  ["🍀", "Feed First Model", "Creators eat before platforms. No extraction."],
  ["🤝", "200+ Members Active", "Growing network of sovereign builders."],
] as const

export default function HomePage() {
  return (
    <>
      <PlatonicBackground
        sections={[
          { id: "hero", solid: "heroDodecahedron" },
          { id: "problem", solid: "dodecahedron" },
          { id: "architecture", solid: "dodecahedron" },
          { id: "glimpse", solid: "dodecahedron" },
          { id: "reading", solid: "dodecahedron" },
          { id: "guild", solid: "dodecahedron" },
        ]}
      />
      <div className="relative z-10">
        <SiteNav />
        <main>
          <section
            id="hero"
            className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-20 text-center sm:py-24"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(109,74,255,0.18),transparent_42%),linear-gradient(180deg,rgba(13,13,13,0.25),rgba(28,12,46,0.65),rgba(13,13,13,0.86))]" />
            <div className="relative mx-auto max-w-4xl [text-shadow:0_2px_24px_rgba(0,0,0,0.88)]">
              <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase sm:text-sm">
                Dodecana · The 12 Houses
              </p>
              <h1 className="mt-6 font-display text-5xl leading-none font-bold text-moonstone sm:text-6xl lg:text-7xl">
                Discover Your House
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-moonstone/70">
                Your birth data maps to one of twelve rooms in the Dodecahedron.
                <br />
                Find your House. Understand your design. Build with alignment.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Button className="px-6" size="lg" variant="gold" asChild>
                  <Link href="#reading">
                    Get Your Whole Body Design Reading — Free →
                  </Link>
                </Button>
                <Button
                  className="px-6"
                  size="lg"
                  variant="violetOutline"
                  asChild
                >
                  <Link href="/houses">Explore the 12 Houses →</Link>
                </Button>
              </div>
              <p className="mt-5 font-mono text-xs text-amber-300">
                🟢 Live · 200+ Members in the Guild
              </p>
            </div>
          </section>

          <section
            id="problem"
            className="border-t border-gold/10 px-6 py-20 text-center"
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="font-display text-3xl text-gold">
                You Were Built for a Specific Purpose.
              </h2>
              <div className="mt-7 space-y-6 text-lg leading-8 text-moonstone/80">
                <p>
                  Most systems tell you who you are after you&apos;ve already
                  started. They categorize. They limit. They sell you labels you
                  didn&apos;t choose.
                </p>
                <p>
                  The Dodecanic System doesn&apos;t tell you what to do. It
                  tells you where you fit. Twelve Houses. Five Elements. One
                  architecture.
                </p>
                <p>
                  When you know your House, you stop forcing the wrong path. You
                  build where the ground is solid.
                </p>
              </div>
              <div className="mx-auto mt-10 h-px w-16 bg-gold/30" />
            </div>
          </section>

          <section
            id="architecture"
            className="border-t border-gold/10 px-6 py-20 text-center"
          >
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-3xl text-gold">
                The Architecture
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-3">
                {architecture.map((item) => (
                  <Card
                    className="border-gold/15 bg-obsidian/72 p-7 text-left"
                    key={item.title}
                  >
                    <p className="text-2xl" aria-hidden="true">
                      {item.symbol}
                    </p>
                    <h3 className="mt-4 font-display text-2xl text-moonstone">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-moonstone/70">
                      {item.description}
                    </p>
                  </Card>
                ))}
              </div>
              <p className="mx-auto mt-8 max-w-3xl text-sm leading-6 text-moonstone/60">
                Together, these three coordinates define your Whole Body Design.
              </p>
              <Link
                className="mt-6 inline-block font-mono text-sm text-gold transition hover:text-gold/75"
                href="/houses"
              >
                Learn How It Maps →
              </Link>
            </div>
          </section>

          <section id="glimpse" className="border-t border-gold/10 px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center font-display text-3xl text-gold">
                A Glimpse of the 12
              </h2>
              <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {featuredHouses.map((house) => (
                  <Card
                    className={`flex min-h-64 flex-col bg-obsidian/82 p-6 ${house.tone}`}
                    key={house.house}
                  >
                    <p className="font-mono text-xs tracking-[0.18em] uppercase">
                      {house.symbol} House {house.house} — {house.archetype}
                    </p>
                    <p className="mt-5 flex-1 text-sm leading-6 text-moonstone/70">
                      “{house.quote}”
                    </p>
                    <p className="mt-5 font-mono text-xs text-moonstone/55">
                      Element: {house.element} · Pillar: {house.pillar}
                    </p>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-center">
                <Link
                  className="font-mono text-sm text-gold transition hover:text-gold/75"
                  href="/houses"
                >
                  See All 12 Houses →
                </Link>
              </p>
            </div>
          </section>

          <section
            id="reading"
            className="relative overflow-hidden border-t border-gold/10 px-6 py-20 text-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.1),transparent_1px),radial-gradient(circle_at_80%_65%,rgba(109,74,255,0.12),transparent_1px)] bg-size-[28px_28px] opacity-50" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl text-gold">
                Discover Your Coordinates
              </h2>
              <p className="mt-6 text-lg leading-8 text-moonstone/80">
                Enter your birth date, time, and location. We calculate your
                House, Element, and Archetype instantly. Your email saves your
                reading for full access.
              </p>
              <div className="mt-10 rounded-lg border border-gold/15 bg-obsidian/76 p-6 text-left shadow-2xl backdrop-blur-md sm:p-8">
                <StarReadingForm />
              </div>
            </div>
          </section>

          <section id="guild" className="border-t border-gold/10 px-6 py-20">
            <div className="mx-auto max-w-4xl rounded-xl border border-gold/20 bg-white/5 p-8 text-center sm:p-10">
              <h2 className="font-display text-3xl text-gold">
                Join the Sovereign Network
              </h2>
              <p className="mt-5 text-lg text-moonstone/70">
                Know your House. Meet your people. Build together.
              </p>
              <ul className="mt-9 grid gap-4 text-left text-sm leading-6 text-moonstone/80 md:grid-cols-2">
                {guildBenefits.map((benefit) => (
                  <li className="flex gap-3" key={benefit}>
                    <span className="text-gold" aria-hidden="true">
                      ✓
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-9 rounded-lg border border-gold/40 bg-obsidian p-6">
                <p className="font-mono text-4xl text-gold">$11.11</p>
                <p className="mt-2 text-sm text-moonstone/65">
                  One tier. Cancel anytime. No upsells.
                </p>
              </div>
              <Button
                className="mt-6 w-full"
                size="lg"
                variant="violet"
                asChild
              >
                <Link href="/guild">Join the Guild — $11.11/mo →</Link>
              </Button>
              <div className="mt-8 border-t border-white/10 pt-6 font-mono text-xs text-moonstone/50">
                Already know your House?{" "}
                <Link className="text-gold hover:text-gold/75" href="/account">
                  Login to your Account →
                </Link>
              </div>
            </div>
          </section>

          <section className="border-t border-gold/10 px-6 py-20 text-center">
            <div className="mx-auto max-w-5xl">
              <div className="grid gap-6 md:grid-cols-3">
                {trustSignals.map(([symbol, title, description]) => (
                  <div key={title}>
                    <p className="text-2xl" aria-hidden="true">
                      {symbol}
                    </p>
                    <h2 className="mt-4 font-display text-xl text-moonstone">
                      {title}
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-moonstone/65">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-12 h-px w-1/2 bg-gold/30" />
              <p className="mt-8 font-display text-xl text-gold italic">
                “So It Is Built. So It Holds. So It Is. 🍀”
              </p>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}

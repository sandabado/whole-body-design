import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const steps = [
  [
    "Enter Your Data",
    "Birth date, time, and location. If you do not know the exact time, leave it blank — the system still works.",
  ],
  [
    "Receive Your House",
    "Your House is calculated instantly. Each House maps to an element, archetype, and pillar.",
  ],
  [
    "Understand Your Coordinates",
    "Read your House guide, learn your element, and see which pillar you are designed to build in.",
  ],
  [
    "Explore the System",
    "Browse all twelve Houses and element paths. Your House is one room in a connected architecture.",
  ],
  [
    "Join the Guild",
    "Optionally meet people who share your House and build with complementary Houses.",
  ],
  [
    "Build with Alignment",
    "Take your design to your work. Stop forcing. Start aligning your energy with what you are here to build.",
  ],
] as const

export default function HowItWorksPage() {
  return (
    <PageShell bridge="how-it-works">
      <section className="relative overflow-hidden border-b border-gold/10 px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(109,74,255,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            The Process
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            How It Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/75">
            The Dodecanic System is simple to use and deep in implication. Here
            is the full journey — from data to design to network.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-gold">
            The Journey
          </h2>
          <ol className="mt-9 grid gap-5">
            {steps.map(([title, body], index) => (
              <Card className="border-gold/15 bg-obsidian/82 p-7" key={title}>
                <p className="font-mono text-xs text-gold">0{index + 1}</p>
                <h3 className="mt-3 font-display text-2xl text-moonstone">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-moonstone/65">
                  {body}
                </p>
              </Card>
            ))}
          </ol>
        </div>
      </section>
      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl text-gold">
            Begin Where You Are
          </h2>
          <p className="mt-5 text-lg leading-8 text-moonstone/72">
            Your House is not a box. It is a coordinate — a clear place to begin
            building with alignment.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" variant="gold" asChild>
              <Link href="/reading">Get Your Reading →</Link>
            </Button>
            <Button size="lg" variant="violetOutline" asChild>
              <Link href="/houses">Explore the Houses →</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

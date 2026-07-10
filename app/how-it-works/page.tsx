import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

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
    <PageShell>
      <PageHero eyebrow="The Process" title="How It Works">
        <p>
          The Dodecanic System is simple to use and deep in implication. Here is
          the full journey — from data to design to network.
        </p>
      </PageHero>
      <section className="px-6 py-20">
        <ol className="mx-auto max-w-4xl space-y-6">
          {steps.map(([title, body], index) => (
            <li
              className="grid gap-4 rounded-lg border border-gold/15 bg-obsidian/76 p-6 sm:grid-cols-[4rem_1fr]"
              key={title}
            >
              <span className="font-mono text-2xl text-gold">0{index + 1}</span>
              <div>
                <h2 className="font-display text-2xl text-moonstone">
                  {title}
                </h2>
                <p className="mt-3 leading-7 text-moonstone/68">{body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button size="lg" variant="gold" asChild>
            <Link href="/reading">Get Your Reading →</Link>
          </Button>
          <Button size="lg" variant="violetOutline" asChild>
            <Link href="/houses">Explore the Houses →</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}

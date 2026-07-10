import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const included = [
  "Whole Body Design Reading",
  "Reading archive",
  "Monthly virtual gathering",
  "Member directory",
  "Quarterly AMA with Jesse",
  "Voting rights",
  "Early access",
  "15% off wholebody.earth",
] as const

export default function PricingPage() {
  return (
    <PageShell bridge="pricing">
      <section className="relative overflow-hidden border-b border-gold/10 px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(109,74,255,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            Pricing
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            Simple. Honest. No Tiers.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/75">
            One price. Full access. We kept the math simple.
          </p>
          <p className="mt-9 font-mono text-4xl text-gold">$11.11 /month</p>
          <p className="mt-3 text-sm text-moonstone/55">
            Cancel anytime. No hidden charges.
          </p>
        </div>
      </section>
      <section className="px-6 py-20">
        <Card className="mx-auto max-w-3xl border-gold/25 bg-obsidian/82 p-7 sm:p-9">
          <h2 className="text-center font-display text-3xl text-gold">
            Everything Included
          </h2>
          <p className="mt-4 text-center text-moonstone/68">
            One membership unlocks the full Guild.
          </p>
          <ul className="mt-8 grid gap-4 text-sm leading-6 text-moonstone/78 md:grid-cols-2">
            {included.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <form
            action="/api/checkout"
            className="mt-9 text-center"
            method="post"
          >
            <input
              name="productSlug"
              type="hidden"
              value="living-library-membership"
            />
            <Button size="lg" type="submit" variant="gold">
              Join the Guild →
            </Button>
          </form>
        </Card>
      </section>
      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            [
              "What’s Free",
              "Whole Body Design Reading, browsing the 12 Houses, and Architecture guides.",
            ],
            [
              "What’s $11.11",
              "Everything above: the Guild, its gatherings, directory, and member benefits.",
            ],
            [
              "What’s Not Here",
              "No premium tier, no per-reading fees, and no hidden charges.",
            ],
          ].map(([title, body]) => (
            <Card className="border-gold/15 bg-obsidian/82 p-7" key={title}>
              <h2 className="font-display text-2xl text-gold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-moonstone/68">{body}</p>
            </Card>
          ))}
        </div>
      </section>
      <section className="px-6 py-20 text-center">
        <h2 className="font-display text-3xl text-gold">
          Start with Your House
        </h2>
        <p className="mt-5 text-lg text-moonstone/70">
          The basic reading is free. Take it first, then decide whether the
          Guild is your next room.
        </p>
        <Button className="mt-8" size="lg" variant="violetOutline" asChild>
          <Link href="/reading">Get Your Free Reading First →</Link>
        </Button>
      </section>
    </PageShell>
  )
}

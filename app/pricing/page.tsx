import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
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
    <PageShell>
      <PageHero eyebrow="Pricing" title="Simple. Honest. No Tiers">
        <p>One price. Full access. We kept the math simple.</p>
      </PageHero>
      <section className="px-6 py-20">
        <Card className="mx-auto max-w-xl border-gold/35 bg-obsidian/82 p-8 text-center">
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">
            The Guild
          </p>
          <p className="mt-5 font-mono text-5xl text-gold">
            $11.11<span className="text-xl"> /month</span>
          </p>
          <p className="mt-4 text-moonstone/68">
            Everything below included. Cancel anytime.
          </p>
          <ul className="mt-8 space-y-3 text-left text-sm text-moonstone/78">
            {included.map((item) => (
              <li className="flex gap-3" key={item}>
                <span className="text-gold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <form action="/api/checkout" className="mt-8" method="post">
            <input
              name="productSlug"
              type="hidden"
              value="living-library-membership"
            />
            <Button className="w-full" size="lg" type="submit" variant="gold">
              Join the Guild →
            </Button>
          </form>
        </Card>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
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
            <Card className="border-gold/15 bg-obsidian/76 p-6" key={title}>
              <h2 className="font-display text-2xl text-gold">{title}</h2>
              <p className="mt-4 text-sm leading-6 text-moonstone/68">{body}</p>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button size="lg" variant="violetOutline" asChild>
            <Link href="/reading">Get Your Free Reading First →</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}

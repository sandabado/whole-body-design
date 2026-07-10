import Link from "next/link"

import { CtaButton, PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { pillars } from "@/lib/constellation"

const feedSteps = [
  "Revenue enters the source account.",
  "Creators and framers are paid first.",
  "Direct costs are reimbursed transparently.",
  "Trust allocation funds scholarships and free seats.",
  "Operations and reserve are funded last.",
]

export default function MissionPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Mission"
        title="The Old World is Incomplete. We Are Building the Living Earth."
        actions={
          <>
            <CtaButton href="/reading">Take the Reading</CtaButton>
            <Button variant="outline" asChild>
              <Link href="/book">Book a Consultation</Link>
            </Button>
          </>
        }
      >
        <p>
          Extraction turns living people into resources. Wholebody.earth builds
          coherence across business, protection, community, publishing, music,
          and land.
        </p>
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <Card className="bg-gray-900/72 p-7">
            <h2 className="font-display text-3xl text-gold">The Thesis</h2>
            <p className="mt-4 leading-7 text-moonstone/70">
              The Old World asks creators to rent their future from platforms,
              labels, publishers, landlords, and institutions. The Living Earth
              model routes value back to the source, protects the work, and
              builds durable containers around the people creating it.
            </p>
          </Card>
          <Card className="bg-gray-900/72 p-7">
            <h2 className="font-display text-3xl text-gold">
              Feed First Algorithm
            </h2>
            <div className="mt-5 space-y-3">
              {feedSteps.map((step, index) => (
                <div className="flex gap-4" key={step}>
                  <span className="font-mono text-sm text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-moonstone/70">{step}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-amethyst/35 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-3xl text-gold">Entity Structure</h2>
          <div className="mt-6 overflow-hidden rounded-lg border border-gold/15">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-gold/10 p-4 font-mono text-xs text-gold uppercase">
              <span>Entity</span>
              <span>Status</span>
              <span>Focus</span>
            </div>
            {pillars.map((pillar) => (
              <div
                className="grid grid-cols-[1fr_1fr_1fr] border-t border-gold/10 p-4 text-sm text-moonstone/72"
                key={pillar.name}
              >
                <Link href={pillar.href} className="text-moonstone">
                  {pillar.name}
                </Link>
                <span>{pillar.status}</span>
                <span>{pillar.whatYouGet}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl text-gold">The Root</h2>
          <p className="mt-5 text-lg leading-8 text-moonstone/72">
            Jesse Gawlik did not invent this as a brand exercise. It came from a
            long confrontation with systems that extract from artists, families,
            land, and spirit. Wholebody.earth is the remembered architecture:
            one living body, five operating pillars.
          </p>
        </div>
      </section>
    </PageShell>
  )
}

import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const phases = ["Triangle", "Quincunx", "Nonagon", "Dodecahedron"]

export default function BlueprintPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Foundation / Blueprint" title="The Clover Structure">
        <p>
          A preview route for the sacred geometry build sequence: from a simple
          triangular module to a repeatable living structure.
        </p>
      </PageHero>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="flex min-h-96 items-center justify-center bg-amethyst/45 p-8">
            <div className="text-center">
              <div className="mx-auto h-44 w-44 rotate-45 rounded-[24%] border border-gold/50" />
              <p className="mt-8 font-mono text-xs tracking-[0.24em] text-gold uppercase">
                3D model placeholder
              </p>
            </div>
          </Card>
          <div className="space-y-4">
            {phases.map((phase, index) => (
              <Card className="bg-gray-900/72 p-5" key={phase}>
                <p className="font-mono text-xs text-gold">Phase {index + 1}</p>
                <h2 className="mt-2 font-display text-2xl text-moonstone">
                  {phase}
                </h2>
              </Card>
            ))}
            <Button variant="sage" className="w-full" asChild>
              <Link href="/foundation">Follow the Build</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

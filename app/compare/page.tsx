import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

const rows = [
  [
    "Based on",
    "Geometry + birth",
    "Birth + channels",
    "Birth + planets",
    "Self-assessment",
  ],
  ["Houses/Types", "12 Houses", "5 Types", "12 Signs", "9 Types"],
  [
    "Maps to",
    "5 elements + 5 pillars",
    "4 authorities",
    "4 elements",
    "3 centers",
  ],
  ["Actionable", "Yes — pillar + output", "Somewhat", "Varies", "Growth path"],
  ["Time required", "60 seconds", "5+ minutes", "5+ minutes", "10+ minutes"],
] as const

export default function ComparePage() {
  return (
    <PageShell bridge="compare">
      <PageHero
        eyebrow="Comparison"
        title="How the Dodecanic System Is Different"
      >
        <p>
          You may have encountered other systems. This is not competition; it is
          an evolution toward a clear coordinate for where to build.
        </p>
      </PageHero>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl overflow-x-auto rounded-lg border border-gold/15">
          <table className="w-full min-w-180 text-left text-sm">
            <thead className="bg-gold/10 text-moonstone">
              <tr>
                {[
                  "Feature",
                  "Dodecanic System",
                  "Human Design",
                  "Astrology",
                  "Enneagram",
                ].map((heading) => (
                  <th
                    className="px-5 py-4 font-display text-base"
                    key={heading}
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr className="border-t border-gold/10" key={row[0]}>
                  {row.map((cell, index) => (
                    <td
                      className={`px-5 py-4 ${index === 1 ? "text-gold" : "text-moonstone/70"}`}
                      key={cell}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-8 text-moonstone/72">
          Other systems tell you your type. The Dodecanic System tells you your
          architecture — and where to build.
        </p>
        <div className="mt-8 text-center">
          <Button size="lg" variant="gold" asChild>
            <Link href="/reading">Get Your Reading →</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}

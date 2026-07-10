import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { pillars } from "@/lib/constellation"

const roots = [
  "Musician and builder",
  "Founder of the Whole Body constellation",
  "Designer of the Feed First operating model",
  "Guide for creators moving from extraction into coherence",
]

const pillarTone = {
  ember:
    "border-ember/25 hover:border-ember/70 hover:shadow-[0_0_28px_rgba(194,84,45,0.18)]",
  gold: "border-gold/25 hover:border-gold/70 hover:shadow-[0_0_28px_rgba(212,175,55,0.18)]",
  sage: "border-sage/25 hover:border-sage/70 hover:shadow-[0_0_28px_rgba(74,103,65,0.18)]",
  teal: "border-teal/25 hover:border-teal/70 hover:shadow-[0_0_28px_rgba(43,168,160,0.18)]",
  violet:
    "border-violet/25 hover:border-violet/70 hover:shadow-[0_0_28px_rgba(109,74,255,0.18)]",
} as const

const textTone = {
  ember: "text-ember",
  gold: "text-gold",
  sage: "text-sage",
  teal: "text-teal",
  violet: "text-violet",
} as const

export default function AboutPage() {
  return (
    <PageShell>
      <main id="about-gateway">
        <section className="relative overflow-hidden border-b border-gold/10 bg-obsidian px-6 py-20 text-center sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(255,47,179,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
              About
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
              Jesse Gawlik, the Whole Body Architect
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-moonstone/76">
              Jesse Gawlik builds living systems for creators, families,
              artists, and communities who are ready to stop renting their
              future. Whole Body is his architecture for music, publishing,
              belonging, land, and sovereignty.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link href="/book">Book Jesse</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/mission">Read the Mission</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="border-gold/15 bg-obsidian/82 p-7">
              <p className="font-mono text-xs tracking-[0.24em] text-gold uppercase">
                The Root
              </p>
              <h2 className="mt-4 font-display text-4xl text-moonstone">
                This was not invented. It was remembered.
              </h2>
              <p className="mt-5 leading-8 text-moonstone/72">
                Jesse began as a musician listening for a signal underneath the
                noise. Over time that signal became a structure: protect the
                source, feed the creator first, build containers that can hold
                real life, and make beauty operational.
              </p>
            </Card>

            <div className="grid gap-4 sm:grid-cols-2">
              {roots.map((root) => (
                <Card className="border-gold/15 bg-obsidian/82 p-5" key={root}>
                  <p className="font-display text-2xl text-gold">{root}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl text-gold">
              What the Architect Does
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-moonstone/72">
              Jesse helps creators see the whole body of their work: the art,
              the protection, the publishing, the circle, the land, the money,
              and the legacy. The point is not another brand. The point is a
              structure that can hold the life trying to come through.
            </p>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-3xl text-gold">
              The Five Pillars He Holds Together
            </h2>
            <div className="mt-9 grid gap-4 md:grid-cols-5">
              {pillars.map((pillar) => (
                <Link href={pillar.href} key={pillar.name}>
                  <Card
                    className={`h-full bg-obsidian/82 p-5 transition hover:-translate-y-1 ${pillarTone[pillar.tone]}`}
                  >
                    <p
                      className={`font-mono text-[0.66rem] tracking-[0.14em] uppercase ${textTone[pillar.tone]}`}
                    >
                      {pillar.element} / {pillar.solid}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-moonstone">
                      {pillar.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-moonstone/65">
                      {pillar.whatYouGet}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <PageShell bridge="about">
      <PageHero eyebrow="About" title="The Story Behind the System">
        <p>
          Whole Body Design was built by Jesse Gawlik, founder of Whole Body
          Mastery LLC, to give people a clear coordinate for where they fit and
          what they are here to build.
        </p>
      </PageHero>
      <div className="mx-auto max-w-4xl space-y-16 px-6 py-20 text-lg leading-8 text-moonstone/72">
        <section>
          <p>
            After years studying astrology, Human Design, Gene Keys, Enneagram,
            Tarot, and numerology, Jesse recognized a pattern: every system
            pointed to the same twelve archetypes, expressed through five
            elements.
          </p>
          <p className="mt-5">
            The Dodecanic System unifies them. Twelve Houses. Five elements.
            Five pillars. One architecture.
          </p>
        </section>
        <section>
          <h2 className="font-display text-3xl text-gold">
            The Feed First Model
          </h2>
          <p className="mt-5">
            The old formula takes more than it gives. WholeBody inverts that
            equation: Coherence, Community, Presence. The creator eats first.
          </p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {[
              ["Coherence", "The parts speak to each other."],
              ["Community", "The circle holds the work."],
              ["Presence", "The source feeds first."],
            ].map(([title, body]) => (
              <div
                className="rounded-lg border border-gold/15 bg-obsidian/76 p-5"
                key={title}
              >
                <h3 className="font-display text-xl text-moonstone">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-moonstone/62">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="font-display text-3xl text-gold">The Ecosystem</h2>
          <div className="mt-5 space-y-4">
            <p>
              <a
                className="text-gold hover:text-gold/75"
                href="https://wholebody.earth"
              >
                wholebody.earth
              </a>{" "}
              is the product suite: pillars, Codex, music, events,
              consultations, and physical builds.
            </p>
            <p>
              <strong className="font-medium text-moonstone">
                wholebody.design
              </strong>{" "}
              is the discovery layer: readings, Houses, and Guild membership.
            </p>
            <p>
              <a
                className="text-gold hover:text-gold/75"
                href="https://fate.energy"
              >
                fate.energy
              </a>{" "}
              is the calculation engine powering the reading experience.
            </p>
          </div>
        </section>
        <section>
          <h2 className="font-display text-3xl text-gold">The Founder</h2>
          <p className="mt-5">
            Jesse Gawlik is the architect of the Whole Body Constellation. Based
            in Morongo Valley, California, he is building creator-owned,
            sovereignty-first infrastructure through Whole Body Mastery LLC.
          </p>
        </section>
        <div className="flex flex-wrap gap-3">
          <Button size="lg" variant="gold" asChild>
            <Link href="/reading">Get Your Reading →</Link>
          </Button>
          <Button size="lg" variant="violetOutline" asChild>
            <Link href="/houses">Explore the Houses →</Link>
          </Button>
        </div>
      </div>
    </PageShell>
  )
}

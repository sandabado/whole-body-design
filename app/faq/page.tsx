import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

const sections = [
  [
    "General",
    [
      [
        "What is the Dodecanic System?",
        "A unified archetypal system that maps birth data to one of twelve Houses, each connected to an element, archetype, and pillar of work.",
      ],
      [
        "Is this astrology?",
        "It uses astrological computation, but it is not traditional astrology. It is a synthesis expressed as one practical architecture.",
      ],
      [
        "How accurate is the reading?",
        "The calculation is precise; the interpretation is archetypal. Your House is a coordinate, not a verdict.",
      ],
    ],
  ],
  [
    "The Reading",
    [
      [
        "Do I need my exact birth time?",
        "No. Leave it blank if it is unknown. Exact time improves precision but is not required.",
      ],
      [
        "Is the reading free?",
        "The basic reading is free. An email is currently used to save and retrieve your result.",
      ],
      [
        "What do I get?",
        "Your House, element, archetype, pillar, and a brief interpretation of what each means.",
      ],
    ],
  ],
  [
    "The Guild",
    [
      [
        "Why $11.11/month?",
        "Access should not be tiered. Eleven represents mastery in the system; .11 is the fractal.",
      ],
      ["Can I cancel?", "Anytime from your account dashboard."],
      [
        "What is the member directory?",
        "A privacy-first network of Guild members searchable by House, element, location, and focus.",
      ],
    ],
  ],
  [
    "Privacy & Ecosystem",
    [
      [
        "What happens to my birth data?",
        "It is used to calculate your House. We do not sell it or share it.",
      ],
      [
        "Do you track me?",
        "No. This site does not track you. We do not sell your data. We protect it.",
      ],
      [
        "How does this connect to wholebody.earth?",
        "wholebody.earth is the product site; wholebody.design is the discovery and network layer. Guild members receive 15% off .earth products.",
      ],
    ],
  ],
] as const

export default function FaqPage() {
  return (
    <PageShell bridge="faq">
      <section className="relative overflow-hidden border-b border-gold/10 px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(109,74,255,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            FAQ
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/75">
            Clear answers for the questions that matter before you enter the
            system.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-4xl space-y-12 px-6 py-20">
        {sections.map(([title, items], index) => (
          <section
            className={
              index % 2
                ? "rounded-xl border border-gold/10 bg-obsidian/70 p-6 sm:p-8"
                : ""
            }
            key={title}
          >
            <h2 className="font-display text-3xl text-gold">{title}</h2>
            <div className="mt-6 space-y-3">
              {items.map(([question, answer]) => (
                <details
                  className="rounded-lg border border-gold/15 bg-obsidian/82 p-5"
                  key={question}
                >
                  <summary className="cursor-pointer font-display text-xl text-moonstone">
                    {question}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-moonstone/68">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="border-t border-gold/10 bg-obsidian/70 px-6 py-20 text-center">
        <h2 className="font-display text-3xl text-gold">
          Find Your Coordinate
        </h2>
        <p className="mt-5 text-lg text-moonstone/70">
          The reading is the clearest way to begin.
        </p>
        <Button className="mt-8" size="lg" variant="gold" asChild>
          <Link href="/reading">Get Your Reading →</Link>
        </Button>
      </section>
    </PageShell>
  )
}

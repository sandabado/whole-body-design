import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
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
    <PageShell>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions">
        <p>
          Clear answers for the questions that matter before you enter the
          system.
        </p>
      </PageHero>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-12">
          {sections.map(([title, items]) => (
            <section key={title}>
              <h2 className="font-display text-3xl text-gold">{title}</h2>
              <div className="mt-5 space-y-3">
                {items.map(([question, answer]) => (
                  <details
                    className="rounded-lg border border-gold/15 bg-obsidian/76 p-5"
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
        <div className="mt-12 text-center">
          <Button size="lg" variant="gold" asChild>
            <Link href="/reading">Get Your Reading →</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}

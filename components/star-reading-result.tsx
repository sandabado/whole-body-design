"use client"

import Link from "next/link"
import { ArrowDown, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { BodyMatrix, ReadingResult } from "@/lib/reading-engine"

const bodyColors: Record<keyof BodyMatrix, string> = {
  emotional: "#2BA8A0",
  ethereal: "#6D4AFF",
  mental: "#D4AF37",
  physical: "#4A6741",
  spiritual: "#C2542D",
}

const consultationTiers = [
  {
    cta: "Book Free Call",
    duration: "20 min",
    href: "/book?type=free_20",
    name: "Free Discovery",
    price: "Free",
    tone: "teal",
  },
  {
    cta: "Book Session",
    duration: "60 min",
    href: "/book?type=full_60",
    name: "Full Session",
    price: "$111",
    tone: "gold",
  },
  {
    cta: "Book Deep Session",
    duration: "90 min",
    href: "/book?type=architect_90",
    name: "Architect & Sovereign",
    price: "$333",
    tone: "violet",
  },
] as const

const toneClasses = {
  gold: {
    buttonVariant: "gold",
    text: "text-gold",
    top: "border-t-gold ring-1 ring-gold/35",
  },
  teal: {
    buttonVariant: "teal",
    text: "text-teal",
    top: "border-t-teal",
  },
  violet: {
    buttonVariant: "violet",
    text: "text-violet",
    top: "border-t-violet",
  },
} as const

export function StarReadingResult({
  onReset,
  reading,
  readingId,
}: {
  onReset?: () => void
  reading: ReadingResult
  readingId: string | null
}) {
  const bookingId = readingId || "pending"

  return (
    <div className="mx-auto max-w-3xl space-y-7">
      <div className="text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
          <CheckCircle2 className="h-8 w-8 text-gold" />
        </div>
        <p className="mb-2 font-mono text-xs tracking-[0.3em] text-gold uppercase">
          Whole Body Design Reading · Generated
        </p>
        <h2 className="font-display text-4xl font-bold text-moonstone">
          House {reading.house}: {reading.houseName}
        </h2>
        <p className="mt-2 text-lg text-gold">
          The {reading.archetype} · {reading.element}
        </p>
        {readingId ? (
          <p className="mt-2 font-mono text-xs text-moonstone/35">
            Reading ID: {readingId.slice(0, 8)}
          </p>
        ) : null}
      </div>

      <Card className="border-gold/20 bg-obsidian/84 p-6">
        <p className="text-sm leading-7 text-moonstone/80">{reading.summary}</p>
      </Card>

      <section>
        <h3 className="mb-4 text-center font-mono text-xs tracking-widest text-gold uppercase">
          The Body Matrix — Your Five Pillars
        </h3>
        <div className="space-y-3">
          {Object.entries(reading.bodyMatrix).map(([body, percent]) => (
            <div className="flex items-center gap-4" key={body}>
              <span className="w-24 text-xs text-moonstone/70 capitalize sm:w-32">
                {body}
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-moonstone/10">
                <div
                  className="h-2 rounded-full transition-all duration-700"
                  style={{
                    backgroundColor: bodyColors[body as keyof BodyMatrix],
                    width: `${percent}%`,
                  }}
                />
              </div>
              <span className="w-10 text-right font-mono text-xs text-moonstone/60">
                {percent}%
              </span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-moonstone/52">
          Primary: {reading.primaryBody} / Secondary: {reading.secondaryBody}
        </p>
      </section>

      <Card className="border-violet/20 bg-violet/5 p-6 text-center">
        <h3 className="font-display text-xl text-violet">
          Deeper Layers Available
        </h3>
        <p className="mt-3 text-xs leading-6 text-moonstone/64">
          Your House is the doorway. A full session maps your reading to your
          work, your protection layer, your creative path, and your next clean
          move.
        </p>
      </Card>

      <section>
        <div className="mx-auto mb-6 flex max-w-xs items-center gap-3">
          <div className="h-px flex-1 bg-gold/30" />
          <ArrowDown className="h-4 w-4 text-gold/50" />
          <div className="h-px flex-1 bg-gold/30" />
        </div>
        <h3 className="text-center font-display text-3xl text-gold">
          Consult With Jesse — The Whole Body Architect
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-moonstone/70">
          You know your House. Now build the path. Map your reading to real
          strategy: business, legal, creative, and spiritual.
        </p>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {consultationTiers.map((tier) => {
            const tone = toneClasses[tier.tone]

            return (
              <Card
                className={`relative border-t-4 bg-obsidian/84 p-5 text-center ${tone.top}`}
                key={tier.name}
              >
                {tier.tone === "gold" ? (
                  <span className="absolute top-3 right-3 rounded bg-gold/20 px-2 py-0.5 font-mono text-[0.65rem] text-gold">
                    DEEP WORK
                  </span>
                ) : null}
                <h4 className="font-display text-lg text-moonstone">
                  {tier.name}
                </h4>
                <p className="mt-1 font-mono text-xs text-moonstone/50">
                  {tier.duration}
                </p>
                <p className={`mt-4 font-mono text-2xl ${tone.text}`}>
                  {tier.price}
                </p>
                <Button
                  size="sm"
                  variant={tone.buttonVariant}
                  className="mt-5 w-full"
                  asChild
                >
                  <Link href={`${tier.href}&reading=${bookingId}`}>
                    {tier.cta}
                  </Link>
                </Button>
              </Card>
            )
          })}
        </div>
      </section>

      <div className="flex flex-wrap justify-center gap-4 pt-2">
        <Button variant="link" asChild>
          <Link href="/store">Browse the Store →</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/guild">Explore Membership →</Link>
        </Button>
        {onReset ? (
          <Button
            type="button"
            variant="link"
            className="text-moonstone/58"
            onClick={onReset}
          >
            Start Another Reading
          </Button>
        ) : null}
      </div>
    </div>
  )
}

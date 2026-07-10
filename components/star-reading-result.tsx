"use client"

import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

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

export function StarReadingResult({
  onReset,
  reading,
  readingId,
}: {
  onReset?: () => void
  reading: ReadingResult
  readingId: string | null
}) {
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

      <div className="grid gap-4 pt-2 sm:grid-cols-2">
        <Card className="border-gold/20 bg-obsidian/84 p-6 text-center"><h3 className="font-display text-xl text-gold">Explore Your House</h3><p className="mt-3 text-sm text-moonstone/65">See your archetype in the full dodecanic system.</p><Button className="mt-5" asChild><Link href="/houses">Explore the 12 Houses →</Link></Button></Card>
        <Card className="border-violet/20 bg-obsidian/84 p-6 text-center"><h3 className="font-display text-xl text-violet">Join the Network</h3><p className="mt-3 text-sm text-moonstone/65">Build with people who know their House.</p><Button className="mt-5" variant="violet" asChild><Link href="/guild">Join the Guild →</Link></Button></Card>
        {onReset ? (
          <Button
            type="button"
            variant="link"
            className="text-moonstone/58 sm:col-span-2"
            onClick={onReset}
          >
            Start Another Reading
          </Button>
        ) : null}
      </div>
    </div>
  )
}

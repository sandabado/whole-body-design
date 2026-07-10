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

const pillarByElement = {
  Aether: ["Guardian", "guardian"],
  Air: ["Press", "press"],
  Earth: ["Foundation", "foundation"],
  Fire: ["Presence", "presence"],
  Water: ["Studios", "studios"],
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
  const [pillar, pillarPath] = pillarByElement[
    reading.element as keyof typeof pillarByElement
  ] ?? ["Guardian", "guardian"]

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
        <div className="mt-6 border-t border-gold/15 pt-5">
          <p className="font-mono text-xs tracking-[0.2em] text-gold uppercase">
            Your Pillar
          </p>
          <p className="mt-2 font-display text-2xl text-moonstone">{pillar}</p>
          <p className="mt-2 text-sm text-moonstone/65">
            This is where your design is made visible in the world.
          </p>
          <a
            className="mt-4 inline-block text-sm text-gold hover:text-gold/75"
            href={`https://wholebody.earth/${pillarPath}`}
          >
            Explore {pillar} →
          </a>
        </div>
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
        <Card className="border-gold/20 bg-obsidian/84 p-6 text-center">
          <h3 className="font-display text-xl text-gold">Explore Your House</h3>
          <p className="mt-3 text-sm text-moonstone/65">
            See your archetype in the full dodecanic system.
          </p>
          <Button className="mt-5" asChild>
            <Link href="/houses">Explore the 12 Houses →</Link>
          </Button>
        </Card>
        <Card className="border-violet/20 bg-obsidian/84 p-6 text-center">
          <h3 className="font-display text-xl text-violet">Join the Network</h3>
          <p className="mt-3 text-sm text-moonstone/65">
            Build with people who know their House.
          </p>
          <Button className="mt-5" variant="violet" asChild>
            <Link href="/guild">Join the Guild →</Link>
          </Button>
        </Card>
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
      <Card className="border-gold/20 bg-obsidian/84 p-6 text-center">
        <h3 className="font-display text-2xl text-gold">
          Your House Is the Door. The Guild Is the Room.
        </h3>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-moonstone/65">
          Meet people who share your House and the people whose Houses
          complement yours. One membership. Full access.
        </p>
        <div className="mt-5 grid gap-2 text-left text-sm text-moonstone/72 sm:grid-cols-2">
          <span>✓ Member directory by House</span>
          <span>✓ Monthly gathering</span>
          <span>✓ Voting rights + AMA</span>
          <span>✓ 15% off wholebody.earth</span>
        </div>
        <p className="mt-6 font-mono text-xl text-gold">
          $11.11/month · Cancel anytime
        </p>
        <Button className="mt-5" variant="gold" asChild>
          <Link href="/guild">Join the Guild →</Link>
        </Button>
      </Card>
    </div>
  )
}

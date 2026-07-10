import Link from "next/link"

import { CrossElementNav } from "@/components/cross-element-nav"
import {
  PillarCard,
  PillarHero,
  PillarPageShell,
  PillarSection,
  pillarTones,
} from "@/components/pillar-page"
import { Button } from "@/components/ui/button"

const tone = pillarTones.sage

const happeningNow = [
  {
    body: "Secured. Surveyed. Staked. The Hum is audible here. The wind carries it through the canyon.",
    title: "The Land",
  },
  {
    body: "First beds being cleared and amended. Desert soil doesn't forgive — we're building it from scratch. Biochar, compost, nitrogen fixers. The ground is being taught to hold life again.",
    title: "The Garden",
  },
  {
    body: "First paths being cut. Walking the land daily. Reading the grade, the runoff, the wind patterns, the sun arcs. The trails aren't decorative. They're diagnostic. They tell you where the water wants to go, where the shade falls, where the structure belongs.",
    title: "The Trails",
  },
]

const buildLog = [
  {
    body: "Compost tea brewed. First seeds in soil. Trail path cleared. Rock cleared from bed sites. Water catchment assessed.",
    title: "Week 3 — Roots",
  },
  {
    body: "First raised bed framed. Soil amendment begins. Biochar kiln assembled. Initial trail flagged from entrance to garden site.",
    title: "Week 2 — Breaking Ground",
  },
  {
    body: "Land assessed. GPS coordinates locked. Perimeter walked. First water test. The wind carries something here.",
    title: "Week 1 — Arrival",
  },
]

export default function FoundationPage() {
  return (
    <PillarPageShell solid={tone.solid}>
      <PillarHero
        eyebrow="🜃 EARTH · HEXAHEDRON"
        status="🟢 Active — Phase 1"
        tagline="The shape that endures."
        title="Whole Body Foundation"
        tone={tone}
        body={
          <>
            <p className="font-mono text-xs tracking-[0.22em] text-sage uppercase">
              Glory Peak Community Garden and Trails · Morongo Valley, CA
            </p>
            <p>
              The first physical footprint of the Whole Body Constellation.
            </p>
            <p>
              Not a rendering. Not a pitch deck. Dirt, seeds, stone, and sweat
              in the Morongo Valley desert.
            </p>
          </>
        }
        featured={
          <PillarCard tone={tone}>
            <p className="font-mono text-xs tracking-[0.18em] text-sage uppercase">
              Foundation Content
            </p>
            <h2 className="mt-3 font-display text-3xl text-moonstone">
              Glory Peak Community Garden and Trails
            </h2>
            <p className="mt-4 text-lg leading-8 text-moonstone/76">
              Rammed earth. Off-grid. Carbon negative. A place to stand that
              cannot be taken.
            </p>
            <p className="mt-3 text-sm leading-6 text-moonstone/62">
              Without the ground, the vision floats away.
            </p>
            <Button variant={tone.buttonVariant} className="mt-6" asChild>
              <Link href="#build-log">Follow the Build →</Link>
            </Button>
          </PillarCard>
        }
      />

      <PillarSection title="What's Happening Now" tone={tone}>
        <div className="grid gap-5 md:grid-cols-3">
          {happeningNow.map((item) => (
            <PillarCard tone={tone} key={item.title}>
              <h2 className="font-display text-2xl text-moonstone">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-moonstone/72">
                {item.body}
              </p>
            </PillarCard>
          ))}
        </div>
      </PillarSection>

      <PillarSection title="Build Log" tone={tone}>
        <div id="build-log" className="space-y-4">
          <p className="font-mono text-xs tracking-[0.18em] text-sage uppercase">
            Reverse chronological. Most recent at top.
          </p>
          {buildLog.map((entry) => (
            <PillarCard tone={tone} key={entry.title}>
              <h2 className="font-display text-2xl text-moonstone">
                {entry.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-moonstone/72">
                {entry.body}
              </p>
            </PillarCard>
          ))}
        </div>
      </PillarSection>

      <PillarSection title="Visit" tone={tone}>
        <PillarCard tone={tone}>
          <p className="max-w-3xl text-lg leading-8 text-moonstone/80">
            The garden is real. The trails are real. If you&apos;re called to
            see it, come.
          </p>
          <Button variant={tone.buttonVariant} className="mt-6" asChild>
            <Link href="/contact">Request Site Visit →</Link>
          </Button>
        </PillarCard>
      </PillarSection>

      <PillarSection title="Support" tone={tone}>
        <PillarCard tone={tone}>
          <p className="max-w-3xl text-lg leading-8 text-moonstone/80">
            Materials. Tools. Soil amendments. Water systems. Every
            contribution goes directly into the ground.
          </p>
          <Button variant={tone.buttonVariant} className="mt-6" asChild>
            <Link href="/support">Contribute to Glory Peak →</Link>
          </Button>
        </PillarCard>
      </PillarSection>

      <PillarSection title="Feed First" tone={tone}>
        <div className="max-w-4xl space-y-5 text-lg leading-8 text-moonstone/80">
          <p>The Seed eats before the structure rises.</p>
          <p className="font-mono text-sm tracking-[0.16em] text-sage uppercase">
            🜃 Earth · Hexahedron — Foundation is where the operating system
            meets the soil.
          </p>
        </div>
      </PillarSection>

      <CrossElementNav active="Foundation" />
    </PillarPageShell>
  )
}

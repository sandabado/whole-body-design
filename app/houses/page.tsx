import Link from "next/link"

import {
  PillarHero,
  PillarPageShell,
  PillarSection,
} from "@/components/pillar-page"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const houses = [
  {
    archetype: "Ignition",
    description: "You begin. You start. You are the spark.",
    element: "Fire",
    house: "I",
    pillar: "Presence",
    symbol: "🜂",
    tone: "ember",
  },
  {
    archetype: "Memory",
    description:
      "You hold what was passed down. You remember what others forget.",
    element: "Water",
    house: "II",
    pillar: "Studios",
    symbol: "🜄",
    tone: "teal",
  },
  {
    archetype: "Signal",
    description: "You carry the word. You transmit what needs to be heard.",
    element: "Air",
    house: "III",
    pillar: "Press",
    symbol: "🜁",
    tone: "gold",
  },
  {
    archetype: "Ground",
    description: "You root the vision. You build what lasts.",
    element: "Earth",
    house: "IV",
    pillar: "Foundation",
    symbol: "🜃",
    tone: "sage",
  },
  {
    archetype: "Sovereign",
    description: "You protect the system. You ensure the work outlives you.",
    element: "Ether",
    house: "V",
    pillar: "Guardian",
    symbol: "⊙",
    tone: "violet",
  },
  {
    archetype: "Service",
    description: "You serve the circle. You show up when it matters.",
    element: "Fire",
    house: "VI",
    pillar: "Presence",
    symbol: "🜂",
    tone: "ember",
  },
  {
    archetype: "Mirror",
    description: "You reflect what is hidden. You make the invisible visible.",
    element: "Water",
    house: "VII",
    pillar: "Studios",
    symbol: "🜄",
    tone: "teal",
  },
  {
    archetype: "Transformation",
    description: "You dissolve what is false. You carry what must be released.",
    element: "Air",
    house: "VIII",
    pillar: "Press",
    symbol: "🜁",
    tone: "gold",
  },
  {
    archetype: "Expansion",
    description: "You grow what exists. You multiply what works.",
    element: "Earth",
    house: "IX",
    pillar: "Foundation",
    symbol: "🜃",
    tone: "sage",
  },
  {
    archetype: "Authority",
    description: "You hold the center. You architect the structure.",
    element: "Ether",
    house: "X",
    pillar: "Guardian",
    symbol: "⊙",
    tone: "violet",
  },
  {
    archetype: "Gathering",
    description: "You unite the circle. You bring the tribe together.",
    element: "Fire",
    house: "XI",
    pillar: "Presence",
    symbol: "🜂",
    tone: "ember",
  },
  {
    archetype: "Depth",
    description: "You dive beneath the surface. You find what lies below.",
    element: "Water",
    house: "XII",
    pillar: "Studios",
    symbol: "🜄",
    tone: "teal",
  },
] as const

const elementGroups = [
  {
    element: "Fire",
    houses: ["I", "VI", "XI"],
    symbol: "🜂",
    tone: "ember",
  },
  {
    element: "Air",
    houses: ["III", "VIII"],
    symbol: "🜁",
    tone: "gold",
  },
  {
    element: "Water",
    houses: ["II", "VII", "XII"],
    symbol: "🜄",
    tone: "teal",
  },
  {
    element: "Earth",
    houses: ["IV", "IX"],
    symbol: "🜃",
    tone: "sage",
  },
  {
    element: "Ether",
    houses: ["V", "X"],
    symbol: "⊙",
    tone: "violet",
  },
] as const

const implications = {
  I: "You’re designed to initiate, lead, and move first.",
  II: "You’re designed to preserve, hold, and carry forward.",
  III: "You’re designed to communicate, publish, and transmit.",
  IV: "You’re designed to build foundations that endure.",
  V: "You’re designed to architect trust and hold the container.",
  VI: "You’re designed to support, hold space, and be present.",
  VII: "You’re designed to create art that reveals truth.",
  VIII: "You’re designed to deconstruct, edit, and refine.",
  IX: "You’re designed to scale, replicate, and grow systems.",
  X: "You’re designed to govern, structure, and lead institutions.",
  XI: "You’re designed to convene, unite, and gather people.",
  XII: "You’re designed to explore, research, and plumb depths.",
} as const

const pillarPaths = {
  Foundation: "foundation",
  Guardian: "guardian",
  Presence: "presence",
  Press: "press",
  Studios: "studios",
} as const

const toneClasses = {
  ember:
    "border-ember/25 hover:border-ember/70 hover:shadow-[0_0_28px_rgba(194,84,45,0.18)] text-ember",
  gold: "border-gold/25 hover:border-gold/70 hover:shadow-[0_0_28px_rgba(212,175,55,0.18)] text-gold",
  sage: "border-sage/25 hover:border-sage/70 hover:shadow-[0_0_28px_rgba(74,103,65,0.18)] text-sage",
  teal: "border-teal/25 hover:border-teal/70 hover:shadow-[0_0_28px_rgba(43,168,160,0.18)] text-teal",
  violet:
    "border-violet/25 hover:border-violet/70 hover:shadow-[0_0_28px_rgba(109,74,255,0.18)] text-violet",
}

const textTone = {
  ember: "text-ember",
  gold: "text-gold",
  sage: "text-sage",
  teal: "text-teal",
  violet: "text-violet",
}

const housesTone = {
  accent: "text-pink-light",
  bg: "from-obsidian/82 via-pink/16 to-obsidian/76",
  border: "border-pink/25",
  button:
    "bg-pink text-white shadow-[0_0_28px_rgba(255,47,179,0.3)] hover:bg-pink/90 hover:shadow-[0_0_34px_rgba(255,47,179,0.42)]",
  buttonVariant: "violet" as const,
  sectionBorder: "border-pink/10",
  softAccent: "text-pink-light/72",
  solid: "heroDodecahedron" as const,
}

export default function HousesPage() {
  return (
    <PillarPageShell bridge="houses" solid={housesTone.solid}>
      <PillarHero
        body={
          <>
            <p>
              Twelve rooms in the Dodecahedron. You were born into one. Each
              House maps to an element, an archetype, and a pillar of the Living
              Earth. This is your design.
            </p>
            <Button size="lg" asChild>
              <Link href="/reading">Get Your Whole Body Design Reading →</Link>
            </Button>
          </>
        }
        eyebrow="Dodecana · The 12 Houses"
        status="Twelve faces · Five pillars · One body"
        tagline="The map of your room in the whole."
        title="The Dodecanic System"
        tone={housesTone}
      />

      <PillarSection
        eyebrow="The map"
        title="The Architecture"
        tone={housesTone}
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="mx-auto max-w-3xl text-lg leading-8 text-moonstone/78">
            The Dodecahedron has twelve faces. In the Whole Body system, each
            face is a House. Your House is determined by your birth data — date,
            time, and place. Together, they map your sovereignty layer, your
            primary element, and which pillar you&apos;re designed to build
            first.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {[
              ["Element", "Fire, Air, Water, Earth, or Ether"],
              ["Archetype", "The role your House plays in the system"],
              ["Pillar", "Where your design manifests in the world"],
            ].map(([title, body]) => (
              <Card className="border-gold/15 bg-obsidian/82 p-6" key={title}>
                <h3 className="font-display text-2xl text-moonstone">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-moonstone/64">
                  {body}
                </p>
              </Card>
            ))}
          </div>
          <Button variant="outline" className="mt-9" asChild>
            <Link href="/reading">Take the Reading Now →</Link>
          </Button>
        </div>
      </PillarSection>

      <PillarSection eyebrow="Dodecana" title="The 12 Houses" tone={housesTone}>
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-4">
            {houses.map((house) => (
              <Card
                className={`flex min-h-64 flex-col bg-obsidian/82 p-6 transition ${toneClasses[house.tone]}`}
                key={house.house}
              >
                <p className="font-mono text-xs tracking-[0.18em] uppercase">
                  House {house.house}
                </p>
                <h3 className="mt-4 font-display text-2xl text-moonstone">
                  {house.archetype}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-6 text-moonstone/68">
                  {house.description}
                </p>
                <p className="mt-4 text-xs leading-5 text-moonstone/52 italic">
                  {implications[house.house]}
                </p>
                <p className={`mt-6 font-mono text-xs ${textTone[house.tone]}`}>
                  {house.symbol} {house.element} · {house.pillar}
                </p>
                <a
                  className="mt-4 text-xs text-moonstone/62 transition hover:text-gold"
                  href={`https://wholebody.earth/${pillarPaths[house.pillar]}`}
                >
                  Explore {house.pillar} →
                </a>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="mb-5 text-moonstone/62">
              Not sure which House you are?
            </p>
            <Button asChild>
              <Link href="/reading">Get Your Whole Body Design Reading →</Link>
            </Button>
          </div>
        </div>
      </PillarSection>

      <PillarSection
        eyebrow="Element paths"
        title="By Element"
        tone={housesTone}
      >
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4">
            {elementGroups.map((group) => {
              const groupHouses = houses.filter((house) =>
                (group.houses as readonly string[]).includes(house.house)
              )

              return (
                <details
                  className={`rounded-lg border bg-obsidian/82 p-5 ${toneClasses[group.tone]}`}
                  key={group.element}
                  open={group.element === "Fire"}
                >
                  <summary className="cursor-pointer font-display text-2xl text-moonstone">
                    <span className={textTone[group.tone]}>{group.symbol}</span>{" "}
                    {group.element} — Houses {group.houses.join(", ")}
                  </summary>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    {groupHouses.map((house) => (
                      <div
                        className="rounded border border-white/8 bg-white/[0.03] p-4"
                        key={house.house}
                      >
                        <p className="font-mono text-xs text-moonstone/48">
                          House {house.house}
                        </p>
                        <h3 className="mt-2 font-display text-xl text-moonstone">
                          {house.archetype}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-moonstone/64">
                          {house.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <a
                    className="mt-5 inline-block text-sm text-gold hover:text-gold/75"
                    href={`https://wholebody.earth/${pillarPaths[groupHouses[0].pillar]}`}
                  >
                    Explore {groupHouses[0].pillar} →
                  </a>
                </details>
              )
            })}
          </div>
        </div>
      </PillarSection>

      <PillarSection
        eyebrow="Next steps"
        title="Deepen Your Understanding"
        tone={housesTone}
      >
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              [
                "Take the Whole Body Design Reading to discover your House.",
                "Get Your Reading",
                "/reading",
              ],
              [
                "Join the sovereign network. Build with people who know their House.",
                "Join the Guild",
                "/guild",
              ],
            ].map(([body, cta, href]) => (
              <Card
                className="border-gold/15 bg-obsidian/82 p-6 text-center"
                key={cta}
              >
                <p className="text-sm leading-6 text-moonstone/70">{body}</p>
                <Button
                  variant={href === "/reading" ? "gold" : "violet"}
                  className="mt-5"
                  asChild
                >
                  <Link href={href}>{cta} →</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </PillarSection>
    </PillarPageShell>
  )
}

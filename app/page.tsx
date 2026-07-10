import Link from "next/link"
import type { ReactNode } from "react"

import { PlatonicBackground } from "@/components/platonic-background"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const SECTIONS = [
  { id: "hero", solid: "heroDodecahedron" as const },
  { id: "about", solid: "starChart" as const },
  { id: "fire", solid: "tetrahedron" as const },
  { id: "air", solid: "octahedron" as const },
  { id: "water", solid: "icosahedron" as const },
  { id: "earth", solid: "hexahedron" as const },
  { id: "ether", solid: "dodecahedron" as const },
  { id: "star-mapping", solid: "bindu" as const },
]

const pillars = [
  {
    element: "Fire",
    href: "/presence",
    pillar: "Presence",
    solid: "Tetrahedron",
    status: "🟢 Active",
    symbol: "🜂",
    tone: "text-ember",
    hover:
      "hover:border-ember/70 hover:text-ember hover:shadow-[0_0_22px_rgba(194,84,45,0.22)]",
  },
  {
    element: "Air",
    href: "/press",
    pillar: "Press",
    solid: "Octahedron",
    status: "🟢 Active",
    symbol: "🜁",
    tone: "text-gold",
    hover:
      "hover:border-gold/70 hover:text-gold hover:shadow-[0_0_22px_rgba(212,175,55,0.22)]",
  },
  {
    element: "Water",
    href: "/studios",
    pillar: "Studios",
    solid: "Icosahedron",
    status: "🟢 Active",
    symbol: "🜄",
    tone: "text-teal",
    hover:
      "hover:border-teal/70 hover:text-teal hover:shadow-[0_0_22px_rgba(43,168,160,0.22)]",
  },
  {
    element: "Earth",
    href: "/foundation",
    pillar: "Foundation",
    solid: "Hexahedron",
    status: "🟢 Active",
    symbol: "🜃",
    tone: "text-sage",
    hover:
      "hover:border-sage/70 hover:text-sage hover:shadow-[0_0_22px_rgba(74,103,65,0.22)]",
  },
  {
    element: "Ether",
    href: "/guardian",
    pillar: "Guardian",
    solid: "Dodecahedron",
    status: "🔒 Soon",
    symbol: "⊙",
    tone: "text-violet",
    hover:
      "hover:border-violet/70 hover:text-violet hover:shadow-[0_0_22px_rgba(109,74,255,0.22)]",
  },
]

const codexVolumes = [
  ["I.", "Whole Body Presence", "Build the instrument."],
  ["II.", "Twelvefold Harmonics", "Play the song."],
  ["III.", "Infinite Presence", "Be the silence."],
  ["IV.", "The Living Spiral", "Dance the turn."],
  ["V.", "Triangle of Trust", "Build the home."],
]

const sectionShell =
  "relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-20 sm:py-24"

export default function HomePage() {
  return (
    <>
      <PlatonicBackground sections={SECTIONS} />
      <div className="relative z-10">
        <SiteNav />

        <main>
          <section
            id="hero"
            className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-20 sm:py-24"
          >
            <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-amethyst/18 via-obsidian/24 to-obsidian/58" />
            <div className="relative mx-auto max-w-4xl text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.88)]">
              <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase sm:text-sm">
                The Whole Body Constellation
              </p>
              <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-[0.95] font-bold text-moonstone sm:text-6xl lg:text-7xl">
                Five pillars. Twelve houses. One whole body.
              </h1>
              <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base leading-7 sm:text-lg">
                <p className="text-moonstone/78">
                  Whole Body is the return. Five elements mapped to five
                  geometric solids. Each element is a pillar. Each pillar is a
                  part of you.
                </p>
                <p className="text-sm text-moonstone/52 sm:text-base">
                  Four pillars live now. Guardian opens when the structure is
                  ready.
                </p>
              </div>
              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="#star-mapping">
                    Get Your Whole Body Design Reading →
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/store">Enter the Library ↓</Link>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {pillars.map((pillar) => (
                  <Link
                    href={pillar.href}
                    className={`inline-flex items-center gap-2 rounded-full border border-moonstone/14 bg-obsidian/36 px-3 py-1.5 font-mono text-xs text-moonstone/58 transition ${pillar.hover}`}
                    key={pillar.pillar}
                  >
                    <span className={pillar.tone}>{pillar.symbol}</span>
                    {pillar.pillar}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className={sectionShell}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(13,13,13,0.78),rgba(13,13,13,0.46)_38%,rgba(13,13,13,0.12)_68%,transparent_82%),linear-gradient(180deg,rgba(13,13,13,0.42),rgba(13,13,13,0.18)_35%,rgba(13,13,13,0.36))]" />
            <div className="relative mx-auto w-full max-w-5xl">
              <div className="mx-auto mb-8 h-px w-16 bg-gold/25" />
              <div className="mx-auto max-w-3xl text-center [text-shadow:0_2px_20px_rgba(0,0,0,0.88)]">
                <h2 className="font-display text-3xl font-semibold text-gold sm:text-4xl">
                  You Are Made of the Elements.
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-8 text-moonstone/80">
                  <p>
                    Every solid in nature maps to a force inside you. Fire is
                    your drive to gather. Air is the breath that carries your
                    words. Water is the memory that shapes who you become. Earth
                    is the ground beneath what you build. Ether is the space
                    that holds it all together.
                  </p>
                  <p>
                    WholeBody maps these five elements to five geometric solids
                    — the Platonic forms — and to five pillars of work. Each
                    pillar is a part of you. Each element has a shape. Each
                    shape has a purpose.
                  </p>
                </div>
                <Button variant="link" className="mt-8" asChild>
                  <Link href="/mission">Read the Full Mission →</Link>
                </Button>
              </div>

              <div className="mt-12 overflow-hidden rounded-lg border border-gold/15">
                <div className="hidden grid-cols-5 border-b border-gold/10 bg-gold/5 px-4 py-3 font-mono text-xs tracking-[0.16em] text-gold uppercase md:grid">
                  <span>Symbol</span>
                  <span>Element</span>
                  <span>Solid</span>
                  <span>Pillar</span>
                  <span>Status</span>
                </div>
                <div className="divide-y divide-gold/10">
                  {pillars.map((pillar) => (
                    <div
                      className="grid gap-2 px-4 py-4 font-mono text-sm text-moonstone/72 transition hover:bg-gold/5 md:grid-cols-5"
                      key={pillar.pillar}
                    >
                      <span className={pillar.tone}>{pillar.symbol}</span>
                      <span className={pillar.tone}>{pillar.element}</span>
                      <span>{pillar.solid}</span>
                      <span>{pillar.pillar}</span>
                      <span>{pillar.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <ElementSection
            id="fire"
            accent="text-ember"
            background="from-obsidian/70 via-ember/16 to-obsidian/66"
            ctaHref="/presence"
            ctaLabel="Explore Presence"
            eyebrow="🜂 FIRE · TETRAHEDRON"
            heading="Presence"
            tagline="The shape of ignition."
            body={[
              "Fire is the circle that holds you. Weekly gatherings. Monthly retreats. Rites of passage. No hierarchy. No guru. Just belonging.",
              "You cannot endure alone.",
            ]}
            meaning="Four faces. The simplest solid. The spark that starts everything. Fire is community — the warmth that happens when people gather and tell the truth."
          >
            <Card className="border-ember/25 bg-obsidian/84 p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-ember uppercase">
                THE HEARTHFIRE SESSION
              </p>
              <h3 className="mt-3 font-display text-2xl text-moonstone">
                Monthly Virtual Circle · Free
              </h3>
              <p className="mt-3 text-sm leading-6 text-moonstone/68">
                Every [day TBD] · 60 minutes · Virtual
              </p>
              <p className="mt-3 text-sm leading-6 text-moonstone/68">
                The open door. Show up. Breathe. Listen.
              </p>
              <Button variant="link" className="mt-4 p-0 text-ember" asChild>
                <Link href="/presence#hearthfire">Join the Circle →</Link>
              </Button>
            </Card>
            <Card className="border-ember/25 bg-obsidian/84 p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-ember uppercase">
                CIRCLE IN THE STONE
              </p>
              <h3 className="mt-3 font-display text-2xl text-moonstone">
                Monthly In-Person · Location Rotates
              </h3>
              <p className="mt-3 text-sm leading-6 text-moonstone/68">
                Deep work. Closed container. Physical presence.
              </p>
              <Button variant="link" className="mt-4 p-0 text-ember" asChild>
                <Link href="/presence#events">View Dates →</Link>
              </Button>
            </Card>
          </ElementSection>

          <ElementSection
            id="air"
            accent="text-gold"
            background="from-obsidian/70 via-gold/18 to-obsidian/66"
            ctaHref="/manuals"
            ctaLabel="Explore Press"
            eyebrow="🜁 AIR · OCTAHEDRON"
            heading="Press"
            tagline="The shape that carries."
            body={[
              "Books are technology. Tools for transformation. Not commodities. Authors retain 100% IP. The Feed First Algorithm ensures the writer eats before the printer.",
              "The Living Earth Codex — Five volumes. From the instrument to the spiral. From silence to manifestation. Available now.",
            ]}
            meaning="Two pyramids joined. Eight faces. Air is the breath between — the medium that carries signal. Publishing is how the signal reaches the one who needs it."
          >
            <Card className="border-gold/25 bg-obsidian/84 p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-gold uppercase">
                THE LIVING EARTH CODEX
              </p>
              <div className="mt-5 space-y-3">
                {codexVolumes.map(([number, title, line]) => (
                  <p
                    className="grid grid-cols-[2rem_1fr] gap-2 text-sm leading-6 text-moonstone/72"
                    key={title}
                  >
                    <span className="font-mono text-gold">{number}</span>
                    <span>
                      <span className="text-moonstone">{title}</span> — &quot;
                      {line}&quot;
                    </span>
                  </p>
                ))}
              </div>
              <div className="mt-6 space-y-2 font-mono text-sm text-gold">
                <p>Digital — $22 each / $111 bundle</p>
                <p>Physical — $77 each / $333 bundle</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button variant="gold" asChild>
                  <Link href="/manuals">Buy the Codex →</Link>
                </Button>
                <Button variant="goldOutline" asChild>
                  <Link href="/manuals/vol-i">Read Vol. I Free →</Link>
                </Button>
              </div>
            </Card>
          </ElementSection>

          <ElementSection
            id="water"
            accent="text-teal"
            background="from-obsidian/70 via-teal/18 to-obsidian/66"
            ctaHref="/studios"
            ctaLabel="Explore Studios"
            eyebrow="🜄 WATER · ICOSAHEDRON"
            heading="Studios"
            tagline="The shape that remembers."
            body={[
              "Music is infrastructure. The song is current, not content. Artists retain 100% masters and publishing. The artist eats first.",
              "The Living Earth: Volume 1 — Twelve tracks. Twelve Houses. Each track tuned to a room in the Dodecahedron.",
            ]}
            meaning="Twenty faces. The most complex solid. Water holds memory. Music is water — it finds every crack, fills every space, remembers what the mind forgets."
          >
            <Card className="border-teal/25 bg-obsidian/84 p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-teal uppercase">
                LIVING EARTH: VOL. 1
              </p>
              <h3 className="mt-3 font-display text-2xl text-moonstone">
                Twelve tracks. Twelve Houses.
              </h3>
              <div className="mt-5 space-y-2 rounded border border-teal/20 bg-teal/5 p-4">
                {["Ground", "Flow", "Spark"].map((track) => (
                  <div
                    className="flex items-center justify-between font-mono text-xs text-moonstone/72"
                    key={track}
                  >
                    <span className="text-teal">[ ▶ ]</span>
                    <span className="flex-1 pl-3">{track}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 space-y-2 font-mono text-sm text-gold">
                <p>Digital — $25</p>
                <p>Vinyl — $150</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button variant="teal" asChild>
                  <Link href="/store">Buy Digital →</Link>
                </Button>
                <Button variant="tealOutline" asChild>
                  <Link href="/store">Order Vinyl →</Link>
                </Button>
              </div>
              <div className="mt-6 border-t border-teal/20 pt-5">
                <p className="font-display text-xl text-moonstone">
                  SANDABADO — Debut Album
                </p>
                <p className="mt-2 text-sm text-moonstone/64">
                  Vinyl — $33 · Stream Free
                </p>
                <Button variant="link" className="mt-3 p-0 text-teal" asChild>
                  <Link href="/studios/sandabado">Stream Free →</Link>
                </Button>
                <Button
                  variant="link"
                  className="mt-3 ml-5 p-0 text-teal"
                  asChild
                >
                  <Link href="/store">Order Vinyl →</Link>
                </Button>
              </div>
            </Card>
          </ElementSection>

          <ElementSection
            id="earth"
            accent="text-sage"
            background="from-obsidian/70 via-sage/18 to-obsidian/66"
            ctaHref="/foundation"
            ctaLabel="Explore Foundation"
            eyebrow="🜃 EARTH · HEXAHEDRON"
            heading="Foundation"
            tagline="The shape that endures."
            body={[
              "Rammed earth. Off-grid. Carbon negative. A place to stand that cannot be taken.",
              "Without the ground, the vision floats away.",
            ]}
            meaning="The cube. Six faces. The most stable form. Earth is the ground beneath the vision — without it, everything floats away. Foundation is where the operating system meets the soil."
          >
            <Card className="border-sage/25 bg-obsidian/84 p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-sage uppercase">
                GLORY PEAK COMMUNITY GARDEN AND TRAILS
              </p>
              <h3 className="mt-3 font-display text-2xl text-moonstone">
                Morongo Valley, CA
              </h3>
              <div className="mt-5 space-y-3 text-sm leading-6 text-moonstone/72">
                <p>
                  The first physical footprint of the Whole Body Constellation.
                </p>
                <p>
                  Dirt, seeds, stone, and sweat in the Morongo Valley desert.
                </p>
                <p>Without the ground, the vision floats away.</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button variant="sage" asChild>
                  <Link href="/foundation">Follow the Build →</Link>
                </Button>
              </div>
            </Card>
          </ElementSection>

          <ElementSection
            id="ether"
            accent="text-violet"
            background="from-obsidian/70 via-violet/18 to-obsidian/66"
            ctaHref="/guardian"
            ctaLabel="Explore Guardian"
            eyebrow="⊙ ETHER · DODECAHEDRON"
            heading="Guardian"
            tagline="The shape that holds."
            body={[
              "Sovereign systems. Trust architecture. Asset protection. IP shielding. For creators with something real to protect.",
              "The Dodecahedron contains all other solids. Ether holds space for fire, air, water, and earth. Guardian holds space for everything you've built.",
              "Coming 2027.",
            ]}
            meaning="Twelve faces. The container of all forms. Ether is the field that holds everything — the silence between notes, the space between stars. Guardian is the structure that ensures what you built outlasts you."
          >
            <Card className="border-violet/25 bg-obsidian/84 p-6">
              <p className="font-mono text-xs tracking-[0.18em] text-violet uppercase">
                GUARDIAN ELIGIBILITY
              </p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-moonstone/72">
                <p>Minimum: $50k/year revenue</p>
                <p>Structures: Wyoming DAPT, Family LLC, TOLI</p>
                <p className="font-mono text-violet">Planned Architecture:</p>
                <p>Foundational trust + LLC</p>
                <p>Multi-entity architecture</p>
                <p>Complete sovereign system</p>
              </div>
              <Button variant="violet" className="mt-5" asChild>
                <Link href="/guardian#waitlist">Join Waitlist →</Link>
              </Button>
            </Card>
          </ElementSection>

          <section id="star-mapping" className={sectionShell}>
            <div className="bg-gradient-radial pointer-events-none absolute inset-0 from-amethyst/22 via-obsidian/34 to-obsidian/70" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(13,13,13,0.82),rgba(13,13,13,0.52)_34%,rgba(13,13,13,0.18)_62%,transparent_78%)]" />
            <div className="relative mx-auto w-full max-w-5xl text-center [text-shadow:0_2px_24px_rgba(0,0,0,0.94)]">
              <div className="mx-auto mb-8 h-px w-16 bg-gold/25" />
              <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
                Whole Body Design Reading
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-gold sm:text-5xl">
                Which House Are You?
              </h2>
              <div className="mx-auto mt-6 max-w-2xl space-y-5 text-lg leading-8 text-moonstone/88">
                <p>
                  Twelve rooms in the Dodecahedron. You were born into one. Your
                  House determines your archetype, your element, your
                  sovereignty layer, and which pillar of the Living Earth you
                  are designed to build first.
                </p>
                <p>
                  The Whole Body Design Reading synthesizes fifteen wisdom
                  systems — astrology, Human Design, Gene Keys, Enneagram,
                  Tarot, numerology — into a single sovereign life map.
                </p>
                <p>Sixty seconds. No email required for basic reading.</p>
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link href="/reading">
                  GET YOUR WHOLE BODY DESIGN READING →
                </Link>
              </Button>
              <blockquote className="mx-auto mt-12 max-w-lg">
                <p className="text-sm leading-6 text-moonstone/74 italic">
                  &quot;I am House V. I didn&apos;t realize my creative work
                  needed legal protection until the reading showed me.&quot;
                </p>
                <footer className="mt-3 font-mono text-xs text-gold/55">
                  Marcus, musician
                </footer>
              </blockquote>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  )
}

function ElementSection({
  accent,
  background,
  body,
  children,
  ctaHref,
  ctaLabel,
  eyebrow,
  heading,
  id,
  meaning,
  tagline,
}: {
  accent: string
  background: string
  body: string[]
  children: ReactNode
  ctaHref: string
  ctaLabel: string
  eyebrow: string
  heading: string
  id: string
  meaning: string
  tagline: string
}) {
  return (
    <section id={id} className={sectionShell}>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${background}`}
      />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="[text-shadow:0_2px_18px_rgba(0,0,0,0.82)]">
          <p
            className={`font-mono text-xs tracking-[0.25em] uppercase ${accent}`}
          >
            {eyebrow}
          </p>
          <h2 className={`mt-4 font-display text-4xl font-semibold ${accent}`}>
            {heading}
          </h2>
          <p className={`mt-3 font-display text-2xl italic ${accent}`}>
            {tagline}
          </p>
          <div className="mt-6 space-y-5 text-lg leading-8 text-moonstone/80">
            {body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 text-sm leading-6 text-moonstone/54">{meaning}</p>
          <Button
            variant="outline"
            className={`mt-8 border-current bg-transparent ${accent} hover:bg-moonstone/5`}
            asChild
          >
            <Link href={ctaHref}>{ctaLabel} →</Link>
          </Button>
        </div>
        <div className="grid gap-5">{children}</div>
      </div>
    </section>
  )
}

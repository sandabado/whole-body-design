import Link from "next/link"

import { CrossElementNav } from "@/components/cross-element-nav"
import {
  PillarCard,
  PillarHero,
  PillarPageShell,
  PillarSection,
  StepList,
  pillarTones,
} from "@/components/pillar-page"
import { Button } from "@/components/ui/button"

const tone = pillarTones.gold

const services = [
  {
    body: "The Whole Body Series. Five volumes of the Codex. We publish, format, and distribute. You retain 100% IP.",
    cta: "Explore the Codex",
    href: "/manuals",
    title: "📚 Publishing",
  },
  {
    body: "Secure in-app reader. Watermarked. No download leaks. Members access all volumes through their account dashboard.",
    cta: "How the Reader Works",
    href: "/manuals#reader",
    title: "🔒 Digital Library",
  },
  {
    body: "Publish aligned authors through Whole Body Press. 50/50 royalty split. Feed First model. If your work serves the Living Earth, we want to read it.",
    cta: "Submit Your Manuscript",
    href: "mailto:press@wholebody.earth",
    title: "🎙️ Author Platform",
  },
  {
    body: "Hand-bound limited editions. Physical media that lasts. When a book is a sacred object, not a commodity, it deserves to be crafted accordingly.",
    cta: "View Physical Editions",
    href: "/store",
    title: "📖 Physical Print",
  },
]

const volumes = [
  'I. Whole Body Presence — "Build the instrument."',
  'II. Twelvefold Harmonics — "Play the song."',
  'III. Infinite Presence — "Be the silence."',
  'IV. The Living Spiral — "Dance the turn."',
  'V. Triangle of Trust — "Build the home."',
]

const steps = [
  {
    body: "Purchase any volume or bundle. Instantly unlocked.",
    title: "BUY",
  },
  {
    body: "Access through your account dashboard. Secure reader. Watermarked. No download leaks. Works on any device.",
    title: "READ",
  },
  {
    body: "Your library is permanent. New volumes added as published. No expiration on purchased content.",
    title: "KEEP",
  },
]

export default function PressPage() {
  return (
    <PillarPageShell solid={tone.solid}>
      <PillarHero
        eyebrow="🜁 AIR · OCTAHEDRON"
        status="🟢 Active"
        tagline="The shape that carries."
        title="Whole Body Press"
        tone={tone}
        body={
          <>
            <p>
              The octahedron. Two pyramids joined at the base. Eight faces. The
              shape of equilibrium — what rises meets what descends. Air is the
              medium. It carries signal.
            </p>
            <p>
              Books are not commodities. They are technology. Tools for
              transformation. The word becomes structure. Structure becomes
              life. This is how the signal reaches the one who needs it.
            </p>
          </>
        }
        featured={
          <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <PillarCard compact tone={tone} key={service.title}>
                <h3 className="font-display text-xl text-moonstone">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-moonstone/72">
                  {service.body}
                </p>
                <Button variant={tone.buttonVariant} className="mt-4" asChild>
                  <Link href={service.href}>{service.cta} →</Link>
                </Button>
              </PillarCard>
            ))}
          </div>
        }
      />

      <PillarSection title="The Living Earth Codex" tone={tone}>
        <div className="max-w-4xl">
          <p className="text-lg leading-8 text-moonstone/80">
            Five volumes. One operating system. From the instrument to the
            spiral. From silence to manifestation. Available now.
          </p>
          <div className="mt-7 space-y-3 font-display text-lg text-moonstone">
            {volumes.map((volume) => (
              <p key={volume}>{volume}</p>
            ))}
          </div>
          <div className="mt-7 space-y-2 font-mono text-sm text-gold/70">
            <p>Digital — $22 each / $111 bundle</p>
            <p>Physical — $77 each / $333 bundle</p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button variant={tone.buttonVariant} asChild>
              <Link href="/manuals">Buy Digital Bundle — $111 →</Link>
            </Button>
            <Button variant="goldOutline" asChild>
              <Link href="/manuals">Buy Physical Bundle — $333 →</Link>
            </Button>
            <Button variant="goldOutline" asChild>
              <Link href="/manuals/vol-i">Read Vol. I Free →</Link>
            </Button>
          </div>
        </div>
      </PillarSection>

      <PillarSection title="How Digital Access Works" tone={tone}>
        <StepList steps={steps} tone={tone} />
      </PillarSection>

      <PillarSection title="The Shape That Carries" tone={tone}>
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-moonstone/80">
          <p>
            The octahedron is two tetrahedra mirrored and joined. Fire inverted.
            What ignites must also be received. Air is the space between — the
            breath that carries the word from the writer to the reader, from the
            maker to the one who needs it.
          </p>
          <p>
            The Old World turned publishing into extraction. The publisher owns
            the words. The author gets 8%. The platform controls distribution.
            The writer rents their own voice.
          </p>
          <p>
            Whole Body Press inverts this. The author retains 100% IP. The Feed
            First Algorithm ensures the writer eats before the printer. We hold
            the infrastructure — editing, formatting, distribution, secure
            reader technology — so the author holds the work.
          </p>
          <p>Air does not own the signal. Air carries it.</p>
        </div>
      </PillarSection>

      <CrossElementNav active="Press" />
    </PillarPageShell>
  )
}

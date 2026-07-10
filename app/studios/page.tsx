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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const tone = pillarTones.teal

const services = [
  {
    body: "From the first note to the finished record. Production, arrangement, vocal coaching, artistic direction. We develop the whole artist — not just the single.",
    cta: "Apply for Partnership",
    href: "/studios#submit",
    title: "🎛️ Artist Development",
  },
  {
    body: "Tracking, mixing, mastering. Remote and in-studio. Every release meets broadcast and streaming standards.",
    cta: "Book Engineering",
    href: "/studios#engineering",
    title: "🎚️ Audio Engineering",
  },
  {
    body: "DSP distribution to Spotify, Apple Music, YouTube Music, Bandcamp, and Tidal. Digital and physical. The artist retains 100% of royalties.",
    cta: "Start Distribution",
    href: "/studios#distribution",
    title: "📡 Distribution",
  },
  {
    body: "Sync-ready catalog. Film, TV, advertising, and brand placements. Clear metadata. Quick turnaround. The artist approves every placement.",
    cta: "Explore Sync",
    href: "/studios#sync",
    title: "🎼 Sync Licensing",
  },
]

const steps = [
  {
    body: "Send us your work. Music, backstory, vision. We review every submission personally.",
    title: "SUBMIT",
  },
  {
    body: "If there's alignment, we talk. Not a contract call. A real conversation about your art, your goals, and what sovereignty means to you.",
    title: "CONVERSATION",
  },
  {
    body: "We build the record. Production, engineering, distribution. You retain 100% masters and publishing. Feed First model applies.",
    title: "PRODUCE",
  },
  {
    body: "Your music reaches the world. Digital and physical. The artist eats first. Always.",
    title: "RELEASE",
  },
]

export default function StudiosPage() {
  return (
    <PillarPageShell solid={tone.solid}>
      <PillarHero
        eyebrow="🜄 WATER · ICOSAHEDRON"
        status="🟢 Active"
        tagline="The shape that remembers."
        title="Whole Body Studios"
        tone={tone}
        body={
          <>
            <p>
              The icosahedron. Twenty faces. The most complex of the Platonic
              solids. Water is the element of memory and flow.
            </p>
            <p>
              Music is infrastructure. The song is current, not content. Artists
              retain 100% masters and publishing. The artist eats first. This is
              not a label. It is a waterway — engineered to carry the signal
              without damming it.
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

      <PillarSection title="Featured Releases" tone={tone}>
        <div className="grid gap-5 lg:grid-cols-2">
          <PillarCard tone={tone}>
            <p className="font-mono text-xs tracking-[0.18em] text-teal uppercase">
              LIVING EARTH: VOL. 1
            </p>
            <p className="mt-4 text-sm leading-6 text-moonstone/72">
              Twelve tracks. Twelve Houses. Each track tuned to a room in the
              Dodecahedron.
            </p>
            <div className="mt-5 space-y-2 rounded border border-teal/20 bg-teal/5 p-4 font-mono text-xs text-moonstone/72">
              <p>[ ▶ ] Ground</p>
              <p>[ ▶ ] Flow</p>
              <p>[ ▶ ] Spark</p>
              <p>[ Full player coming soon ]</p>
            </div>
            <div className="mt-5 space-y-2 font-mono text-sm text-gold">
              <p>Digital — $25</p>
              <p>Vinyl — $150</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant={tone.buttonVariant} asChild>
                <Link href="/store">Buy Digital →</Link>
              </Button>
              <Button variant="tealOutline" asChild>
                <Link href="/store">Order Vinyl →</Link>
              </Button>
              <Button variant="tealOutline" asChild>
                <Link href="/studios/vol-1">Stream Free →</Link>
              </Button>
            </div>
          </PillarCard>

          <PillarCard tone={tone}>
            <p className="font-mono text-xs tracking-[0.18em] text-teal uppercase">
              SANDABADO — Debut Album
            </p>
            <p className="mt-4 text-sm leading-6 text-moonstone/72">
              The first release from Whole Body Studios.
            </p>
            <p className="mt-5 font-mono text-sm text-gold">
              Vinyl — $33 · Stream Free
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant={tone.buttonVariant} asChild>
                <Link href="/studios/sandabado">Stream Free →</Link>
              </Button>
              <Button variant="tealOutline" asChild>
                <Link href="/store">Order Vinyl — $33 →</Link>
              </Button>
            </div>
          </PillarCard>
        </div>
      </PillarSection>

      <PillarSection title="How Partnership Works" tone={tone}>
        <StepList steps={steps} tone={tone} />
        <PillarCard tone={tone}>
          <form
            action="/api/submissions"
            method="post"
            id="submit"
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            <div>
              <Label htmlFor="artist-name">Name</Label>
              <Input id="artist-name" name="name" required />
            </div>
            <div>
              <Label htmlFor="artist-email">Email</Label>
              <Input id="artist-email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="artist-project">Artist Name</Label>
              <Input id="artist-project" name="artistName" required />
            </div>
            <div>
              <Label htmlFor="artist-url">Portfolio URL</Label>
              <Input id="artist-url" name="portfolioUrl" type="url" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="artist-work">Tell us about your work</Label>
              <Textarea id="artist-work" name="message" required />
            </div>
            <div className="md:col-span-2">
              <Button variant={tone.buttonVariant}>Submit</Button>
              <p className="mt-3 font-mono text-xs text-moonstone/52">
                Submissions open now. We respond within 14 days.
              </p>
            </div>
          </form>
        </PillarCard>
      </PillarSection>

      <PillarSection title="The Shape That Remembers" tone={tone}>
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-moonstone/80">
          <p>
            The icosahedron has twenty faces — the most of any Platonic solid.
            It is the closest geometry gets to a sphere. Water takes the shape
            of its container but remembers its source. It finds every crack. It
            fills every space. It dissolves what is false and carries what is
            true.
          </p>
          <p>
            The Old World turned music into content. The label owns the masters.
            The platform owns the distribution. The artist gets fractions of a
            penny per stream. The song becomes inventory.
          </p>
          <p>
            Whole Body Studios inverts this. The artist retains 100% of masters
            and publishing. We provide production, engineering, distribution,
            and sync licensing infrastructure. The Feed First Algorithm routes
            revenue to the creator before it reaches operations. The song is
            current — it belongs to the river, not the dam.
          </p>
        </div>
      </PillarSection>

      <CrossElementNav active="Studios" />
    </PillarPageShell>
  )
}

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

const tone = pillarTones.violet

const services = [
  {
    body: "Wyoming DAPT, Family LLC, TOLI structures. Keep assets out of reach of creditors, predators, and probate.",
    cta: "Learn More",
    href: "/guardian#trusts",
    title: "🏛️ Trust Architecture",
  },
  {
    body: "Multi-layered shields for IP, income streams, and property. Operating agreements, charging orders, and veil-strengthening protocols.",
    cta: "Learn More",
    href: "/guardian#protection",
    title: "🛡️ Asset Protection",
  },
  {
    body: "Copyright, trademark, and publishing rights structured for maximum protection. Your intellectual property held in trust, not in your personal name.",
    cta: "Learn More",
    href: "/guardian#ip",
    title: "📜 IP Shielding",
  },
  {
    body: "Generational transfer structures. Dynasty trusts. Your work outlives you — by design, not by accident.",
    cta: "Learn More",
    href: "/guardian#legacy",
    title: "🌱 Legacy Planning",
  },
]

const tiers = [
  {
    body: "Foundational trust + LLC package. One entity. One trust. Basic IP structure. For creators just beginning to protect their work.",
    price: "$5,000",
    title: "THE SHIELD",
  },
  {
    body: "Multi-entity architecture. Two trusts. Full IP shielding. Operating agreements. For creators with revenue and assets to protect.",
    price: "$10,000",
    title: "THE FORTRESS",
  },
  {
    body: "Complete sovereign system. Dynasty trust. Off-grid property structures. Generational transfer plan. For creators building legacy at scale.",
    price: "$15,000",
    title: "THE SOVEREIGN",
  },
]

const steps = [
  {
    body: "Submit your situation. Revenue, assets, IP portfolio. We assess fit.",
    title: "APPLY",
  },
  {
    body: "Jesse designs your sovereign structure. Custom. Not templated. Your life, your architecture.",
    title: "ARCHITECT",
  },
  {
    body: "We file the trust, form the entities, transfer the assets. The structure goes live.",
    title: "BUILD",
  },
  {
    body: "Annual review. The structure adapts as your life grows. Guardianship is ongoing, not one-time.",
    title: "MAINTAIN",
  },
]

export default function GuardianPage() {
  return (
    <PillarPageShell solid={tone.solid}>
      <PillarHero
        eyebrow="⊙ ETHER · DODECAHEDRON"
        status="🔒 Coming 2027"
        tagline="The shape that holds."
        title="Whole Body Guardian"
        tone={tone}
        body={
          <>
            <p>
              The dodecahedron. Twelve faces. The container of all forms. Ether
              is the field that holds everything — the silence between notes,
              the space between stars. Guardian is the structure that ensures
              what you built outlasts you.
            </p>
            <p>
              Sovereign systems. Trust architecture. Asset protection. IP
              shielding. For creators with something real to protect.
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

      <PillarSection title="Planned Architecture" tone={tone}>
        <div className="max-w-4xl text-lg leading-8 text-moonstone/80">
          <p>
            Guardian launches in 2027. The following tiers represent the planned
            service offerings. Final pricing and scope confirmed at launch.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {tiers.map((tier) => (
            <PillarCard tone={tone} key={tier.title}>
              <p className="font-mono text-xs text-gold">Tier</p>
              <h3 className="mt-3 font-display text-2xl text-moonstone">
                {tier.title} — {tier.price}
              </h3>
              <p className="mt-4 text-sm leading-6 text-moonstone/72">
                &quot;{tier.body}&quot;
              </p>
            </PillarCard>
          ))}
        </div>
        <p className="mt-7 font-mono text-sm text-gold/50">
          &quot;Minimum: $50k/year revenue. Structures: Wyoming DAPT, Family
          LLC, TOLI. Final pricing confirmed at launch.&quot;
        </p>
      </PillarSection>

      <PillarSection title="The Process" tone={tone}>
        <StepList steps={steps} tone={tone} />
        <p className="mt-7 text-sm leading-6 text-moonstone/50">
          &quot;This process launches with Guardian in 2027. Join the waitlist
          to be notified when applications open.&quot;
        </p>
      </PillarSection>

      <PillarSection title="Join the Waitlist" tone={tone}>
        <PillarCard tone={tone}>
          <form
            action="/api/waitlist"
            method="post"
            id="waitlist"
            className="grid gap-4 md:grid-cols-2"
          >
            <input type="hidden" name="pillar" value="guardian" />
            <div>
              <Label htmlFor="guardian-name">Name</Label>
              <Input id="guardian-name" name="name" required />
            </div>
            <div>
              <Label htmlFor="guardian-email">Email</Label>
              <Input id="guardian-email" name="email" type="email" required />
            </div>
            <div>
              <Label htmlFor="guardian-revenue">Annual Revenue Range</Label>
              <select
                id="guardian-revenue"
                name="revenueRange"
                className="h-8 w-full rounded-lg border border-input bg-obsidian px-2.5 py-1 text-sm text-moonstone"
              >
                <option>Under $50k</option>
                <option>$50k-$100k</option>
                <option>$100k-$250k</option>
                <option>$250k-$500k</option>
                <option>$500k+</option>
              </select>
            </div>
            <div>
              <Label htmlFor="guardian-asset">Primary Asset to Protect</Label>
              <select
                id="guardian-asset"
                name="primaryAsset"
                className="h-8 w-full rounded-lg border border-input bg-obsidian px-2.5 py-1 text-sm text-moonstone"
              >
                <option>Music/Masters</option>
                <option>Books/IP</option>
                <option>Business/Brand</option>
                <option>Real Estate</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="guardian-protect">
                What are you trying to protect?
              </Label>
              <Textarea id="guardian-protect" name="note" required />
            </div>
            <div className="md:col-span-2">
              <Button variant={tone.buttonVariant}>Join Waitlist</Button>
              <p className="mt-4 text-sm leading-6 text-moonstone/68">
                You&apos;re on the list. We&apos;ll notify you when Guardian
                opens applications. Until then, build what needs protecting.
              </p>
              <p className="mt-5 text-sm text-moonstone/58">
                Not sure if you&apos;re ready?{" "}
                <Link href="/book?type=free_20" className="text-gold">
                  Book a Discovery Call →
                </Link>
              </p>
            </div>
          </form>
        </PillarCard>
      </PillarSection>

      <PillarSection title="The Shape That Holds" tone={tone}>
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-moonstone/80">
          <p>
            The dodecahedron is the fifth solid. Plato assigned it to ether —
            the element that contains the other four. Fire, air, water, earth
            all exist within the space ether provides. Without the container,
            the elements scatter. Without the structure, the work dissolves.
          </p>
          <p>
            The Old World offered protection as a product — insurance policies
            with loopholes, LLCs with pierced veils, estate plans that trigger
            probate. The fine print was designed to protect the institution, not
            the creator.
          </p>
          <p>
            Whole Body Guardian builds sovereign architecture. Trusts that
            cannot be pierced. LLCs that hold IP like a vault. Estate plans that
            transfer wealth without courts. The dodecahedron is not another
            product. It is the container that holds everything else you have
            built — your music, your words, your community, your land, your
            legacy.
          </p>
        </div>
      </PillarSection>

      <CrossElementNav active="Guardian" />
    </PillarPageShell>
  )
}

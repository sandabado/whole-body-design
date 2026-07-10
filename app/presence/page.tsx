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

const tone = pillarTones.ember

const serviceCards = [
  {
    body: "In-person containers for reset, initiation, and return. Presence work with the whole body in the room.",
    cta: "Join Interest List",
    href: "/presence#retreats",
    meta: "Seasonal · In-person",
    title: "🜂 Whole Body Retreats",
  },
  {
    body: "Weekly virtual gathering. Free. No commitment. The open door into the Presence pillar.",
    cta: "Join Circle",
    href: "/presence#hearthfire",
    meta: "Weekly · 60 min · Virtual",
    title: "🜂 Weekly Whole Body Circle (Virtual)",
  },
  {
    body: "Closed container for men. Committed members. Weekly deep work.",
    cta: "Register",
    href: "/presence#register-mens",
    meta: "Weekly · 90 min · Virtual",
    price: "$97/mo (Framer tier) or TBD",
    title: "🔺 Whole Body Men",
  },
  {
    body: "Closed container for women. Committed members. Weekly deep work.",
    cta: "Register",
    href: "/presence#register-womens",
    meta: "Weekly · 90 min · Virtual",
    price: "$97/mo (Framer tier) or TBD",
    title: "🌹 Whole Body Women",
  },
]

const steps = [
  {
    body: "Discover your House. Learn whether Fire is your primary element. If it is, Presence is your pillar.",
    title: "TAKE THE READING",
  },
  {
    body: "Start with the weekly Whole Body Circle. Free. No commitment. Experience the container before you commit.",
    title: "JOIN THE HEARTHFIRE",
  },
  {
    body: "When you're ready, register for a closed circle. Weekly. Same people. Real work. Real growth.",
    title: "COMMIT TO A CIRCLE",
  },
  {
    body: "That's it. Presence is the practice. Not a curriculum. Not a framework. Just showing up.",
    title: "SHOW UP",
  },
]

export default function PresencePage() {
  return (
    <PillarPageShell solid={tone.solid}>
      <PillarHero
        eyebrow="🜂 FIRE · TETRAHEDRON"
        status="🟢 Active"
        tagline="The shape of ignition."
        title="Whole Body Presence"
        tone={tone}
        body={
          <>
            <p>
              Fire is the circle that holds you. The tetrahedron is the simplest
              solid — four faces, four vertices, six edges. It is the spark.
              Everything begins here.
            </p>
            <p>
              You were told to go alone. To bootstrap. To grind. That was the
              extraction. Fire is what happens when people stop performing and
              start telling the truth. Presence is the pillar of belonging.
            </p>
          </>
        }
        featured={
          <div className="grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <PillarCard compact tone={tone} key={service.title}>
                <h3 className="font-display text-xl text-moonstone">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-moonstone/72">
                  {service.body}
                </p>
                <p className="mt-4 font-mono text-xs text-ember">
                  {service.meta}
                </p>
                {service.price ? (
                  <p className="mt-2 font-mono text-xs text-gold">
                    Investment: {service.price}
                  </p>
                ) : null}
                <Button variant={tone.buttonVariant} className="mt-4" asChild>
                  <Link href={service.href}>{service.cta} →</Link>
                </Button>
              </PillarCard>
            ))}
          </div>
        }
      />

      <PillarSection title="Upcoming Gatherings" tone={tone}>
        <div className="grid gap-5 lg:grid-cols-3">
          <PillarCard tone={tone}>
            <p className="font-mono text-xs tracking-[0.18em] text-ember uppercase">
              THE HEARTHFIRE SESSION
            </p>
            <h3 className="mt-3 font-display text-2xl text-moonstone">
              Weekly Whole Body Circle · Free
            </h3>
            <p className="mt-3 text-sm text-moonstone/62">
              Weekly · 60 minutes · Virtual
            </p>
            <p className="mt-4 text-sm leading-6 text-moonstone/72">
              &quot;The open door. Show up. Breathe. Listen. No agenda. No
              hierarchy. Just presence. This is where everyone starts.&quot;
            </p>
            <Button variant={tone.buttonVariant} className="mt-5" asChild>
              <Link href="/presence#hearthfire">Reserve Your Seat →</Link>
            </Button>
          </PillarCard>

          <PillarCard tone={tone}>
            <p className="font-mono text-xs tracking-[0.18em] text-ember uppercase">
              CIRCLE IN THE STONE
            </p>
            <h3 className="mt-3 font-display text-2xl text-moonstone">
              Monthly In-Person · Location Rotates
            </h3>
            <p className="mt-4 text-sm leading-6 text-moonstone/72">
              &quot;In-person deep work. Closed container after week one.
              Physical presence changes everything. The body remembers what the
              screen forgets.&quot;
            </p>
            <Button variant={tone.buttonVariant} className="mt-5" asChild>
              <Link href="/presence#events">View Dates →</Link>
            </Button>
          </PillarCard>

          <PillarCard tone={tone}>
            <p className="font-mono text-xs tracking-[0.18em] text-ember uppercase">
              RITE OF PASSAGE
            </p>
            <h3 className="mt-3 font-display text-2xl text-moonstone">
              Seasonal · In-Person · Invitation Only
            </h3>
            <p className="mt-3 font-mono text-xs text-gold">
              Coming Autumn 2027
            </p>
            <p className="mt-4 text-sm leading-6 text-moonstone/72">
              &quot;Marked transitions. Birth, death, initiation, completion.
              The old ceremonies, remembered. Not performed — inhabited.&quot;
            </p>
            <Button variant={tone.buttonVariant} className="mt-5" asChild>
              <Link href="/presence#rites">Join Interest List →</Link>
            </Button>
          </PillarCard>
        </div>
      </PillarSection>

      <PillarSection title="How It Works" tone={tone}>
        <StepList steps={steps} tone={tone} />
      </PillarSection>

      <PillarSection title="The Shape of Ignition" tone={tone}>
        <div className="max-w-4xl space-y-6 text-lg leading-8 text-moonstone/80">
          <p>
            The tetrahedron has four faces. In the Whole Body system, fire
            represents the moment of ignition — when intention becomes action,
            when isolation becomes circle, when performance becomes presence.
          </p>
          <p>
            Fire is not ambition. Fire is warmth. The kind that happens when
            human beings sit together and stop pretending. The tetrahedron is
            structurally complete — it needs nothing added. Four points define
            the minimum stable form in three dimensions. So does a circle. Four
            people, honest, present, accountable. That is the tetrahedron.
          </p>
          <p>
            You cannot endure alone. The Old World sold you independence as
            freedom. It was isolation dressed as strength. Presence is the
            return to the circle. Not a group. Not an audience. A circle — where
            everyone can be seen and no one sits at the head.
          </p>
        </div>
      </PillarSection>

      <CrossElementNav active="Presence" />
    </PillarPageShell>
  )
}

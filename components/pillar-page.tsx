import type { ReactNode } from "react"

import {
  PlatonicBackground,
  type SolidType,
} from "@/components/platonic-background"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Card } from "@/components/ui/card"

type Tone = {
  accent: string
  border: string
  bg: string
  button: string
  buttonVariant: "ember" | "gold" | "sage" | "teal" | "violet"
  sectionBorder: string
  softAccent: string
  solid: SolidType
}

export const pillarTones = {
  ember: {
    accent: "text-ember",
    bg: "from-obsidian/80 via-ember/14 to-obsidian/72",
    border: "border-ember/25",
    button:
      "bg-ember text-white shadow-[0_0_28px_rgba(194,84,45,0.3)] hover:bg-ember/90 hover:shadow-[0_0_34px_rgba(194,84,45,0.42)]",
    buttonVariant: "ember",
    sectionBorder: "border-ember/10",
    softAccent: "text-ember/70",
    solid: "tetrahedron",
  },
  gold: {
    accent: "text-gold",
    bg: "from-obsidian/80 via-gold/14 to-obsidian/72",
    border: "border-gold/25",
    button:
      "bg-gold text-obsidian shadow-[0_0_28px_rgba(212,175,55,0.3)] hover:bg-gold/90 hover:shadow-[0_0_34px_rgba(212,175,55,0.42)]",
    buttonVariant: "gold",
    sectionBorder: "border-gold/10",
    softAccent: "text-gold/70",
    solid: "octahedron",
  },
  sage: {
    accent: "text-sage",
    bg: "from-obsidian/80 via-sage/14 to-obsidian/72",
    border: "border-sage/25",
    button:
      "bg-sage text-white shadow-[0_0_28px_rgba(74,103,65,0.3)] hover:bg-sage/90 hover:shadow-[0_0_34px_rgba(74,103,65,0.42)]",
    buttonVariant: "sage",
    sectionBorder: "border-sage/10",
    softAccent: "text-sage/70",
    solid: "hexahedron",
  },
  teal: {
    accent: "text-teal",
    bg: "from-obsidian/80 via-teal/14 to-obsidian/72",
    border: "border-teal/25",
    button:
      "bg-teal text-white shadow-[0_0_28px_rgba(43,168,160,0.3)] hover:bg-teal/90 hover:shadow-[0_0_34px_rgba(43,168,160,0.42)]",
    buttonVariant: "teal",
    sectionBorder: "border-teal/10",
    softAccent: "text-teal/70",
    solid: "icosahedron",
  },
  violet: {
    accent: "text-violet",
    bg: "from-obsidian/80 via-violet/14 to-obsidian/72",
    border: "border-violet/25",
    button:
      "bg-violet text-white shadow-[0_0_28px_rgba(109,74,255,0.3)] hover:bg-violet/90 hover:shadow-[0_0_34px_rgba(109,74,255,0.42)]",
    buttonVariant: "violet",
    sectionBorder: "border-violet/10",
    softAccent: "text-violet/70",
    solid: "dodecahedron",
  },
} satisfies Record<string, Tone>

export function PillarPageShell({
  children,
  solid,
}: {
  children: ReactNode
  solid: SolidType
}) {
  return (
    <>
      <PlatonicBackground sections={[{ id: "pillar-page", solid }]} />
      <div className="relative z-10">
        <SiteNav />
        <main id="pillar-page">{children}</main>
        <SiteFooter />
      </div>
    </>
  )
}

export function PillarHero({
  body,
  eyebrow,
  featured,
  status,
  tagline,
  title,
  tone,
}: {
  body: ReactNode
  eyebrow: string
  featured?: ReactNode
  status: string
  tagline: string
  title: string
  tone: Tone
}) {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-14 sm:py-16">
      <div className={`absolute inset-0 bg-gradient-to-b ${tone.bg}`} />
      <div className="relative mx-auto w-full max-w-6xl">
        <div className="max-w-3xl [text-shadow:0_2px_24px_rgba(0,0,0,0.88)]">
          <p
            className={`font-mono text-xs tracking-[0.3em] uppercase ${tone.accent}`}
          >
            {eyebrow}
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            {title}
          </h1>
          <p className={`mt-4 font-display text-2xl italic ${tone.softAccent}`}>
            {tagline}
          </p>
          <span
            className={`mt-5 inline-flex rounded-full border ${tone.border} bg-obsidian/58 px-3 py-1 font-mono text-xs ${tone.accent}`}
          >
            {status}
          </span>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-moonstone/80">
            {body}
          </div>
        </div>
        {featured ? (
          <div className="mt-10">
            <p
              className={`font-mono text-xs tracking-[0.22em] uppercase ${tone.accent}`}
            >
              The Pillar
            </p>
            <div className="mt-4">{featured}</div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export function PillarSection({
  children,
  eyebrow,
  title,
  tone,
}: {
  children: ReactNode
  eyebrow?: string
  title: string
  tone: Tone
}) {
  return (
    <section className={`border-t px-6 py-16 sm:py-20 ${tone.sectionBorder}`}>
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p
            className={`font-mono text-xs tracking-[0.22em] uppercase ${tone.accent}`}
          >
            {eyebrow}
          </p>
        ) : null}
        <h2 className={`font-display text-3xl ${tone.accent}`}>{title}</h2>
        <div className="mt-7">{children}</div>
      </div>
    </section>
  )
}

export function PillarCard({
  children,
  compact = false,
  tone,
}: {
  children: ReactNode
  compact?: boolean
  tone: Tone
}) {
  return (
    <Card
      className={`h-full ${tone.border} bg-obsidian/82 ${
        compact
          ? "relative min-h-64 p-4 pb-16 [&_[data-slot=button]]:absolute [&_[data-slot=button]]:right-4 [&_[data-slot=button]]:bottom-4 [&_[data-slot=button]]:left-4"
          : "p-6"
      }`}
    >
      {children}
    </Card>
  )
}

export function StepList({
  steps,
  tone,
}: {
  steps: { body: string; title: string }[]
  tone: Tone
}) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {steps.map((step, index) => (
        <Card className={`${tone.border} bg-obsidian/82 p-5`} key={step.title}>
          <p className={`font-mono text-xs ${tone.accent}`}>Step {index + 1}</p>
          <h3 className="mt-3 font-display text-xl text-moonstone">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-moonstone/68">
            {step.body}
          </p>
        </Card>
      ))}
    </div>
  )
}

import type { ReactNode } from "react"

import {
  PlatonicBackground,
  type SolidType,
} from "@/components/platonic-background"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"

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

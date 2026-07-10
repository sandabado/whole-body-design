import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { EarthBridge, type EarthBridgeVariant } from "@/components/earth-bridge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function PageShell({
  bridge = "default",
  children,
}: {
  bridge?: EarthBridgeVariant
  children: ReactNode
}) {
  return (
    <>
      <SiteNav />
      <main className="min-h-screen bg-obsidian">{children}</main>
      <EarthBridge variant={bridge} />
      <SiteFooter />
    </>
  )
}

export function PageHero({
  actions,
  eyebrow,
  title,
  visual,
  children,
}: {
  actions?: ReactNode
  children: ReactNode
  eyebrow?: string
  title: string
  visual?: ReactNode
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/20 bg-obsidian px-6 py-20 sm:py-24">
      <Image
        src="/inside-page-header.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_8%,rgba(212,175,55,0.34),transparent_28%),radial-gradient(circle_at_78%_18%,rgba(109,74,255,0.28),transparent_30%),linear-gradient(90deg,rgba(13,13,13,0.94),rgba(13,13,13,0.72)_46%,rgba(13,13,13,0.5))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(13,13,13,0.22),rgba(13,13,13,0.84))]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/55 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "grid items-center gap-10",
            visual ? "lg:grid-cols-[1fr_22rem]" : ""
          )}
        >
          <div>
            {eyebrow ? (
              <p className="font-mono text-xs tracking-[0.28em] text-gold uppercase">
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] font-bold text-moonstone [text-shadow:0_4px_34px_rgba(0,0,0,0.86)] sm:text-6xl sm:leading-none">
              {title}
            </h1>
            <div className="mt-6 max-w-3xl text-lg leading-8 text-moonstone/78 [text-shadow:0_2px_22px_rgba(0,0,0,0.92)]">
              {children}
            </div>
            {actions ? (
              <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
            ) : null}
          </div>
          {visual ? <div>{visual}</div> : null}
        </div>
      </div>
    </section>
  )
}

export function CtaButton({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) {
  return (
    <Button asChild>
      <Link href={href}>{children}</Link>
    </Button>
  )
}

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const centerLinks = [
  { href: "/manuals", label: "Manuals" },
  { href: "/guild", label: "Guild" },
  { href: "/about", label: "About" },
  { href: "/store", label: "Store" },
]

const pillarLinks = [
  { href: "/presence", label: "Presence", symbol: "🜂", tone: "text-ember" },
  { href: "/press", label: "Press", symbol: "🜁", tone: "text-gold" },
  { href: "/studios", label: "Studios", symbol: "🜄", tone: "text-teal" },
  {
    href: "/foundation",
    label: "Foundation",
    symbol: "🜃",
    tone: "text-sage",
  },
  { href: "/guardian", label: "Guardian", symbol: "⊙", tone: "text-violet" },
]

const accountLinks = [
  { href: "/account", label: "Profile" },
  { href: "/account/purchases", label: "Purchases" },
  { href: "/account/library", label: "Library" },
  { href: "/account/settings", label: "Settings" },
]

export function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPillarsOpen, setIsPillarsOpen] = useState(false)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsPillarsOpen(false)
    setIsAccountOpen(false)
  }

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 80)
    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition ${
        isScrolled
          ? "border-gold/10 bg-obsidian/95"
          : "border-gold/10 bg-obsidian/58"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-6 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-wide text-moonstone transition hover:text-pink-light"
        >
          ⊙ WholeBody
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="group relative">
            <button
              className="flex items-center gap-1 font-body text-sm text-moonstone/78 transition hover:text-pink-light"
              type="button"
            >
              Pillars
              <ChevronDown className="size-3.5" />
            </button>
            <div className="pointer-events-none absolute top-full left-1/2 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rounded-lg border border-gold/10 bg-obsidian/95 p-2 shadow-xl backdrop-blur-md">
                {pillarLinks.map((pillar) => (
                  <Link
                    className={`flex items-center gap-3 rounded px-4 py-3 font-body text-sm transition-colors hover:bg-white/5 ${pillar.tone}`}
                    href={pillar.href}
                    key={pillar.href}
                  >
                    <span>{pillar.symbol}</span>
                    <span>{pillar.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            className="font-body text-sm text-moonstone/78 transition hover:text-pink-light"
            href="/houses"
          >
            Houses
          </Link>

          {centerLinks.map((link) => (
            <Link
              className="font-body text-sm text-moonstone/78 transition hover:text-pink-light"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <div className="group relative">
            <button
              className="flex h-8 items-center gap-1 rounded-lg px-3 font-body text-sm text-moonstone/78 transition hover:bg-pink/10 hover:text-pink-light"
              type="button"
            >
              Account
              <ChevronDown className="size-3.5" />
            </button>
            <div className="pointer-events-none absolute top-full right-0 w-52 pt-3 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100">
              <div className="rounded-lg border border-gold/10 bg-obsidian/95 p-2 shadow-xl backdrop-blur-md">
                <Link
                  className="block rounded px-4 py-3 text-sm text-moonstone/76 transition-colors hover:bg-pink/10 hover:text-pink-light"
                  href="/account/signin"
                >
                  Sign In
                </Link>
                {accountLinks.map((link) => (
                  <Link
                    className="block rounded px-4 py-3 text-sm text-moonstone/76 transition-colors hover:bg-pink/10 hover:text-pink-light"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
                <form action="/api/auth/signout" method="post">
                  <button
                    className="block w-full rounded px-4 py-3 text-left text-sm text-moonstone/76 transition-colors hover:bg-pink/10 hover:text-pink-light"
                    type="submit"
                  >
                    Sign Out
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Button variant="outline" size="sm" asChild>
            <Link href="/book">Book</Link>
          </Button>
          <Button className="px-4" size="sm" asChild>
            <Link href="/reading">Free Reading</Link>
          </Button>
        </div>

        <Button
          aria-controls="mobile-site-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="justify-self-end lg:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          size="icon"
          type="button"
          variant="outline"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div
        className={`overflow-hidden border-t border-gold/10 transition-[max-height,opacity] duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[48rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-site-menu"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
          <button
            aria-expanded={isPillarsOpen}
            className="flex w-full items-center justify-between rounded px-3 py-3 font-body text-base text-moonstone/86 transition hover:bg-pink/10 hover:text-pink-light"
            onClick={() => setIsPillarsOpen((open) => !open)}
            type="button"
          >
            <span>Pillars</span>
            <ChevronDown
              className={`size-4 transition ${
                isPillarsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              isPillarsOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid gap-1 px-2 pb-2">
              {pillarLinks.map((pillar) => (
                <Link
                  className={`rounded px-3 py-2 font-body text-sm transition hover:bg-white/5 ${pillar.tone}`}
                  href={pillar.href}
                  key={pillar.href}
                  onClick={closeMenu}
                >
                  {pillar.symbol} {pillar.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            className="rounded px-3 py-3 font-body text-base text-moonstone/86 transition hover:bg-pink/10 hover:text-pink-light"
            href="/houses"
            onClick={closeMenu}
          >
            Houses
          </Link>

          {centerLinks.map((link) => (
            <Link
              className="rounded px-3 py-3 font-body text-base text-moonstone/86 transition hover:bg-pink/10 hover:text-pink-light"
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <button
            aria-expanded={isAccountOpen}
            className="flex w-full items-center justify-between rounded px-3 py-3 font-body text-base text-moonstone/86 transition hover:bg-pink/10 hover:text-pink-light"
            onClick={() => setIsAccountOpen((open) => !open)}
            type="button"
          >
            <span>Account</span>
            <ChevronDown
              className={`size-4 transition ${
                isAccountOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height,opacity] duration-300 ${
              isAccountOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="grid gap-1 px-2 pb-2">
              <Link
                className="rounded px-3 py-2 text-sm text-moonstone/72 transition hover:bg-pink/10 hover:text-pink-light"
                href="/account/signin"
                onClick={closeMenu}
              >
                Sign In
              </Link>
              {accountLinks.map((link) => (
                <Link
                  className="rounded px-3 py-2 text-sm text-moonstone/72 transition hover:bg-pink/10 hover:text-pink-light"
                  href={link.href}
                  key={link.href}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Button variant="outline" asChild>
              <Link href="/book" onClick={closeMenu}>
                Book
              </Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/reading" onClick={closeMenu}>
                Free Reading
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

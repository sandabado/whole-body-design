"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export function SiteNavClient({ isLoggedIn }: { isLoggedIn: boolean }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gold/10 bg-obsidian/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-5 px-6 py-4 lg:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="font-display text-lg font-semibold tracking-wide text-moonstone transition hover:text-gold">⊙ WholeBody Design</Link>
        <div className="hidden items-center gap-8 lg:flex">
          <Link className="text-sm text-moonstone/75 transition hover:text-gold" href="/houses">Houses</Link>
          <Link className="text-sm text-moonstone/75 transition hover:text-gold" href="/guild">Guild</Link>
        </div>
        <div className="hidden items-center justify-end gap-3 lg:flex">
          {isLoggedIn ? (
            <div className="group relative">
              <button className="flex items-center gap-1 px-3 py-2 text-sm text-moonstone/75 transition hover:text-gold" type="button">Account <ChevronDown className="size-3.5" /></button>
              <div className="pointer-events-none absolute top-full right-0 w-48 pt-2 opacity-0 transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
                <div className="rounded-lg border border-gold/15 bg-obsidian p-2 shadow-xl">
                  <Link className="block rounded px-3 py-2 text-sm hover:bg-white/5" href="/account">Profile</Link>
                  <Link className="block rounded px-3 py-2 text-sm hover:bg-white/5" href="/account/settings">Settings</Link>
                  <form action="/api/auth/signout" method="post"><button className="w-full rounded px-3 py-2 text-left text-sm hover:bg-white/5" type="submit">Sign Out</button></form>
                </div>
              </div>
            </div>
          ) : <Link className="px-3 py-2 text-sm text-moonstone/75 transition hover:text-gold" href="/account/signin">Sign In</Link>}
          <Button size="sm" asChild><Link href="/reading">Get Your Reading →</Link></Button>
        </div>
        <Button aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="justify-self-end lg:hidden" onClick={() => setOpen((value) => !value)} size="icon" type="button" variant="outline">{open ? <X /> : <Menu />}</Button>
      </div>
      <div className={`overflow-hidden border-t border-gold/10 transition-[max-height,opacity] lg:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="mx-auto grid max-w-7xl gap-2 px-6 py-4">
          <Link className="rounded px-3 py-3 hover:bg-white/5" href="/houses" onClick={() => setOpen(false)}>Houses</Link>
          <Link className="rounded px-3 py-3 hover:bg-white/5" href="/guild" onClick={() => setOpen(false)}>Guild</Link>
          <Link className="rounded px-3 py-3 hover:bg-white/5" href={isLoggedIn ? "/account" : "/account/signin"} onClick={() => setOpen(false)}>{isLoggedIn ? "Account" : "Sign In"}</Link>
          <Button className="mt-2 w-full" asChild><Link href="/reading" onClick={() => setOpen(false)}>Get Your Reading →</Link></Button>
        </div>
      </div>
    </nav>
  )
}

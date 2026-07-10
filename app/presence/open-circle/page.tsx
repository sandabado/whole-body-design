import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function OpenCirclePage() {
  return (
    <>
      <SiteNav />
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs tracking-[0.3em] text-ember">
            PRESENCE
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold text-moonstone">
            Open Circle
          </h1>
          <Card className="mt-10 border-t-4 border-t-ember bg-gray-900/85 p-8">
            <p className="text-lg leading-8 text-moonstone/75">
              Free weekly gathering. Wednesdays. Virtual. An open door. No
              commitment. Show up, breathe, listen, share if you want to. The
              first step into the Living Earth.
            </p>
            <div className="mt-6 grid gap-2 font-mono text-sm text-moonstone/60">
              <span>Every Wednesday evening</span>
              <span>Virtual</span>
              <span>60-90 minutes</span>
              <span>Open to all</span>
              <span>Price: Free</span>
            </div>
            <Button variant="ember" className="mt-8" asChild>
              <Link href="/presence">Register Interest</Link>
            </Button>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

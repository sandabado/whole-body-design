import Link from "next/link"

import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SandabadoPage() {
  return (
    <>
      <SiteNav />
      <section className="bg-obsidian px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-mono text-xs tracking-[0.3em] text-teal">
              SANDABADO
            </p>
            <h1 className="mt-4 font-display text-6xl font-bold text-moonstone">
              Debut Album
            </h1>
            <p className="mt-6 text-moonstone/70">
              The first release on Whole Body Records. Streaming links and album
              art land here at launch.
            </p>
            <div className="mt-8 flex gap-4">
              <Button variant="teal">Stream Free</Button>
              <Button
                variant="outline"
                className="border-teal text-teal hover:bg-teal/10"
                asChild
              >
                <Link href="/store">Buy Vinyl - $33</Link>
              </Button>
            </div>
          </div>
          <Card className="bg-gray-900/80 p-8">
            <h2 className="font-display text-2xl text-gold">Tracklist</h2>
            <ol className="mt-6 space-y-3 font-mono text-sm text-moonstone/70">
              <li>01. Track title placeholder</li>
              <li>02. Track title placeholder</li>
              <li>03. Track title placeholder</li>
              <li>04. Track title placeholder</li>
            </ol>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

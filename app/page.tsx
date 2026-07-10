import Link from "next/link"

import { PlatonicBackground } from "@/components/platonic-background"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { StarReadingForm } from "@/components/star-reading-form"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const featuredHouses = [
  { house: "I", symbol: "🜂", element: "Fire", archetype: "Ignition", quote: "You begin. You start. You are the spark.", pillar: "Presence", tone: "text-ember border-ember/25" },
  { house: "III", symbol: "🜁", element: "Air", archetype: "Signal", quote: "You carry the word. You transmit what needs to be heard.", pillar: "Press", tone: "text-gold border-gold/25" },
  { house: "IV", symbol: "🜃", element: "Earth", archetype: "Ground", quote: "You root the vision. You build what lasts.", pillar: "Foundation", tone: "text-sage border-sage/25" },
  { house: "V", symbol: "⊙", element: "Ether", archetype: "Sovereign", quote: "You protect the system. You ensure the work outlasts you.", pillar: "Guardian", tone: "text-violet border-violet/25" },
] as const

export default function HomePage() {
  return (
    <>
      <PlatonicBackground sections={[
        { id: "hero", solid: "heroDodecahedron" },
        { id: "architecture", solid: "dodecahedron" },
        { id: "glimpse", solid: "dodecahedron" },
        { id: "reading", solid: "dodecahedron" },
      ]} />
      <div className="relative z-10">
        <SiteNav />
        <main>
          <section id="hero" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-6 py-20 text-center sm:py-24">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(109,74,255,0.18),transparent_42%),linear-gradient(180deg,rgba(13,13,13,0.25),rgba(28,12,46,0.65),rgba(13,13,13,0.86))]" />
            <div className="relative mx-auto max-w-4xl [text-shadow:0_2px_24px_rgba(0,0,0,0.88)]">
              <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase sm:text-sm">Dovecana · The 12 Houses</p>
              <h1 className="mt-6 font-display text-5xl leading-none font-bold text-moonstone sm:text-6xl lg:text-7xl">The Dodecanic System</h1>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-moonstone/70">Twelve rooms in the Dodecahedron. You were born into one. Each House maps to an element, an archetype, and a pillar of the Living Earth. This is your design.</p>
              <Button size="lg" className="mt-9" asChild><Link href="#reading">Get Your Whole Body Design Reading →</Link></Button>
            </div>
          </section>

          <section id="architecture" className="border-t border-gold/10 px-6 py-20 text-center">
            <div className="mx-auto max-w-5xl">
              <h2 className="font-display text-3xl text-gold">The Architecture</h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-moonstone/80">The Dodecahedron has twelve faces. In the Whole Body system, each face is a House. Your House is determined by your birth data — date, time, and place. Together, they map your sovereignty layer, your primary element, and which pillar you&apos;re designed to build first.</p>
              <div className="mx-auto mt-10 grid max-w-4xl md:grid-cols-3">
                {[["Element", "Fire, Air, Water, Earth, or Ether"], ["Archetype", "The role your House plays in the system"], ["Pillar", "Where your design manifests in the world"]].map(([title, body], index) => (
                  <div className={`px-6 py-5 ${index ? "border-t border-gold/25 md:border-t-0 md:border-l" : ""}`} key={title}>
                    <h3 className="font-display text-2xl text-moonstone">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-moonstone/60">{body}</p>
                  </div>
                ))}
              </div>
              <p className="mx-auto mt-10 max-w-3xl text-lg leading-8 text-moonstone/80">Each House is a coordinate in the whole body. Your Design Reading calculates it. The Houses page explains what each one means.</p>
              <Button variant="violet" className="mt-8" asChild><Link href="/houses">Explore the 12 Houses →</Link></Button>
            </div>
          </section>

          <section id="glimpse" className="border-t border-gold/10 px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center font-display text-3xl text-gold">A Glimpse</h2>
              <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {featuredHouses.map((house) => (
                  <Card className={`flex min-h-64 flex-col bg-obsidian/82 p-6 ${house.tone}`} key={house.house}>
                    <p className="font-mono text-xs tracking-[0.18em] uppercase">House {house.house}</p>
                    <h3 className="mt-4 font-display text-2xl text-moonstone">{house.symbol} {house.element} · {house.archetype}</h3>
                    <p className="mt-5 flex-1 text-sm leading-6 text-moonstone/70">“{house.quote}”</p>
                    <p className="mt-5 font-mono text-xs text-moonstone/55">Pillar: {house.pillar}</p>
                  </Card>
                ))}
              </div>
              <p className="mt-9 text-center"><Link className="font-mono text-sm text-gold transition hover:text-gold/75" href="/houses">See All 12 Houses →</Link></p>
            </div>
          </section>

          <section id="reading" className="scroll-mt-20 border-t border-gold/10 px-6 py-20 text-center">
            <div className="mx-auto max-w-5xl">
              <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">Whole Body Design Reading</p>
              <h2 className="mt-5 font-display text-4xl text-gold sm:text-5xl">Discover Your House</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/70">Enter your birth data. The Dodecahedron maps twelve Houses. Yours is written in the coordinates of your arrival.</p>
              <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-gold/15 bg-obsidian/76 p-6 text-left shadow-2xl backdrop-blur-md sm:p-8">
                <StarReadingForm />
              </div>
              <p className="mt-6 text-sm text-moonstone/50">Already know your House? <Link className="text-violet hover:text-violet/80" href="/guild">Join the Guild →</Link></p>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </>
  )
}

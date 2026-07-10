import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { StarReadingForm } from "@/components/star-reading-form"

export default function ReadingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-gold/10 px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(109,74,255,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">Whole Body Design Reading</p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone">Discover Your House</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/80">Enter your birth data. The Dodecahedron maps twelve Houses. Yours is written in the coordinates of your arrival.</p>
          <p className="mt-4 text-sm text-moonstone/55">Sixty seconds. No email required for basic reading.</p>
          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-gold/15 bg-obsidian/76 p-6 shadow-2xl backdrop-blur-md sm:p-8"><StarReadingForm /></div>
          <p className="mx-auto mt-10 max-w-2xl text-sm leading-7 text-moonstone/60">Your House connects you to a pillar of the Living Earth. <Link className="text-gold hover:text-gold/75" href="/houses">Explore the 12 Houses →</Link> · <Link className="text-violet hover:text-violet/75" href="/guild">Join the Guild →</Link></p>
        </div>
      </section>
    </PageShell>
  )
}

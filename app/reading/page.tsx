import { PageShell } from "@/components/page-shell"
import { StarReadingForm } from "@/components/star-reading-form"

export default function ReadingPage() {
  return (
    <PageShell>
      <main id="reading-gateway">
        <section className="relative overflow-hidden border-b border-gold/10 bg-obsidian px-6 py-20 text-center sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(255,47,179,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-5xl">
            <div className="text-center">
              <p className="font-mono text-xs tracking-[0.28em] text-gold uppercase">
                Whole Body Design Reading
              </p>
              <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-7xl">
                Which House Are You?
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-moonstone/72">
                There are twelve rooms in the Dodecahedron. You were born into
                one. Enter your birth data and receive your House, Archetype,
                Element, and Body Matrix.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-gold/15 bg-obsidian/76 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <StarReadingForm />
            </div>

            <blockquote className="mx-auto mt-12 max-w-lg text-center">
              <p className="text-sm leading-6 text-moonstone/60 italic">
                &quot;I am House V. I did not realize my creative work needed
                legal protection until the reading showed me.&quot;
              </p>
              <footer className="mt-2 font-mono text-xs text-gold/55">
                Marcus, musician
              </footer>
            </blockquote>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

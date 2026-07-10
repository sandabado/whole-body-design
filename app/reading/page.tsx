import { PageShell } from "@/components/page-shell"
import { StarReadingForm } from "@/components/star-reading-form"

const steps = [
  [
    "01",
    "Enter Data",
    "Birth date, time, and location. Leave the time blank if you do not know it.",
  ],
  [
    "02",
    "Receive Your House",
    "Your House, element, archetype, and pillar appear instantly.",
  ],
  [
    "03",
    "Save & Explore",
    "Create an account to keep your reading and explore the network.",
  ],
] as const

export default function ReadingPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.16),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(109,74,255,0.14),transparent_30%)]" />
        <div className="relative mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            Whole Body Design Reading
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            Discover Your House
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/75">
            Enter your birth data. The Dodecahedron maps twelve Houses. Yours is
            written in the coordinates of your arrival.
          </p>

          <section
            className="mx-auto mt-12 max-w-4xl text-left"
            aria-labelledby="how-it-works"
          >
            <h2
              id="how-it-works"
              className="text-center font-display text-2xl text-gold"
            >
              How It Works
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {steps.map(([number, title, body]) => (
                <div
                  className="rounded-lg border border-gold/15 bg-obsidian/72 p-5"
                  key={number}
                >
                  <p className="font-mono text-xs text-gold">{number}</p>
                  <h3 className="mt-3 font-display text-xl text-moonstone">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-moonstone/65">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-gold/15 bg-obsidian/76 p-6 text-left shadow-2xl backdrop-blur-md sm:p-8">
            <StarReadingForm />
          </div>
          <p className="mt-5 font-mono text-xs text-moonstone/40">
            Powered by fate.energy
          </p>
        </div>
      </section>
    </PageShell>
  )
}

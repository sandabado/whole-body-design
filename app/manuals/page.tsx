import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { manuals } from "@/lib/constellation"

const bundles = [
  {
    contents: "All 5 volumes - secure reader + PDF",
    cta: "Buy Bundle",
    href: "/store?bundle=digital",
    price: "$111",
    title: "Digital Bundle",
    treatment: "bg-violet/15 border-violet/35",
  },
  {
    contents: "All 5 volumes - printed and bound",
    cta: "Buy Bundle",
    href: "/store?bundle=physical",
    price: "$333",
    title: "Physical Bundle",
    treatment: "bg-gray-900/72 border-gold/45",
  },
  {
    badge: "BEST VALUE",
    contents: "All volumes - reader access",
    cta: "Subscribe",
    href: "/guild",
    price: "$11.11/mo",
    title: "Membership",
    treatment: "bg-violet/10 border-violet/45 ring-1 ring-violet/35",
  },
]

const readerSteps = [
  {
    body: "Purchase any volume or bundle. Instantly unlocked.",
    title: "Buy",
  },
  {
    body: "Access through your account dashboard. Secure reader. Watermarked. Works on any device.",
    title: "Read",
  },
  {
    body: "Your library is permanent. New volumes added as published. No expiration on purchased content.",
    title: "Keep",
  },
]

export default function ManualsPage() {
  return (
    <PageShell>
      <main id="manuals-gateway">
        <section className="relative overflow-hidden border-b border-gold/10 bg-obsidian px-6 py-20 text-center sm:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(255,47,179,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
              Whole Body Press / Whole Body Series
            </p>
            <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
              Whole Body Series
            </h1>
            <div className="mx-auto mt-6 max-w-3xl space-y-4 text-lg leading-8 text-moonstone/76">
              <p>
                The Operating System for the New Earth. Five volumes. From the
                instrument to the spiral. From the silence to the manifestation.
              </p>
              <p>
                Books are not commodities. They are technology. Each manual
                builds on the last: a complete system for building a sovereign
                life.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button variant="gold" asChild>
                <Link href="#sample-vol-i">Read Vol. I Free</Link>
              </Button>
              <Button variant="goldOutline" asChild>
                <Link href="#bundles">Buy the Full Set</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            {manuals.map((manual, index) => {
              const isEven = index % 2 === 1
              return (
                <div key={manual.slug}>
                  <article className="grid items-center gap-10 py-14 md:grid-cols-2 md:gap-12">
                    <div className={isEven ? "md:order-2" : "md:order-1"}>
                      <p className="font-display text-8xl text-gold/20">
                        {manual.number}
                      </p>
                      <h2 className="font-display text-4xl text-moonstone">
                        {manual.title}
                      </h2>
                      <p className="mt-2 font-display text-xl text-gold italic">
                        {manual.tagline}
                      </p>
                      <p className="mt-5 max-w-lg leading-7 text-moonstone/72">
                        {manual.description}
                      </p>
                      <p className="mt-5 font-mono text-sm text-violet">
                        Digital - $22 / Physical - $77
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button size="sm" variant="gold" asChild>
                          <Link href={`/store?product=${manual.slug}-digital`}>
                            Buy Digital
                          </Link>
                        </Button>
                        <Button size="sm" variant="goldOutline" asChild>
                          <Link href={`/store?product=${manual.slug}-physical`}>
                            Buy Physical
                          </Link>
                        </Button>
                        <Button size="sm" variant="goldOutline" asChild>
                          <Link href={`${manual.href}#sample`}>
                            Read Sample
                          </Link>
                        </Button>
                      </div>
                    </div>

                    <Link
                      className={isEven ? "md:order-1" : "md:order-2"}
                      href={manual.href}
                    >
                      <div className="flex aspect-[3/4] items-center justify-center rounded-lg border border-gold/20 bg-obsidian/82 transition hover:border-gold/45">
                        <p className="font-display text-9xl text-gold/12">
                          {manual.number}
                        </p>
                      </div>
                    </Link>
                  </article>
                  {manual.slug === "vol-i" ? (
                    <div id="sample-vol-i" className="scroll-mt-24" />
                  ) : null}
                  <div className="h-px w-full bg-gold/10" />
                </div>
              )
            })}
          </div>
        </section>

        <section
          id="bundles"
          className="scroll-mt-24 border-y border-gold/10 bg-obsidian/70 px-6 py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-3xl text-gold">
              Bundles
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {bundles.map((bundle) => (
                <Card
                  className={`relative p-6 ${bundle.treatment}`}
                  key={bundle.title}
                >
                  {bundle.badge ? (
                    <span className="absolute top-4 right-4 rounded bg-violet/25 px-2 py-1 font-mono text-xs text-violet">
                      {bundle.badge}
                    </span>
                  ) : null}
                  <h3 className="font-display text-2xl text-moonstone">
                    {bundle.title}
                  </h3>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-moonstone/68">
                    {bundle.contents}
                  </p>
                  <p className="mt-5 font-mono text-3xl text-gold">
                    {bundle.price}
                  </p>
                  <Button variant="gold" className="mt-6 w-full" asChild>
                    <Link href={bundle.href}>{bundle.cta}</Link>
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-center font-display text-3xl text-gold">
              How Digital Access Works
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {readerSteps.map((step, index) => (
                <Card
                  className="border-gold/15 bg-obsidian/82 p-6"
                  key={step.title}
                >
                  <p className="font-mono text-xs text-gold">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-moonstone">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-moonstone/68">
                    {step.body}
                  </p>
                </Card>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="gold" asChild>
                <Link href="/manuals/vol-i#sample">
                  Read Vol. I Sample Free
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-display text-3xl text-gold">
              Publish With Whole Body Press
            </h2>
            <p className="mt-5 text-lg leading-8 text-moonstone/72">
              Authors retain 100% IP. The Feed First Algorithm ensures the
              writer eats before the printer. 50/50 royalty split. If your work
              aligns with the Living Earth vision, we want to read it.
            </p>
            <Button variant="gold" className="mt-8" asChild>
              <Link href="/press#author-platform">Submit Your Manuscript</Link>
            </Button>
          </div>
        </section>

        <section className="grid border-t border-gold/10 md:grid-cols-2">
          <div className="bg-obsidian/82 px-6 py-10 text-center">
            <p className="text-moonstone/72">Not sure where to start?</p>
            <Button variant="link" className="mt-2" asChild>
              <Link href="/reading">Get Your Reading</Link>
            </Button>
          </div>
          <div className="bg-obsidian/70 px-6 py-10 text-center">
            <p className="text-moonstone/72">Want guidance?</p>
            <Button variant="link" className="mt-2" asChild>
              <Link href="/book">Meet the Architect</Link>
            </Button>
          </div>
        </section>
      </main>
    </PageShell>
  )
}

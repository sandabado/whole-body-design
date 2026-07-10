import Link from "next/link"
import { notFound } from "next/navigation"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { manuals } from "@/lib/constellation"

export default async function ManualDetailPage({
  params,
}: {
  params: Promise<{ volume: string }>
}) {
  const { volume } = await params
  const index = manuals.findIndex((manual) => manual.slug === volume)
  const manual = manuals[index]
  if (!manual) notFound()

  const next = manuals[index + 1]

  return (
    <PageShell>
      <PageHero
        eyebrow={`Whole Body Series / Volume ${manual.number}`}
        title={manual.title}
        actions={
          <>
            <Button variant="gold" asChild>
              <Link href={`/store?product=${manual.slug}-digital`}>
                Buy Digital - $22
              </Link>
            </Button>
            <Button variant="goldOutline" asChild>
              <Link href={`/store?product=${manual.slug}-physical`}>
                Buy Physical - $77
              </Link>
            </Button>
          </>
        }
      >
        <p className="font-display text-xl text-gold italic">
          {manual.tagline}
        </p>
        <p className="mt-4">{manual.description}</p>
      </PageHero>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="flex aspect-[3/4] items-center justify-center bg-amethyst/45 p-8">
            <div className="text-center">
              <p className="font-display text-9xl text-gold/40">
                {manual.number}
              </p>
              <h2 className="mt-4 font-display text-3xl text-moonstone">
                {manual.title}
              </h2>
            </div>
          </Card>

          <div className="space-y-6">
            <Card id="sample" className="scroll-mt-24 bg-gray-900/72 p-7">
              <p className="font-mono text-xs tracking-[0.24em] text-gold uppercase">
                Sample Reader
              </p>
              <h2 className="mt-3 font-display text-3xl text-moonstone">
                First Chapter Preview
              </h2>
              <p className="mt-5 leading-8 text-moonstone/72">
                This sample introduces the core premise of Volume{" "}
                {manual.number}: {manual.tagline.toLowerCase()} The complete
                manual expands this into practices, diagrams, field notes, and
                sequential exercises for embodied integration.
              </p>
              <div className="mt-6 rounded border border-gold/15 bg-obsidian/70 p-5">
                <p className="text-sm leading-7 text-moonstone/62">
                  Secure reader sample placeholder. The production reader can
                  mount here with the first chapter, watermarking, and account
                  access rules when the asset pipeline is connected.
                </p>
              </div>
            </Card>

            <Card className="bg-gray-900/72 p-7">
              <h2 className="font-display text-3xl text-gold">
                Continue the Journey
              </h2>
              <p className="mt-4 text-moonstone/70">
                The Whole Body Series is designed as a sequence. Read in order,
                then return to the volume your House keeps opening.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="goldOutline" asChild>
                  <Link href="/manuals#bundles">View Bundles</Link>
                </Button>
                {next ? (
                  <Button variant="gold" asChild>
                    <Link href={next.href}>Continue to Vol. {next.number}</Link>
                  </Button>
                ) : (
                  <Button asChild>
                    <Link href="/book">Book Integration Session</Link>
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

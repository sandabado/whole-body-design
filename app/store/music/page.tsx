import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { products } from "@/lib/constellation"

export default function MusicStorePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Store / Music" title="Music Catalog">
        <p>Releases from Whole Body Studios.</p>
      </PageHero>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {products
            .filter((product) => product.category === "Music")
            .map((product) => (
              <Card className="bg-gray-900/72 p-6" key={product.name}>
                <h2 className="font-display text-2xl text-gold">
                  {product.name}
                </h2>
                <p className="mt-3 text-moonstone/70">{product.description}</p>
                <p className="mt-5 font-mono text-2xl text-moonstone">
                  {product.price}
                </p>
                <Button className="mt-6" asChild>
                  <Link href={product.href}>Open</Link>
                </Button>
              </Card>
            ))}
        </div>
      </section>
    </PageShell>
  )
}

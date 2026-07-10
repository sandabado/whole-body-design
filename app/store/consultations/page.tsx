import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { consultations } from "@/lib/constellation"

export default function ConsultationStorePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Store / Consultations" title="Consultation Booking">
        <p>Choose the depth of support that matches the moment.</p>
      </PageHero>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {consultations.map((consultation) => (
            <Card className="bg-gray-900/72 p-6" key={consultation.name}>
              <h2 className="font-display text-2xl text-gold">
                {consultation.name}
              </h2>
              <p className="mt-2 font-mono text-sm text-moonstone/55">
                {consultation.duration}
              </p>
              <p className="mt-4 text-moonstone/70">
                {consultation.description}
              </p>
              <p className="mt-5 font-mono text-2xl text-moonstone">
                {consultation.price}
              </p>
              <Button className="mt-6" asChild>
                <Link href={consultation.href}>Book</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

import Link from "next/link"
import { redirect } from "next/navigation"

import { auth } from "@/auth"
import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) redirect("/account/signin?redirect=/account")

  return (
    <PageShell>
      <PageHero eyebrow="WholeBody Design" title="Your Account">
        <p>Signed in as {session.user.email}.</p>
      </PageHero>
      <section className="px-6 py-16">
        <Card className="mx-auto max-w-2xl border-gold/15 bg-obsidian/82 p-7 text-center">
          <h2 className="font-display text-3xl text-gold">
            Your Design Network
          </h2>
          <p className="mt-4 text-moonstone/70">
            Return to your House reading or enter the sovereign creator network.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild>
              <Link href="/reading">Get Your Reading</Link>
            </Button>
            <Button variant="violet" asChild>
              <Link href="/guild">Explore the Guild</Link>
            </Button>
          </div>
        </Card>
      </section>
    </PageShell>
  )
}

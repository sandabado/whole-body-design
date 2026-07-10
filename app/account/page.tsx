import Link from "next/link"
import { redirect } from "next/navigation"

import { auth } from "@/auth"
import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default async function AccountPage() {
  const session = await auth()
  if (!session?.user) redirect("/sign-in?redirect=/account")

  return (
    <PageShell>
      <PageHero eyebrow="MyLiving.Earth" title="Member Dashboard">
        <p>
          Signed in as {session.user.email}. Your library and membership tools
          live here.
        </p>
      </PageHero>
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <Card className="bg-gray-900/72 p-6">
            <h2 className="font-display text-3xl text-gold">Library</h2>
            <p className="mt-3 text-moonstone/70">
              Owned manuals and member access.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/account/library">Open Library</Link>
            </Button>
          </Card>
          <Card className="bg-gray-900/72 p-6">
            <h2 className="font-display text-3xl text-gold">Membership</h2>
            <p className="mt-3 text-moonstone/70">
              Manage subscription status and support level.
            </p>
            <Button className="mt-6" variant="outline" asChild>
              <Link href="/account/membership">Manage</Link>
            </Button>
          </Card>
        </div>
      </section>
    </PageShell>
  )
}

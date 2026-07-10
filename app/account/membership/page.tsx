import { redirect } from "next/navigation"

import { auth } from "@/auth"
import { PageHero, PageShell } from "@/components/page-shell"
import { Card } from "@/components/ui/card"

export default async function AccountMembershipPage() {
  const session = await auth()
  if (!session?.user) redirect("/sign-in?redirect=/account/membership")

  return (
    <PageShell>
      <PageHero eyebrow="Account" title="Manage Membership">
        <p>
          Membership management is ready for Stripe customer portal wiring once
          live billing credentials are connected.
        </p>
      </PageHero>
      <section className="px-6 py-16">
        <Card className="mx-auto max-w-3xl bg-gray-900/72 p-7">
          <p className="text-moonstone/70">
            Current member: {session.user.email}. Billing portal integration can
            attach here without changing the account route.
          </p>
        </Card>
      </section>
    </PageShell>
  )
}

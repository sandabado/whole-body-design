import Link from "next/link"
import { redirect } from "next/navigation"

import { auth } from "@/auth"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default async function LibraryPage() {
  const session = await auth()
  if (!session?.user) redirect("/sign-in?redirect=/account/library")

  return (
    <>
      <SiteNav />
      <section className="bg-obsidian px-6 py-24">
        <Card className="mx-auto max-w-3xl bg-gray-900/80 p-8">
          <h1 className="font-display text-4xl text-moonstone">
            Member Library
          </h1>
          <p className="mt-4 text-moonstone/70">
            Signed in as {session.user.email}. Purchase-aware library access is
            ready for the Stripe webhook to populate once Postgres is connected.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/store">Shop Products</Link>
            </Button>
            <form action="/api/auth/sign-out" method="post">
              <Button variant="outline">Sign Out</Button>
            </form>
          </div>
        </Card>
      </section>
      <SiteFooter />
    </>
  )
}

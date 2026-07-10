import Link from "next/link"

import { PageHero, PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"

export default function SignUpPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Auth" title="Create an Account">
        <p>
          Account creation is handled through the same secure sign-in flow for
          now. Membership checkout can create access after purchase.
        </p>
      </PageHero>
      <section className="px-6 py-16 text-center">
        <Button asChild>
          <Link href="/sign-in">Continue to Sign In</Link>
        </Button>
      </section>
    </PageShell>
  )
}

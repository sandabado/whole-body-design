import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; redirect?: string }>
}) {
  const params = await searchParams
  const redirectTo = params.redirect || "/account"

  return (
    <>
      <SiteNav />
      <section className="bg-obsidian px-6 py-24">
        <Card className="mx-auto max-w-md bg-gray-900/80 p-8">
          <h1 className="font-display text-3xl text-moonstone">Sign In</h1>
          <p className="mt-3 text-sm text-moonstone/60">
            Enter your email to open your WholeBody Design account.
          </p>
          {params.error ? (
            <p className="mt-4 rounded border border-ember/40 bg-ember/10 px-3 py-2 text-sm text-ember">
              Please enter a valid email and try again.
            </p>
          ) : null}
          <form
            action="/api/auth/sign-in"
            className="mt-6 space-y-4"
            method="post"
          >
            <input name="redirect" type="hidden" value={redirectTo} />
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" required type="email" />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" />
            </div>
            <Button>Continue</Button>
          </form>
        </Card>
      </section>
      <SiteFooter />
    </>
  )
}

import { auth } from "@/auth"
import { SiteNavClient } from "@/components/site-nav-client"

export async function SiteNav() {
  const session = await auth()
  return <SiteNavClient isLoggedIn={Boolean(session?.user)} />
}

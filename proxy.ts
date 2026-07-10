import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname.startsWith("/account") && pathname !== "/account/signin") {
    const authCookie = request.cookies.get("session-token")

    if (!authCookie) {
      const signInUrl = new URL("/account/signin", request.url)
      signInUrl.searchParams.set("redirect", pathname)
      return NextResponse.redirect(signInUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/account/:path*"],
}

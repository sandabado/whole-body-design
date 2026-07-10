import { type NextRequest, NextResponse } from "next/server"

import {
  SESSION_COOKIE,
  createSessionToken,
  findOrCreateUser,
  getSessionCookieOptions,
  normalizeEmail,
} from "@/auth"

export async function POST(request: NextRequest) {
  const formData = await request.formData()
  const email = normalizeEmail(String(formData.get("email") || ""))
  const name = String(formData.get("name") || "").trim() || undefined
  const redirectTo = safeRedirectPath(String(formData.get("redirect") || ""))

  if (!email || !email.includes("@")) {
    const url = new URL("/sign-in", request.url)
    url.searchParams.set("error", "email")
    return NextResponse.redirect(url, { status: 303 })
  }

  try {
    const user = await findOrCreateUser(email, name)
    const response = NextResponse.redirect(new URL(redirectTo, request.url), {
      status: 303,
    })

    response.cookies.set(
      SESSION_COOKIE,
      createSessionToken({
        email: user.email,
        id: user.id,
        name: user.name || undefined,
      }),
      getSessionCookieOptions()
    )

    return response
  } catch (error) {
    console.error("Sign in failed:", error)
    const url = new URL("/sign-in", request.url)
    url.searchParams.set("error", "server")
    return NextResponse.redirect(url, { status: 303 })
  }
}

function safeRedirectPath(path: string) {
  if (!path || !path.startsWith("/") || path.startsWith("//")) {
    return "/account/library"
  }

  return path
}

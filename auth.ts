import "server-only"

import { createHmac, timingSafeEqual } from "node:crypto"

import { eq } from "drizzle-orm"
import { cookies } from "next/headers"

import { db, isDatabaseConfigured } from "@/db"
import { users } from "@/db/schema"

export const SESSION_COOKIE = "session-token"
const SESSION_MAX_AGE = 60 * 60 * 24 * 30

export type Session = {
  user: {
    email: string
    id: string
    name?: string
  }
}

type SessionPayload = Session["user"] & {
  exp: number
}

export async function auth(): Promise<Session | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value
  if (!token) return null

  const payload = verifySessionToken(token)
  if (!payload) return null

  return {
    user: {
      email: payload.email,
      id: payload.id,
      name: payload.name,
    },
  }
}

export async function findOrCreateUser(email: string, name?: string) {
  const normalizedEmail = normalizeEmail(email)
  if (!normalizedEmail) throw new Error("Valid email is required")

  if (!isDatabaseConfigured) {
    return {
      email: normalizedEmail,
      id: stableUserId(normalizedEmail),
      name,
    }
  }

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, normalizedEmail),
  })

  if (existingUser) return existingUser

  const inserted = await db
    .insert(users)
    .values({
      email: normalizedEmail,
      name: name || null,
    })
    .returning()

  return inserted[0]
}

export function createSessionToken(user: Session["user"]) {
  const payload: SessionPayload = {
    email: normalizeEmail(user.email),
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
    id: user.id,
    name: user.name,
  }

  const body = Buffer.from(JSON.stringify(payload)).toString("base64url")
  const signature = sign(body)
  return `${body}.${signature}`
}

export function getSessionCookieOptions() {
  return {
    httpOnly: true,
    maxAge: SESSION_MAX_AGE,
    path: "/",
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

function verifySessionToken(token: string): SessionPayload | null {
  const [body, signature] = token.split(".")
  if (!body || !signature || !safeEqual(signature, sign(body))) return null

  try {
    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8")
    ) as SessionPayload

    if (!payload.email || !payload.id || payload.exp < Date.now() / 1000) {
      return null
    }

    return payload
  } catch {
    return null
  }
}

function sign(value: string) {
  const secret = getAuthSecret()
  return createHmac("sha256", secret).update(value).digest("base64url")
}

function getAuthSecret() {
  if (process.env.AUTH_SECRET) return process.env.AUTH_SECRET
  if (process.env.NODE_ENV !== "production") {
    return "whole-body-design-local-dev-secret"
  }

  throw new Error("AUTH_SECRET is required in production")
}

function safeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left)
  const rightBuffer = Buffer.from(right)
  return (
    leftBuffer.length === rightBuffer.length &&
    timingSafeEqual(leftBuffer, rightBuffer)
  )
}

function stableUserId(email: string) {
  const hash = createHmac("sha256", "whole-body-design-user-id")
    .update(email)
    .digest("hex")
    .slice(0, 32)

  return [
    hash.slice(0, 8),
    hash.slice(8, 12),
    `4${hash.slice(13, 16)}`,
    `a${hash.slice(17, 20)}`,
    hash.slice(20, 32),
  ].join("-")
}

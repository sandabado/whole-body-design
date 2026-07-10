import { NextResponse } from "next/server"

import { db } from "@/db"
import { waitlist } from "@/db/schema"
import { normalizeEmail } from "@/auth"
import { appendNoteFields, cleanRequired } from "@/lib/form-data"

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = cleanRequired(formData.get("name"))
  const email = normalizeEmail(cleanRequired(formData.get("email")))
  const pillar = cleanRequired(formData.get("pillar"))
  const note = appendNoteFields(cleanRequired(formData.get("note")) || null, [
    ["Pillar", pillar || null],
    ["Project", cleanRequired(formData.get("project")) || null],
    ["Revenue Range", cleanRequired(formData.get("revenueRange")) || null],
    ["Primary Asset", cleanRequired(formData.get("primaryAsset")) || null],
  ])

  if (!name || !email.includes("@")) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    )
  }

  await db.insert(waitlist).values({ email, name, note })

  const redirectPath = pillar === "foundation" ? "/foundation" : "/guardian"
  return NextResponse.redirect(
    new URL(`${redirectPath}?joined=true`, request.url),
    { status: 303 }
  )
}

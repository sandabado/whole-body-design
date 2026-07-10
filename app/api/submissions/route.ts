import { NextResponse } from "next/server"

import { db } from "@/db"
import { submissions } from "@/db/schema"
import { normalizeEmail } from "@/auth"
import { cleanOptional, cleanRequired } from "@/lib/form-data"

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = cleanRequired(formData.get("name"))
  const email = normalizeEmail(cleanRequired(formData.get("email")))
  const artistName = cleanOptional(formData.get("artistName"))
  const portfolioUrl = cleanOptional(formData.get("portfolioUrl"))
  const note = cleanRequired(formData.get("message"))

  if (!name || !email.includes("@") || !note) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    )
  }

  await db.insert(submissions).values({
    artistName,
    email,
    name,
    note,
    portfolioUrl,
    status: "pending",
  })

  return NextResponse.redirect(
    new URL("/studios?submitted=true", request.url),
    {
      status: 303,
    }
  )
}

import { NextResponse } from "next/server"

import { db } from "@/db"
import { starReadings } from "@/db/schema"
import { normalizeEmail } from "@/auth"
import { cleanOptional, cleanRequired } from "@/lib/form-data"
import { computePlaceholderReading } from "@/lib/reading-engine"

export async function POST(request: Request) {
  const body = (await request.json()) as {
    birthDate?: unknown
    birthPlace?: unknown
    birthTime?: unknown
    consentToContact?: unknown
    email?: unknown
    phone?: unknown
  }

  const birthDate = cleanRequired(body.birthDate)
  const birthPlace = cleanRequired(body.birthPlace)
  const birthTime = cleanOptional(body.birthTime)
  const email = normalizeEmail(cleanRequired(body.email))
  const phone = cleanOptional(body.phone)

  if (!birthDate || !birthPlace || !email.includes("@")) {
    return NextResponse.json(
      { error: "Birth date, birth place, and email are required" },
      { status: 400 }
    )
  }

  const reading = computePlaceholderReading(birthDate, birthTime, birthPlace)
  const readingId = crypto.randomUUID()

  await db.insert(starReadings).values({
    birthDate,
    birthPlace,
    birthTime,
    computedAt: new Date(),
    consentToContact: body.consentToContact === true,
    email,
    house: reading.house,
    id: readingId,
    phone,
    readingData: reading,
    status: "computed",
  })

  return NextResponse.json({
    reading,
    readingId,
    success: true,
  })
}

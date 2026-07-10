import { type NextRequest, NextResponse } from "next/server"

import { normalizeEmail } from "@/auth"
import { db } from "@/db"
import { consultations } from "@/db/schema"
import { getStripe } from "@/lib/stripe"

const CONSULTATION_TYPES = {
  architect_90: {
    priceCents: 33300,
    title: "Whole Body Architect & Sovereign System Consultation",
  },
  free_20: {
    priceCents: 0,
    title: "Free 20-Minute Consultation",
  },
  full_60: {
    priceCents: 11100,
    title: "60-Minute Strategy Session",
  },
} as const

type ConsultationType = keyof typeof CONSULTATION_TYPES

const CONSULTATION_TYPE_ALIASES: Record<string, ConsultationType> = {
  architect_90: "architect_90",
  architect_sovereign: "architect_90",
  free_20: "free_20",
  full_60: "full_60",
  session_60: "full_60",
}

export async function POST(request: NextRequest) {
  const isFormPost = Boolean(
    request.headers
      .get("content-type")
      ?.includes("application/x-www-form-urlencoded")
  )

  try {
    const payload = await parseConsultationPayload(request)
    const email = normalizeEmail(payload.email || "")
    const name = (payload.name || "").trim()
    const notes = (payload.notes || "").trim() || null
    const type = normalizeConsultationType(payload.type)

    if (!name || !email.includes("@") || !type) {
      return consultationError(
        "Valid name, email, and type are required",
        400,
        isFormPost
      )
    }

    const config = CONSULTATION_TYPES[type]

    await db.insert(consultations).values({
      email,
      name,
      notes,
      status: "pending",
      type,
    })

    if (config.priceCents === 0) {
      return consultationSuccess("/book?success=free", isFormPost)
    }

    const stripe = getStripe("studios")
    const baseUrl = process.env.BASE_URL || request.nextUrl.origin
    const checkoutSession = await stripe.checkout.sessions.create({
      cancel_url: `${baseUrl}/book?canceled=true`,
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: config.title },
            unit_amount: config.priceCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        consultationType: type,
        email,
        name,
      },
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${baseUrl}/book?success=paid`,
    })

    if (isFormPost && checkoutSession.url) {
      return NextResponse.redirect(checkoutSession.url, { status: 303 })
    }

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Consultation error:", error)
    return consultationError(
      "Failed to submit consultation request",
      500,
      isFormPost
    )
  }
}

async function parseConsultationPayload(request: NextRequest) {
  const contentType = request.headers.get("content-type") || ""

  if (contentType.includes("application/x-www-form-urlencoded")) {
    const formData = await request.formData()
    return {
      email: String(formData.get("email") || ""),
      name: String(formData.get("name") || ""),
      notes: String(formData.get("notes") || ""),
      type: String(formData.get("type") || "full_60"),
    }
  }

  return (await request.json()) as {
    email?: string
    name?: string
    notes?: string
    type?: string
  }
}

function normalizeConsultationType(value: string | undefined) {
  if (!value) return null
  return CONSULTATION_TYPE_ALIASES[value] || null
}

function consultationError(message: string, status: number, redirect: boolean) {
  if (redirect) {
    const url = new URL(
      "/book",
      process.env.BASE_URL || "http://localhost:3001"
    )
    url.searchParams.set("error", message)
    return NextResponse.redirect(url, { status: 303 })
  }

  return NextResponse.json({ error: message }, { status })
}

function consultationSuccess(path: string, redirect: boolean) {
  if (redirect) {
    const url = new URL(path, process.env.BASE_URL || "http://localhost:3001")
    return NextResponse.redirect(url, { status: 303 })
  }

  return NextResponse.json({
    message: "Consultation request received.",
    success: true,
  })
}

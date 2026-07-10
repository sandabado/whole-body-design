"use client"

import { useState } from "react"
import {
  Calendar,
  Clock,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react"

import { StarReadingResult } from "@/components/star-reading-result"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import type { ReadingResult } from "@/lib/reading-engine"

type FormState = "error" | "idle" | "submitting" | "success"

function isValidEmail(value: FormDataEntryValue | null) {
  return typeof value === "string" && /\S+@\S+\.\S+/.test(value)
}

export function StarReadingForm() {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [reading, setReading] = useState<ReadingResult | null>(null)
  const [readingId, setReadingId] = useState<string | null>(null)
  const [state, setState] = useState<FormState>("idle")

  function validate(formData: FormData) {
    const nextErrors: Record<string, string> = {}

    if (!formData.get("birthDate")) nextErrors.birthDate = "Required"
    if (!formData.get("birthPlace")) nextErrors.birthPlace = "Required"
    if (!isValidEmail(formData.get("email"))) {
      nextErrors.email = "Valid email required"
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function reset() {
    setErrors({})
    setReading(null)
    setReadingId(null)
    setState("idle")
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    if (!validate(formData)) return

    setState("submitting")

    try {
      const response = await fetch("/api/star-reading", {
        body: JSON.stringify({
          birthDate: String(formData.get("birthDate") || ""),
          birthPlace: String(formData.get("birthPlace") || ""),
          birthTime: formData.get("birthTime")
            ? String(formData.get("birthTime"))
            : null,
          consentToContact: formData.get("consent") === "on",
          email: String(formData.get("email") || ""),
          phone: formData.get("phone") ? String(formData.get("phone")) : null,
        }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      })

      if (!response.ok) throw new Error("Reading request failed")

      const json = (await response.json()) as {
        reading: ReadingResult
        readingId: string
        success: boolean
      }

      setReading(json.reading)
      setReadingId(json.readingId)
      setState("success")
    } catch {
      setState("error")
    }
  }

  if (state === "success" && reading) {
    return (
      <StarReadingResult
        onReset={reset}
        reading={reading}
        readingId={readingId}
      />
    )
  }

  if (state === "error") {
    return (
      <div className="mx-auto max-w-xl rounded-lg border border-red-500/30 bg-obsidian/84 p-8 text-center">
        <h2 className="font-display text-2xl text-red-300">
          Something went wrong.
        </h2>
        <p className="mt-3 text-sm text-moonstone/62">
          Your reading did not generate. Please try again.
        </p>
        <Button variant="pinkOutline" className="mt-6" onClick={reset}>
          Try Again
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="birthDate" className="text-gold">
            <Calendar className="h-3.5 w-3.5" />
            Birth Date
          </Label>
          <Input
            id="birthDate"
            name="birthDate"
            type="date"
            max={new Date().toISOString().split("T")[0]}
            required
            className="border-gold/20 bg-obsidian/80 text-moonstone"
          />
          {errors.birthDate ? (
            <p className="font-mono text-xs text-red-300">{errors.birthDate}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthTime" className="text-gold">
            <Clock className="h-3.5 w-3.5" />
            Birth Time
          </Label>
          <Input
            id="birthTime"
            name="birthTime"
            type="time"
            className="border-gold/20 bg-obsidian/80 text-moonstone"
          />
          <p className="font-mono text-xs text-moonstone/42">
            Leave blank if unknown
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="birthPlace" className="text-gold">
            <MapPin className="h-3.5 w-3.5" />
            Birth Place
          </Label>
          <Input
            id="birthPlace"
            name="birthPlace"
            type="text"
            placeholder="City, State, Country"
            required
            className="border-gold/20 bg-obsidian/80 text-moonstone"
          />
          {errors.birthPlace ? (
            <p className="font-mono text-xs text-red-300">
              {errors.birthPlace}
            </p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gold">
            <Mail className="h-3.5 w-3.5" />
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            className="border-gold/20 bg-obsidian/80 text-moonstone"
          />
          {errors.email ? (
            <p className="font-mono text-xs text-red-300">{errors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gold">
            <Phone className="h-3.5 w-3.5" />
            Phone <span className="text-moonstone/42">(optional)</span>
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(555) 555-5555"
            className="border-gold/20 bg-obsidian/80 text-moonstone"
          />
        </div>
      </div>

      <label className="flex items-start gap-3 text-xs leading-6 text-moonstone/64">
        <input
          name="consent"
          type="checkbox"
          defaultChecked
          className="mt-1 h-4 w-4 rounded border-gold/30 accent-[#ff2fb3]"
        />
        <span>
          I consent to receive my Whole Body Design Reading and occasional
          updates from WholeBody Design. My birth data is used solely for
          generating my reading and is never sold or shared.
        </span>
      </label>

      <Button
        type="submit"
        disabled={state === "submitting"}
        className="h-12 w-full text-base"
      >
        {state === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Your Reading...
          </>
        ) : (
          <>
            <Sparkles className="mr-2 h-4 w-4" />
            Get Your Whole Body Design Reading →
          </>
        )}
      </Button>

      <p className="text-center font-mono text-xs text-moonstone/48">
        Takes 60 seconds. Free. No spam. Ever.
      </p>
    </form>
  )
}

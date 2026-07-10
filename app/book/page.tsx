import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const bookingTypes = {
  architect_90: {
    duration: "90 min",
    price: "$333",
    title: "Architect & Sovereign",
  },
  architect_sovereign: {
    duration: "90 min",
    price: "$333",
    title: "Architect & Sovereign",
  },
  free_20: {
    duration: "20 min",
    price: "Free",
    title: "Free Discovery",
  },
  full_60: {
    duration: "60 min",
    price: "$111",
    title: "Full Session",
  },
  session_60: {
    duration: "60 min",
    price: "$111",
    title: "Full Session",
  },
} as const

type BookingType = keyof typeof bookingTypes

function isBookingType(
  value: string | string[] | undefined
): value is BookingType {
  return (
    typeof value === "string" &&
    Object.prototype.hasOwnProperty.call(bookingTypes, value)
  )
}

export default async function BookPage({
  searchParams,
}: {
  searchParams: Promise<{
    reading?: string
    type?: string
  }>
}) {
  const params = await searchParams
  const selectedType = isBookingType(params.type) ? params.type : "full_60"
  const selected = bookingTypes[selectedType]

  return (
    <>
      <SiteNav />
      <section className="bg-amethyst px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            Consult With Jesse
          </p>
          <h1 className="mt-4 font-display text-6xl font-bold text-moonstone">
            Book the Whole Body Architect
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-moonstone/72">
            All consultations are with Jesse Gawlik. Choose the depth of support
            that matches the moment: Free 20-minute discovery, $111 full
            session, or $333 deep architecture.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {Object.entries(bookingTypes)
              .filter(
                ([type]) =>
                  !["architect_sovereign", "session_60"].includes(type)
              )
              .map(([type, tier]) => (
                <Card
                  className={`bg-gray-900/72 p-5 ${
                    type === selectedType
                      ? "border-gold/70 ring-1 ring-gold/35"
                      : ""
                  }`}
                  key={type}
                >
                  <h2 className="font-display text-2xl text-moonstone">
                    {tier.title}
                  </h2>
                  <p className="mt-2 font-mono text-sm text-moonstone/50">
                    {tier.duration}
                  </p>
                  <p className="mt-4 font-mono text-3xl text-gold">
                    {tier.price}
                  </p>
                </Card>
              ))}
          </div>

          <Card className="mt-8 bg-gray-900/80 p-8">
            <h2 className="font-display text-3xl text-gold">
              {selected.title} / {selected.price}
            </h2>
            <p className="mt-3 text-moonstone/70">
              {selected.duration} with Jesse. We will confirm timing and next
              steps by email.
            </p>
            {params.reading ? (
              <p className="mt-3 font-mono text-xs text-moonstone/48">
                Reading context attached: {params.reading.slice(0, 8)}
              </p>
            ) : null}

            <form
              action="/api/consultation"
              className="mt-8 space-y-4"
              method="post"
            >
              <input name="type" type="hidden" value={selectedType} />
              {params.reading ? (
                <input name="readingId" type="hidden" value={params.reading} />
              ) : null}
              <div>
                <Label htmlFor="book-name">Name</Label>
                <Input id="book-name" name="name" required />
              </div>
              <div>
                <Label htmlFor="book-email">Email</Label>
                <Input id="book-email" name="email" required type="email" />
              </div>
              <div>
                <Label htmlFor="book-note">What are you building?</Label>
                <Textarea
                  id="book-note"
                  name="notes"
                  defaultValue={
                    params.reading
                      ? `Whole Body Design Reading ID: ${params.reading}\n\n`
                      : undefined
                  }
                />
              </div>
              <Button variant="pink">Request Booking</Button>
            </form>
          </Card>
        </div>
      </section>
      <SiteFooter />
    </>
  )
}

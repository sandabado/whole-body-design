import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const benefits = [
  "Whole Body Design Reading, if you have not taken it",
  "Reading archive — retake anytime and save to your account",
  "Monthly virtual gathering — first Tuesday, 7pm EST",
  "Member directory searchable by House, element, and location",
  "Quarterly AMA with Jesse Gawlik",
  "Voting rights on Guild decisions and direction",
  "Early access to new features and readings",
  "15% discount on wholebody.earth products",
] as const

const faqs = [
  ["Really just one tier?", "Yes. Full access. No upsells. No premium tier."],
  [
    "Can I cancel?",
    "Anytime from your account dashboard. No retention funnels or friction.",
  ],
  [
    "Do I need a Design Reading first?",
    "No, but knowing your House helps you connect with the right people.",
  ],
  [
    "Is there an annual option?",
    "Not yet. Membership is month-to-month for now.",
  ],
  [
    "What is the member directory?",
    "A privacy-first network searchable by House, element, location, and focus area.",
  ],
  [
    "Can I gift a membership?",
    "Coming soon. For now, the reading is the front door.",
  ],
  [
    "What happens to my data?",
    "We use it to provide the reading and account experience. We do not sell it.",
  ],
  [
    "Is this connected to wholebody.earth?",
    "Yes. .earth is the product site; .design is the discovery and network layer.",
  ],
] as const

const steps = [
  ["Join", "Subscribe for $11.11/month and create your account."],
  [
    "Take the Reading",
    "Discover your House. The Guild is organized around these Houses.",
  ],
  [
    "Access Everything",
    "Directory, gatherings, voting, AMAs, and discounts unlock together.",
  ],
  ["Show Up", "The monthly gathering is virtual, held on the first Tuesday."],
] as const

function JoinGuildButton({ children }: { children: React.ReactNode }) {
  return (
    <form action="/api/checkout" method="post">
      <input
        name="productSlug"
        type="hidden"
        value="living-library-membership"
      />
      <Button size="lg" type="submit" variant="gold">
        {children}
      </Button>
    </form>
  )
}

export default function GuildPage() {
  return (
    <PageShell bridge="guild">
      <section className="relative overflow-hidden border-b border-gold/10 px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(109,74,255,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            The Guild
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            The Sovereign Network
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/75">
            One membership. Full access. Know your House. Meet your people.
            Build with alignment.
          </p>
          <p className="mt-9 font-mono text-4xl text-gold">$11.11 /month</p>
          <p className="mt-3 text-sm text-moonstone/55">
            Cancel anytime. No commitment.
          </p>
          <div className="mt-8">
            <JoinGuildButton>Join the Guild →</JoinGuildButton>
          </div>
          <p className="mt-6 text-sm text-moonstone/58">
            Not sure which House you are?{" "}
            <Link className="text-gold hover:text-gold/75" href="/reading">
              Get Your Reading →
            </Link>
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-gold">
            What You Get
          </h2>
          <p className="mt-5 text-center text-moonstone/68">
            No tiers. No upsells. One price unlocks everything.
          </p>
          <Card className="mt-8 border-gold/15 bg-obsidian/82 p-7">
            <ul className="grid gap-4 text-sm leading-6 text-moonstone/78 md:grid-cols-2">
              {benefits.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="text-gold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-6 text-moonstone/55">
            WholeBody content — Codex, music, physical products, and events —
            lives at{" "}
            <a
              className="text-gold hover:text-gold/75"
              href="https://wholebody.earth"
            >
              wholebody.earth
            </a>
            . The Guild is the sovereign network layer here.
          </p>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl text-gold">Why $11.11</h2>
          <div className="mt-7 space-y-5 text-lg leading-8 text-moonstone/72">
            <p>
              Because access should not be tiered. If you are in, you are in.
            </p>
            <p>
              Eleven represents mastery in the Dodecanic System — the student
              becoming the teacher. .11 is the fractal: the pattern repeating at
              every scale.
            </p>
            <p>
              $11.11 is the invitation, set low enough that anyone serious can
              enter. Cancel anytime. No contracts. No funnels. Just the circle.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl text-gold">
            How It Works
          </h2>
          <div className="mt-9 grid gap-5 md:grid-cols-4">
            {steps.map(([title, body], index) => (
              <Card className="border-gold/15 bg-obsidian/82 p-6" key={title}>
                <p className="font-mono text-xs text-gold">0{index + 1}</p>
                <h3 className="mt-3 font-display text-xl text-moonstone">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-moonstone/65">
                  {body}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-9 text-center">
            <JoinGuildButton>Join the Guild — $11.11/mo →</JoinGuildButton>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl text-gold">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map(([question, answer]) => (
              <details
                className="rounded-lg border border-gold/15 bg-obsidian/82 p-5"
                key={question}
              >
                <summary className="cursor-pointer font-display text-xl text-moonstone">
                  {question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-moonstone/68">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-center">
        <h2 className="font-display text-4xl text-gold">Ready?</h2>
        <p className="mt-5 text-lg text-moonstone/70">
          $11.11/month. Everything. No catches.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <JoinGuildButton>Join the Guild →</JoinGuildButton>
          <Button size="lg" variant="violetOutline" asChild>
            <Link href="/reading">Get Your Reading →</Link>
          </Button>
        </div>
      </section>
    </PageShell>
  )
}

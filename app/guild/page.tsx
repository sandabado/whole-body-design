import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const included = [
  "Digital access to all 5 Codex volumes",
  "Full music catalog (streaming + downloads)",
  "Exclusive Vault content (recordings, drafts, unreleased)",
  "Priority seating at Hearthfire Sessions",
  "Monthly Guild gathering (virtual, first Tuesday)",
  "Member directory access",
  "Early access to all new releases (music, books, courses)",
  "15% discount on all physical products",
  "Voting rights on Guild decisions",
  "Direct line to Jesse via monthly AMA",
]

const steps = [
  {
    body: "Click subscribe. $11.11/month. Create your account. You're in.",
    title: "JOIN",
  },
  {
    body: "If you haven't already, get your Whole Body Design Reading. Discover your House.",
    title: "TAKE THE READING",
  },
  {
    body: "Codex, music, vault, gatherings, directory. All unlocked.",
    title: "ACCESS EVERYTHING",
  },
  {
    body: "Monthly gathering. First Tuesday. Virtual. The circle holds the work — but only if you're in it.",
    title: "SHOW UP",
  },
]

const faqs = [
  ["Really just one tier?", "Yes. Full access. No upsells."],
  ["Can I cancel?", "Anytime. From your account dashboard."],
  ["Do I need to take the Design Reading first?", "No, but we recommend it."],
  ["Is there an annual option?", "Not yet. Month-to-month for now."],
  [
    "What's the Vault?",
    "Unreleased recordings, draft chapters, raw sessions, works in progress. The stuff that happens before the finished product. Guild only.",
  ],
  ["Can I gift a membership?", "Coming soon. For now, send them to /reading."],
]

export default function GuildPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-gold/10 bg-obsidian px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(255,47,179,0.12),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">
            The Guild
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">
            The Guild
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/70">
            One membership. Full access. Everything WholeBody creates — the
            Codex, the music, the vault, the gatherings. One price. No tiers. No
            gates.
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-moonstone/80">
            The Guild is the inner circle. Not an audience. Not a subscription
            trap. A circle of people building sovereign work who want access to
            everything Jesse and the constellation produce — and who want to
            build alongside each other.
          </p>
          <div className="mt-10">
            <p className="font-mono text-4xl text-gold">$11.11 /month</p>
            <p className="mt-3 text-sm text-moonstone/55">
              Cancel anytime. No commitment.
            </p>
          </div>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/api/subscribe?tier=guild">Join the Guild →</Link>
          </Button>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-gold">What You Get</h2>
          <Card className="mt-7 border-gold/15 bg-obsidian/82 p-7">
            <ul className="space-y-3 text-base leading-7 text-moonstone/78">
              {included.map((item) => (
                <li className="flex gap-3" key={item}>
                  <span className="text-gold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm leading-6 text-moonstone/50">
              &quot;All of this. Eleven dollars and eleven cents a month. We
              kept the math simple.&quot;
            </p>
          </Card>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl text-gold">Why $11.11</h2>
          <div className="mt-6 space-y-5 text-lg leading-8 text-moonstone/80">
            <p>
              Because access shouldn&apos;t be tiered. If you&apos;re in,
              you&apos;re in. The number 11 represents mastery in the dodecanic
              system — the eleventh step of the spiral, where the student
              becomes the teacher. .11 is the fractal — the pattern repeating at
              every scale.
            </p>
            <p>
              $11.11 is the invitation. Not a price floor. Not a gatekeeping
              mechanism. It&apos;s the cost of showing you&apos;re committed,
              set low enough that anyone serious can enter.
            </p>
            <p>Cancel anytime. No contracts. No funnels. Just the circle.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl text-gold">
            How It Works
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {steps.map((step, index) => (
              <Card
                className="border-gold/15 bg-obsidian/82 p-5"
                key={step.title}
              >
                <p className="font-mono text-xs text-gold">Step {index + 1}</p>
                <h3 className="mt-3 font-display text-xl text-moonstone">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-moonstone/68">
                  {step.body}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-9 text-center">
            <Button asChild>
              <Link href="/api/subscribe?tier=guild">
                Join the Guild — $11.11/mo →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-2xl text-gold">FAQ</h2>
          <div className="mt-7 space-y-3">
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
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-2xl text-gold">Ready?</h2>
          <p className="mt-5 text-lg text-moonstone/70">
            $11.11/month. Everything. No catches.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/api/subscribe?tier=guild">Join the Guild →</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/reading">Get Your Whole Body Design Reading →</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

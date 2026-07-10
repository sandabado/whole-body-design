import Link from "next/link"

import { PageShell } from "@/components/page-shell"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const included = [
  "Whole Body Design Reading archive",
  "Monthly Guild gathering (virtual, first Tuesday)",
  "Member directory access",
  "Sovereign creator network",
  "Voting rights on Guild decisions",
  "Direct line to Jesse via monthly AMA",
]

const faqs = [
  ["Really just one tier?", "Yes. One network, one membership, no upsells."],
  ["Can I cancel?", "Anytime, from your account dashboard."],
  ["Do I need a Design Reading first?", "No, but knowing your House helps you enter the network with context."],
  ["Is there an annual option?", "Not yet. Membership is month-to-month."],
] as const

export default function GuildPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden border-b border-gold/10 px-6 py-20 text-center sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.18),transparent_34%),radial-gradient(circle_at_20%_18%,rgba(109,74,255,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-xs tracking-[0.3em] text-gold uppercase">The Sovereign Network</p>
          <h1 className="mt-5 font-display text-5xl font-bold text-moonstone sm:text-6xl">The Guild</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-moonstone/75">A circle of sovereign creators building work that holds. Know your House, meet your people, and help shape the network together.</p>
          <p className="mt-9 font-mono text-4xl text-gold">$11.11 /month</p>
          <p className="mt-3 text-sm text-moonstone/55">One tier. Cancel anytime.</p>
          <form action="/api/checkout" method="post" className="mt-8">
            <input name="productSlug" type="hidden" value="living-library-membership" />
            <Button size="lg" type="submit">Join the Guild →</Button>
          </form>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl text-gold">What&apos;s Included</h2>
          <Card className="mt-8 border-gold/15 bg-obsidian/82 p-7">
            <ul className="space-y-3 text-base leading-7 text-moonstone/78">
              {included.map((item) => <li className="flex gap-3" key={item}><span className="text-gold">✓</span><span>{item}</span></li>)}
            </ul>
          </Card>
          <p className="mt-7 text-center text-sm leading-6 text-moonstone/55">WholeBody full content (Codex, music, physical products) lives at <a className="text-gold hover:text-gold/75" href="https://wholebody.earth">wholebody.earth</a>. The Guild is the sovereign network layer here.</p>
        </div>
      </section>

      <section className="border-y border-gold/10 bg-obsidian/70 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl text-gold">FAQ</h2>
          <div className="mt-8 space-y-3">
            {faqs.map(([question, answer]) => <details className="rounded-lg border border-gold/15 bg-obsidian/82 p-5" key={question}><summary className="cursor-pointer font-display text-xl text-moonstone">{question}</summary><p className="mt-3 text-sm leading-6 text-moonstone/68">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <Card className="border-gold/20 bg-obsidian/82 p-7 text-center"><h2 className="font-display text-2xl text-gold">Reading</h2><p className="mt-4 text-sm leading-6 text-moonstone/70">Not sure which House you are? Take the reading first.</p><Button className="mt-6" asChild><Link href="/#reading">Get Your Design Reading →</Link></Button></Card>
          <Card className="border-violet/20 bg-obsidian/82 p-7 text-center"><h2 className="font-display text-2xl text-violet">Houses</h2><p className="mt-4 text-sm leading-6 text-moonstone/70">Learn what each House means in the dodecanic system.</p><Button className="mt-6" variant="violet" asChild><Link href="/houses">Explore the 12 Houses →</Link></Button></Card>
        </div>
      </section>
    </PageShell>
  )
}

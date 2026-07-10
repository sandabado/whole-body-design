import { PageHero, PageShell } from "@/components/page-shell"

export default function ContactPage() {
  return (
    <PageShell bridge="contact">
      <PageHero eyebrow="Contact" title="Get in Touch">
        <p>
          Questions about the system, an enterprise inquiry, or a partnership
          idea? Reach out. We read everything.
        </p>
      </PageHero>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div className="rounded-lg border border-gold/15 bg-obsidian/76 p-7">
            <h2 className="font-display text-2xl text-gold">Write to Us</h2>
            <p className="mt-4 leading-7 text-moonstone/68">
              For general questions, partnerships, and press inquiries, use the
              contact that fits your message.
            </p>
            <dl className="mt-7 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-xs text-moonstone/45 uppercase">
                  General
                </dt>
                <dd className="mt-1">
                  <a
                    className="text-gold hover:text-gold/75"
                    href="mailto:hello@wholebody.design"
                  >
                    hello@wholebody.design
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-moonstone/45 uppercase">
                  Press
                </dt>
                <dd className="mt-1">
                  <a
                    className="text-gold hover:text-gold/75"
                    href="mailto:press@wholebody.design"
                  >
                    press@wholebody.design
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs text-moonstone/45 uppercase">
                  Partnerships
                </dt>
                <dd className="mt-1">
                  <a
                    className="text-gold hover:text-gold/75"
                    href="mailto:partners@wholebody.design"
                  >
                    partners@wholebody.design
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-lg border border-violet/20 bg-white/5 p-7">
            <h2 className="font-display text-2xl text-violet">Enterprise</h2>
            <p className="mt-4 leading-7 text-moonstone/68">
              For organizations seeking bulk readings, white-label licensing, or
              custom Dodecanic implementations, email{" "}
              <a
                className="text-gold hover:text-gold/75"
                href="mailto:partners@wholebody.design?subject=Enterprise%20Inquiry"
              >
                partners@wholebody.design
              </a>{" "}
              with the subject line “Enterprise Inquiry.”
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

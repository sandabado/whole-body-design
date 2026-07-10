import { PageHero, PageShell } from "@/components/page-shell"

export default function TermsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Terms of Service">
        <p>
          Effective July 10, 2026. These terms govern use of Whole Body Design,
          its readings, accounts, and Guild membership.
        </p>
      </PageHero>
      <article className="mx-auto max-w-4xl space-y-10 px-6 py-20 leading-7 text-moonstone/72">
        <section>
          <h2 className="font-display text-2xl text-gold">The Service</h2>
          <p className="mt-4">
            Whole Body Design provides archetypal and educational materials.
            Readings are for reflection and exploration; they are not medical,
            legal, financial, mental-health, or professional advice.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">Guild Membership</h2>
          <p className="mt-4">
            Guild membership is billed at the displayed monthly rate until
            cancelled. You may cancel at any time through your account.
            Cancellation ends future renewals; access remains available through
            the current billing period unless otherwise stated.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">Acceptable Use</h2>
          <p className="mt-4">
            Do not misuse the service, interfere with access, attempt
            unauthorized access, or use member information outside the purposes
            for which it was shared. We may suspend access for material
            violations.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">
            Content & Intellectual Property
          </h2>
          <p className="mt-4">
            The Whole Body Design system, site content, and marks are owned by
            Whole Body Mastery LLC or its licensors. You may use materials for
            personal, non-commercial purposes unless we agree otherwise in
            writing.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">Contact</h2>
          <p className="mt-4">
            Questions about these terms can be sent to hello@wholebody.design.
          </p>
        </section>
      </article>
    </PageShell>
  )
}

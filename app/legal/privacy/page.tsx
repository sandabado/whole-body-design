import { PageHero, PageShell } from "@/components/page-shell"

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy Policy">
        <p>
          Effective July 10, 2026. We collect only what is needed to provide
          Whole Body Design readings, accounts, memberships, and support.
        </p>
      </PageHero>
      <article className="mx-auto max-w-4xl space-y-10 px-6 py-20 leading-7 text-moonstone/72">
        <section>
          <h2 className="font-display text-2xl text-gold">What We Collect</h2>
          <p className="mt-4">
            A reading may require birth date, time, place, email, and optional
            phone number. Accounts and purchases require the information
            necessary to provide those services.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">How We Use It</h2>
          <p className="mt-4">
            We use your information to calculate your House, maintain your
            account, process membership, and respond to support requests. We do
            not sell personal data or use it for advertising profiles.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">
            Security & Retention
          </h2>
          <p className="mt-4">
            We use reasonable technical and organizational safeguards to protect
            data in transit and at rest. We retain information only as long as
            necessary for the services, legal obligations, and dispute
            resolution.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">Your Rights</h2>
          <p className="mt-4">
            Depending on your location, you may request access, correction,
            deletion, or portability of your data, and may object to or restrict
            certain processing. Contact hello@wholebody.design to make a
            request. We honor applicable GDPR and CCPA rights.
          </p>
        </section>
        <section>
          <h2 className="font-display text-2xl text-gold">Contact</h2>
          <p className="mt-4">
            Privacy questions can be sent to hello@wholebody.design.
          </p>
        </section>
      </article>
    </PageShell>
  )
}

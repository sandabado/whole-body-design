import { PageHero, PageShell } from "@/components/page-shell"

export default function PrivacyPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Legal" title="Privacy Policy">
        <p>
          This site is designed to collect only what is needed for account
          access, checkout, registration, and support.
        </p>
      </PageHero>
    </PageShell>
  )
}

import Link from "next/link"

const constellationLinks = [
  ["wholebody.earth", "/"],
  ["dodeca.life", "https://dodeca.life"],
  ["Store", "/store"],
  ["MyLiving.Earth", "/account"],
]

const pillarLinks = [
  ["🜂 Presence", "/presence", "text-ember"],
  ["🜁 Press", "/press", "text-gold"],
  ["🜄 Studios", "/studios", "text-teal"],
  ["🜃 Foundation", "/foundation", "text-sage"],
  ["⊙ Guardian", "/guardian", "text-violet"],
]

const resourceLinks = [
  ["Houses", "/houses"],
  ["Manuals", "/manuals"],
  ["Guild", "/guild"],
  ["Store", "/store"],
  ["Support", "/support"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"],
]

const connectLinks = [
  ["Instagram", "#"],
  ["YouTube", "#"],
  ["Spotify", "#"],
  ["LinkedIn", "#"],
]

const accountLinks = [
  ["Sign In", "/account/signin"],
  ["Profile", "/account"],
  ["Purchases", "/account/purchases"],
  ["Settings", "/account/settings"],
]

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-obsidian py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <FooterColumn title="The Constellation" links={constellationLinks} />

          <div>
            <h2 className="font-mono text-xs tracking-widest text-gold uppercase">
              The Pillars
            </h2>
            <ul className="mt-4 space-y-2 font-body text-sm">
              {pillarLinks.map(([label, href, tone]) => (
                <li key={label}>
                  <Link href={href} className={`transition ${tone}`}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
            <FooterColumn title="Resources" links={resourceLinks} />
            <FooterColumn title="Connect" links={connectLinks} inline />
            <FooterColumn title="Account" links={accountLinks} />
          </div>
        </div>

        <p className="mt-10 text-center font-display text-lg text-gold italic">
          So It Is Built. So It Holds. So It Is. 🍀
        </p>

        <div className="mt-10 border-t border-gold/10 pt-7 font-mono text-xs text-moonstone/42">
          <p>
            Privacy Policy · Terms of Service · Trust Declaration · Copyright ©
            2026 Whole Body Mastery LLC
          </p>
          <p className="mt-3">
            This site does not track you. We do not sell your data. We protect
            it.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link href="/legal/privacy" className="hover:text-pink-light">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-pink-light">
              Terms of Service
            </Link>
            <Link href="/legal" className="hover:text-pink-light">
              Trust Declaration
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  inline,
  links,
  title,
}: {
  inline?: boolean
  links: string[][]
  title: string
}) {
  return (
    <div>
      <h2 className="font-mono text-xs tracking-widest text-gold uppercase">
        {title}
      </h2>
      <ul
        className={`mt-4 font-body text-sm text-moonstone/76 ${
          inline ? "flex flex-wrap gap-x-3 gap-y-2" : "space-y-2"
        }`}
      >
        {links.map(([label, href]) => (
          <li key={`${title}-${label}`}>
            <Link href={href} className="transition hover:text-pink-light">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

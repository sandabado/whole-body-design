import Link from "next/link"

const columns = [
  {
    title: "Explore",
    links: [
      ["Houses", "/houses"],
      ["Reading", "/reading"],
      ["Guild", "/guild"],
      ["How It Works", "/how-it-works"],
      ["Compare", "/compare"],
      ["FAQ", "/faq"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "/about"],
      ["Pricing", "/pricing"],
      ["Contact", "/contact"],
      ["Blog", "/blog"],
      ["Careers", "/contact"],
    ],
  },
  {
    title: "Ecosystem",
    links: [
      ["wholebody.earth — Products & Pillars", "https://wholebody.earth"],
      ["fate.energy — API Partner", "https://fate.energy"],
    ],
  },
  {
    title: "Account",
    links: [
      ["Sign In", "/account/signin"],
      ["Sign Up", "/account/signin"],
      ["Member Directory", "/account/directory"],
      ["Settings", "/account/settings"],
    ],
  },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-obsidian px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-xs tracking-widest text-gold uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-moonstone/70">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <Link className="transition hover:text-gold" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-display text-lg text-gold italic">
          So It Is Built. So It Holds. So It Is. 🍀
        </p>
        <div className="mt-10 border-t border-gold/10 pt-7 text-center font-mono text-xs leading-6 text-moonstone/45">
          <p>
            <Link className="hover:text-gold" href="/legal/privacy">
              Privacy Policy
            </Link>{" "}
            ·{" "}
            <Link className="hover:text-gold" href="/legal/terms">
              Terms
            </Link>{" "}
            · Copyright © 2026 Whole Body Mastery LLC
          </p>
          <p className="mt-2">
            This site does not track you. We do not sell your data. We protect
            it.
          </p>
        </div>
      </div>
    </footer>
  )
}

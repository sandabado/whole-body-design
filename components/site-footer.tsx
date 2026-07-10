import Link from "next/link"

const columns = [
  { title: "Network", links: [["wholebody.design", "/"], ["Sister site: wholebody.earth", "https://wholebody.earth"]] },
  { title: "Explore", links: [["Houses", "/houses"], ["Guild", "/guild"], ["Get Your Reading", "/#reading"]] },
  { title: "Account", links: [["Sign In", "/account/signin"], ["Profile", "/account"], ["Settings", "/account/settings"]] },
] as const

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-obsidian px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-xs tracking-widest text-gold uppercase">{column.title}</h2>
              <ul className="mt-4 space-y-2 text-sm text-moonstone/70">
                {column.links.map(([label, href]) => <li key={label}><Link className="transition hover:text-gold" href={href}>{label}</Link></li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center font-display text-lg text-gold italic">So It Is Built. So It Holds. So It Is. 🍀</p>
        <div className="mt-10 border-t border-gold/10 pt-7 text-center font-mono text-xs leading-6 text-moonstone/45">
          <p><Link className="hover:text-gold" href="/legal/privacy">Privacy Policy</Link> · <Link className="hover:text-gold" href="/legal/terms">Terms</Link> · Copyright © 2026 Whole Body Mastery LLC</p>
          <p className="mt-2">This site does not track you. We do not sell your data. We protect it.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from "next/link"

const ELEMENTS = [
  {
    color: "ember",
    href: "/presence",
    hover:
      "hover:border-ember/70 hover:text-ember hover:shadow-[0_0_22px_rgba(194,84,45,0.22)]",
    name: "Presence",
    ring: "ring-ember/70 text-ember border-ember/50",
    symbol: "🜂",
  },
  {
    color: "gold",
    href: "/press",
    hover:
      "hover:border-gold/70 hover:text-gold hover:shadow-[0_0_22px_rgba(212,175,55,0.22)]",
    name: "Press",
    ring: "ring-gold/70 text-gold border-gold/50",
    symbol: "🜁",
  },
  {
    color: "teal",
    href: "/studios",
    hover:
      "hover:border-teal/70 hover:text-teal hover:shadow-[0_0_22px_rgba(43,168,160,0.22)]",
    name: "Studios",
    ring: "ring-teal/70 text-teal border-teal/50",
    symbol: "🜄",
  },
  {
    color: "sage",
    href: "/foundation",
    hover:
      "hover:border-sage/70 hover:text-sage hover:shadow-[0_0_22px_rgba(74,103,65,0.22)]",
    name: "Foundation",
    ring: "ring-sage/70 text-sage border-sage/50",
    symbol: "🜃",
  },
  {
    color: "violet",
    href: "/guardian",
    hover:
      "hover:border-violet/70 hover:text-violet hover:shadow-[0_0_22px_rgba(109,74,255,0.22)]",
    name: "Guardian",
    ring: "ring-violet/70 text-violet border-violet/50",
    symbol: "⊙",
  },
]

export function CrossElementNav({ active }: { active: string }) {
  return (
    <section className="border-t border-gold/10 px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="font-display text-xl text-gold">
          Continue Through the Elements
        </h2>
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {ELEMENTS.map((element) => {
            const isActive = element.name === active

            return (
              <Link
                href={element.href}
                className={`inline-flex items-center gap-2 rounded-full border bg-obsidian/42 px-3 py-1.5 font-mono text-xs transition ${
                  isActive
                    ? `${element.ring} ring-1`
                    : `border-moonstone/14 text-moonstone/58 ${element.hover}`
                }`}
                key={element.name}
              >
                <span>{element.symbol}</span>
                {element.name}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

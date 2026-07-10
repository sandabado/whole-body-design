import { PillarSolid } from "@/components/pillar-solid"
import { cn } from "@/lib/utils"

type PillarSignalTone = "ember" | "gold" | "sage" | "teal" | "violet"

type PillarSignalPillar = {
  element: string
  name: string
  solid: "Dodecahedron" | "Hexahedron" | "Icosahedron" | "Octahedron" | "Tetrahedron"
  status: string
  tone: PillarSignalTone
  whatYouGet: string
}

const toneClasses = {
  ember: {
    border: "border-ember/35",
    glow: "from-ember/18",
    label: "text-ember",
    rail: "bg-ember",
    surface: "bg-obsidian/78",
  },
  gold: {
    border: "border-gold/35",
    glow: "from-gold/18",
    label: "text-gold",
    rail: "bg-gold",
    surface: "bg-obsidian/78",
  },
  sage: {
    border: "border-sage/35",
    glow: "from-sage/18",
    label: "text-sage",
    rail: "bg-sage",
    surface: "bg-obsidian/78",
  },
  teal: {
    border: "border-teal/35",
    glow: "from-teal/18",
    label: "text-teal",
    rail: "bg-teal",
    surface: "bg-obsidian/78",
  },
  violet: {
    border: "border-violet/35",
    glow: "from-violet/18",
    label: "text-violet",
    rail: "bg-violet",
    surface: "bg-obsidian/78",
  },
} as const

export function PillarSignal({
  className,
  pillar,
}: {
  className?: string
  pillar: PillarSignalPillar
}) {
  const tone = toneClasses[pillar.tone]

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border p-3 shadow-2xl shadow-obsidian/40",
        tone.border,
        tone.surface,
        className
      )}
    >
      <div
        className={cn(
          "bg-gradient-radial pointer-events-none absolute inset-0 via-transparent to-transparent",
          tone.glow
        )}
      />
      <div className={cn("absolute inset-y-4 left-0 w-px", tone.rail)} />
      <div className="relative">
        <PillarSolid
          className={cn("h-56 border-current/20 bg-obsidian/60", tone.label)}
          solid={pillar.solid}
        />
        <div className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded border border-moonstone/10 bg-moonstone/10 font-mono text-[0.64rem] tracking-[0.14em] uppercase">
          <div className="bg-obsidian/58 p-3">
            <p className="text-moonstone/34">Element</p>
            <p className={cn("mt-1.5", tone.label)}>{pillar.element}</p>
          </div>
          <div className="bg-obsidian/58 p-3">
            <p className="text-moonstone/34">Solid</p>
            <p className={cn("mt-1.5", tone.label)}>{pillar.solid}</p>
          </div>
        </div>
        <div className="mt-px rounded-b border border-t-0 border-moonstone/10 bg-obsidian/58 p-3">
          <p className="font-mono text-[0.64rem] tracking-[0.14em] text-moonstone/34 uppercase">
            Infrastructure
          </p>
          <p className="mt-2 text-sm leading-6 text-moonstone/76">
            {pillar.whatYouGet}
          </p>
          <p className={cn("mt-3 font-mono text-[0.68rem] uppercase", tone.label)}>
            {pillar.status}
          </p>
        </div>
      </div>
    </div>
  )
}

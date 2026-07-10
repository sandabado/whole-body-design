import Link from "next/link"
import type { FC } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProductCardProps {
  title: string
  tagline: string
  description: string
  priceLine: string
  href: string
  accent: "teal" | "violet" | "ember" | "sage" | "gold"
  badge?: string
  disabled?: boolean
}

const accentColors: Record<ProductCardProps["accent"], string> = {
  ember: "border-t-ember text-ember",
  gold: "border-t-gold/40 text-gold/60",
  sage: "border-t-sage text-sage",
  teal: "border-t-teal text-teal",
  violet: "border-t-violet text-violet",
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  tagline,
  description,
  priceLine,
  href,
  accent,
  badge,
  disabled,
}) => {
  return (
    <Card
      className={`relative rounded-lg border-t-4 bg-gray-900/80 p-6 ${accentColors[accent]}`}
    >
      {badge ? (
        <span className="absolute top-4 right-4 rounded bg-gold/20 px-2 py-1 font-mono text-xs text-gold">
          {badge}
        </span>
      ) : null}
      <div className="mb-2 font-mono text-xs tracking-widest uppercase opacity-80">
        {tagline}
      </div>
      <h3 className="mb-3 font-display text-2xl font-semibold text-moonstone">
        {title}
      </h3>
      <p className="mb-4 font-body text-sm text-moonstone/80">{description}</p>
      <p className="mb-4 font-mono text-sm opacity-80">{priceLine}</p>
      <Button
        variant="link"
        className="pl-0 opacity-80 hover:opacity-100"
        asChild
      >
        <Link href={href}>
          {disabled ? "Join the Waitlist" : "Visit"} -&gt;
        </Link>
      </Button>
    </Card>
  )
}

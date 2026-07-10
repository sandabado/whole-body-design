import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-pink text-white shadow-[0_0_28px_rgba(255,47,179,0.35)] hover:bg-pink-light focus-visible:border-pink-light focus-visible:ring-pink/35",
        outline:
          "border-pink bg-transparent text-pink shadow-[0_0_22px_rgba(255,47,179,0.22)] hover:border-pink-light hover:bg-pink/12 hover:text-pink-light focus-visible:border-pink-light focus-visible:ring-pink/35",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "text-pink hover:bg-pink/10 hover:text-pink-light aria-expanded:bg-pink/10 aria-expanded:text-pink-light",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        ember:
          "bg-ember text-white shadow-[0_0_28px_rgba(194,84,45,0.3)] hover:bg-ember/90 hover:shadow-[0_0_34px_rgba(194,84,45,0.42)] focus-visible:border-ember/70 focus-visible:ring-ember/35",
        emberOutline:
          "border-ember bg-transparent text-ember shadow-[0_0_22px_rgba(194,84,45,0.18)] hover:bg-ember/10 hover:text-ember hover:shadow-[0_0_28px_rgba(194,84,45,0.3)] focus-visible:border-ember/70 focus-visible:ring-ember/35",
        gold: "bg-gold text-obsidian shadow-[0_0_28px_rgba(212,175,55,0.3)] hover:bg-gold/90 hover:shadow-[0_0_34px_rgba(212,175,55,0.42)] focus-visible:border-gold/70 focus-visible:ring-gold/35",
        goldOutline:
          "border-gold bg-transparent text-gold shadow-[0_0_22px_rgba(212,175,55,0.18)] hover:bg-gold/10 hover:text-gold hover:shadow-[0_0_28px_rgba(212,175,55,0.3)] focus-visible:border-gold/70 focus-visible:ring-gold/35",
        sage: "bg-sage text-white shadow-[0_0_28px_rgba(74,103,65,0.3)] hover:bg-sage/90 hover:shadow-[0_0_34px_rgba(74,103,65,0.42)] focus-visible:border-sage/70 focus-visible:ring-sage/35",
        sageOutline:
          "border-sage bg-transparent text-sage shadow-[0_0_22px_rgba(74,103,65,0.18)] hover:bg-sage/10 hover:text-sage hover:shadow-[0_0_28px_rgba(74,103,65,0.3)] focus-visible:border-sage/70 focus-visible:ring-sage/35",
        teal: "bg-teal text-white shadow-[0_0_28px_rgba(43,168,160,0.3)] hover:bg-teal/90 hover:shadow-[0_0_34px_rgba(43,168,160,0.42)] focus-visible:border-teal/70 focus-visible:ring-teal/35",
        tealOutline:
          "border-teal bg-transparent text-teal shadow-[0_0_22px_rgba(43,168,160,0.18)] hover:bg-teal/10 hover:text-teal hover:shadow-[0_0_28px_rgba(43,168,160,0.3)] focus-visible:border-teal/70 focus-visible:ring-teal/35",
        violet:
          "bg-violet text-white shadow-[0_0_28px_rgba(109,74,255,0.3)] hover:bg-violet/90 hover:shadow-[0_0_34px_rgba(109,74,255,0.42)] focus-visible:border-violet/70 focus-visible:ring-violet/35",
        violetOutline:
          "border-violet bg-transparent text-violet shadow-[0_0_22px_rgba(109,74,255,0.18)] hover:bg-violet/10 hover:text-violet hover:shadow-[0_0_28px_rgba(109,74,255,0.3)] focus-visible:border-violet/70 focus-visible:ring-violet/35",
        pink: "bg-pink text-white shadow-[0_0_28px_rgba(255,47,179,0.35)] hover:bg-pink-light hover:shadow-[0_0_34px_rgba(255,47,179,0.46)] focus-visible:border-pink-light focus-visible:ring-pink/35",
        pinkOutline:
          "border-pink bg-transparent text-pink shadow-[0_0_22px_rgba(255,47,179,0.22)] hover:border-pink-light hover:bg-pink/12 hover:text-pink-light hover:shadow-[0_0_28px_rgba(255,47,179,0.34)] focus-visible:border-pink-light focus-visible:ring-pink/35",
        link: "text-pink underline-offset-4 hover:text-pink-light hover:underline",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

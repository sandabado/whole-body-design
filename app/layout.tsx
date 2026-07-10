import type { Metadata } from "next"
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Whole Body Design | Discover Your House",
  description:
    "The Dodecanic System. Twelve Houses of the Dodecahedron. Take the Whole Body Design Reading to discover your element, archetype, and pillar.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-obsidian font-body text-moonstone antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

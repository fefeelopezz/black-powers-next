import type { Metadata, Viewport } from "next"
import { Karla, Playfair_Display } from "next/font/google"

import "./globals.css"
import { MotionProvider } from "@/components/motion"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

// Tipografía recomendada por UI/UX Pro Max para restaurantes: Playfair (titulares) + Karla (texto).
const display = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
})

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} - ${site.tagline}`,
    template: `%s - ${site.name}`,
  },
  description: site.description,
}

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={cn("dark", display.variable, body.variable)}>
      <body className="flex min-h-svh flex-col">
        <MotionProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </MotionProvider>
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INRUA - Instituto Nacional de Direitos Humanos da População de Rua",
  description:
    "Instituto Nacional de Direitos Humanos da População de Rua. Defendemos a dignidade e direitos fundamentais desde 2016. Conheça nossos projetos e transparência pública.",
  keywords: "INRUA, direitos humanos, população de rua, políticas públicas, transparência, MROSC",
  openGraph: {
    title: "INRUA",
    description:
      "Instituto Nacional de Direitos Humanos da População de Rua. Transparência pública em conformidade com Lei 13.019/2014",
  },
}

export const viewport = {
  themeColor: "#003d82",
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo-20inrua-20transparente.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

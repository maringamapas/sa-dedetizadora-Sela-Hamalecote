import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { dadosCliente } from "@/data/cliente"
import { ClienteProvider } from "@/components/cliente-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://sa-dedetizadora-sela-hamalecote.vercel.app"
const ogImageUrl = `${siteUrl}/og-image.jpg`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: dadosCliente.seo.siteTitle,
  description: dadosCliente.seo.description,
  generator: "v0.app",
  openGraph: {
    title: "Selá Hamalecote Dedetizadora | Controle de Pragas São Paulo",
    description:
      "Dedetização, Desratização, Descupinização e Controle de Pragas Urbanas em São Paulo. Ligue agora: (11) 95827-0892 - (11) 99507-6217",
    type: "website",
    url: siteUrl,
    siteName: "Selá Hamalecote Dedetizadora",
    locale: "pt_BR",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Selá Hamalecote Dedetizadora - Serviços Profissionais de Dedetização em São Paulo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selá Hamalecote Dedetizadora | Controle de Pragas São Paulo",
    description:
      "Dedetização, Desratização, Descupinização e Controle de Pragas Urbanas em São Paulo. Ligue: (11) 95827-0892 - (11) 99507-6217",
    images: [
      {
        url: ogImageUrl,
        alt: "Selá Hamalecote Dedetizadora - Serviços Profissionais de Dedetização em São Paulo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <ClienteProvider>
          {children}
        </ClienteProvider>
        <Analytics />
      </body>
    </html>
  )
}

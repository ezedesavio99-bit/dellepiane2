import type React from "react"
import type { Metadata } from "next"
import { Inter, Cormorant_Garamond, Pinyon_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { CartDrawer } from "@/components/cart/cart-drawer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
})

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon-script",
})

export const metadata: Metadata = {
  title: "DELLEPIANE | Cuadros de Diseño",
  description:
    "Obras de arte contemporáneas con esencia familiar. Piezas únicas hechas a mano que mezclan historia, diseño y naturaleza.",
  keywords: ["arte", "cuadros", "diseño", "arte contemporáneo", "obras artesanales", "decoración"],
  authors: [{ name: "DELLEPIANE" }],
  icons: {
    icon: "/favicon-d.jpg",
    apple: "/favicon-d.jpg",
  },
  openGraph: {
    title: "DELLEPIANE | Cuadros de Diseño",
    description: "Obras de arte contemporáneas con esencia familiar. Piezas únicas hechas a mano.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-[#F3F0E8]">
      <body className={`${inter.variable} ${cormorant.variable} ${pinyonScript.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}

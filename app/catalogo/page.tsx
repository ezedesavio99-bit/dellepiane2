import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CatalogContent } from "@/components/catalog/catalog-content"
import { getArtworks, getCollections } from "@/lib/supabase-artworks"

export const metadata = {
  title: "Catálogo | DELLEPIANE - Cuadros de Diseño",
  description:
    "Explora nuestra colección de obras de arte contemporáneas creadas a mano. Cuadros únicos que mezclan historia, diseño y naturaleza.",
}

export const revalidate = 0

export default async function CatalogoPage() {
  const [artworks, collections] = await Promise.all([getArtworks(), getCollections()])

  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
            Explora
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D3D3D] text-balance">
            Colecciones de Arte DELLEPIANE
          </h1>
          <p className="mt-6 text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Obras contemporáneas creadas a mano con técnicas que combinan diseño, raíces familiares y elementos
            naturales.
          </p>
        </div>
      </section>

      <Suspense fallback={null}>
        <CatalogContent artworks={artworks} collections={collections} />
      </Suspense>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

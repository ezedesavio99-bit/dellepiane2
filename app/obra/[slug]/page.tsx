import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ArtworkDetail } from "@/components/artwork/artwork-detail"
import { getArtworkBySlug } from "@/lib/supabase-artworks"

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artwork = await getArtworkBySlug(slug)

  if (!artwork) {
    return {
      title: "Obra no encontrada | DELLEPIANE",
    }
  }

  return {
    title: `${artwork.title} | DELLEPIANE - Cuadros de Diseño`,
    description: artwork.short_description,
  }
}

export default async function ObraPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const artwork = await getArtworkBySlug(slug)

  if (!artwork) {
    notFound()
  }

  const images = artwork.gallery_images?.length
    ? artwork.gallery_images
    : artwork.main_image_url
    ? [artwork.main_image_url]
    : []

  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />
      <ArtworkDetail artwork={artwork} images={images} />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

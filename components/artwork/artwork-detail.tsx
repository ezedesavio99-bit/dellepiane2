"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { SupabaseArtwork } from "@/lib/supabase-artworks"

interface ArtworkDetailProps {
  artwork: SupabaseArtwork
  images: string[]
}

export function ArtworkDetail({ artwork, images }: ArtworkDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const collection = artwork.collections || null

  // Swipe detection
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1)
    }
    if (isRightSwipe && selectedImage > 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLightboxOpen && e.key === "Escape") {
        setIsLightboxOpen(false)
      }
      if (e.key === "ArrowLeft" && selectedImage > 0) {
        setSelectedImage(selectedImage - 1)
      }
      if (e.key === "ArrowRight" && selectedImage < images.length - 1) {
        setSelectedImage(selectedImage + 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, images.length, isLightboxOpen])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isLightboxOpen])

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa la obra "${artwork.title}" (${artwork.dimensions}, ${artwork.technique}). ¿Podrías darme más información sobre disponibilidad y precio?`,
  )

  return (
    <>
      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors z-10"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={artwork.title}
                  className="max-w-full max-h-full object-contain"
                />

            {/* Navigation arrows */}
            {images.length > 1 && (
              <>
                {selectedImage > 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(selectedImage - 1)
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Imagen anterior"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                {selectedImage < images.length - 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(selectedImage + 1)
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Siguiente imagen"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                {selectedImage + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}

      <section className="pt-28 pb-24 lg:pt-36 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-[#6B6B6B]">
            <li>
              <Link href="/" className="hover:text-[#5F6A54] transition-colors">
                Inicio
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/catalogo" className="hover:text-[#5F6A54] transition-colors">
                Catálogo
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#3D3D3D]">{artwork.title}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div
              className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-lg touch-pan-y cursor-zoom-in"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onClick={() => images.length > 0 && setIsLightboxOpen(true)}
            >
              {images.length > 0 ? (
                <img
                  src={images[selectedImage]}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-[#F3F0E8]">
                  <div className="text-center">
                    <svg className="w-16 h-16 text-[#D4D1C7] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-[#8E927B] text-sm">Imágenes próximamente</p>
                  </div>
                </div>
              )}
              {/* Availability Badge */}
              <span
                className={`absolute top-4 right-4 px-4 py-2 text-sm font-medium rounded-full ${
                  artwork.availability === "original"
                    ? "bg-[#5F6A54] text-[#F3F0E8]"
                    : artwork.availability === "por-encargo"
                      ? "bg-[#B79A63] text-[#3D3D3D]"
                      : "bg-[#A97456] text-[#F3F0E8]"
                }`}
              >
                {artwork.availability === "original"
                  ? "Original disponible"
                  : artwork.availability === "por-encargo"
                    ? "Disponible por encargo"
                    : "Vendida"}
              </span>

              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  {selectedImage > 0 && (
                    <button
                      onClick={() => setSelectedImage(selectedImage - 1)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                      aria-label="Imagen anterior"
                    >
                      <svg className="w-6 h-6 text-[#3D3D3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  )}
                  {selectedImage < images.length - 1 && (
                    <button
                      onClick={() => setSelectedImage(selectedImage + 1)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                      aria-label="Siguiente imagen"
                    >
                      <svg className="w-6 h-6 text-[#3D3D3D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </>
              )}

              {/* Image Counter */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-sm">
                  {selectedImage + 1} / {images.length}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-[#5F6A54]" : "border-transparent hover:border-[#8E927B]"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${artwork.title} - Vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Artwork Info */}
          <div>
            {/* Collection */}
            {collection && (
              <Link
                href={`/catalogo?coleccion=${collection.slug}`}
                className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4 hover:text-[#5F6A54] transition-colors"
              >
                {collection.name}
              </Link>
            )}

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D3D3D]">{artwork.title}</h1>

            {/* Details */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-[#6B6B6B] min-w-[100px]">Técnica:</span>
                <span className="text-[#3D3D3D] font-medium">{artwork.technique}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#6B6B6B] min-w-[100px]">Medidas:</span>
                <span className="text-[#3D3D3D] font-medium">{artwork.dimensions}</span>
              </div>
              {artwork.frame && (
                <div className="flex items-center gap-3">
                  <span className="text-[#6B6B6B] min-w-[100px]">Cintillo:</span>
                  <span className="text-[#3D3D3D] font-medium">{artwork.frame}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="text-[#6B6B6B] min-w-[100px]">Precio:</span>
                <span className="text-[#3D3D3D] font-medium">
                  {artwork.price ? `$${artwork.price.toLocaleString()}` : "Consultar precio"}
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 pt-8 border-t border-[#D4D1C7]">
              <p className="text-[#6B6B6B] leading-relaxed">{artwork.short_description}</p>
            </div>

            {/* WhatsApp CTA */}
            <div className="mt-10">
              <a
                href={`https://wa.me/5491158060140?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#20BA5A] transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>

            {/* Additional Info */}
            <div className="mt-10 p-6 bg-white rounded-2xl space-y-4">
              <h3 className="font-serif text-xl font-medium text-[#3D3D3D]">Información adicional</h3>
              <div className="grid gap-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#5F6A54] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Tiempo de producción</p>
                    <p className="text-sm text-[#6B6B6B]">4-5 semanas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#5F6A54] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Personalización</p>
                    <p className="text-sm text-[#6B6B6B]">
                      Disponible en otras medidas y colores
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#5F6A54] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Envíos</p>
                    <p className="text-sm text-[#6B6B6B]">A todo el país con embalaje especial para obras de arte</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-[#5F6A54] flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Cuidados</p>
                    <p className="text-sm text-[#6B6B6B]">Incluye instrucciones de mantenimiento y colgado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

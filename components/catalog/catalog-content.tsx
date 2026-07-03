"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ShoppingBag, Eye } from "lucide-react"
import { useCart, formatPrice } from "@/lib/cart-context"
import type { SupabaseArtwork, SupabaseCollection } from "@/lib/supabase-artworks"

const techniques = ["Todas las técnicas", "Cerámica", "Bordado", "Técnica mixta"]

const availabilities = [
  { value: "all", label: "Todos" },
  { value: "original", label: "Originales" },
  { value: "por-encargo", label: "Por encargo" },
]

interface CatalogContentProps {
  artworks: SupabaseArtwork[]
  collections: SupabaseCollection[]
}

export function CatalogContent({ artworks, collections }: CatalogContentProps) {
  const searchParams = useSearchParams()
  const initialCollection = searchParams.get("coleccion") || "all"

  const [selectedCollection, setSelectedCollection] = useState<string>(initialCollection)
  const [selectedTechnique, setSelectedTechnique] = useState<string>("Todas las técnicas")
  const [selectedAvailability, setSelectedAvailability] = useState<string>("all")

  useEffect(() => {
    const coleccion = searchParams.get("coleccion")
    if (coleccion) {
      setSelectedCollection(coleccion)
    }
  }, [searchParams])

  const filteredArtworks = useMemo(() => {
    return artworks.filter((artwork) => {
      if (selectedCollection !== "all" && artwork.collections?.slug !== selectedCollection) {
        return false
      }
      if (
        selectedTechnique !== "Todas las técnicas" &&
        !artwork.technique?.toLowerCase().includes(selectedTechnique.toLowerCase())
      ) {
        return false
      }
      if (selectedAvailability !== "all" && artwork.availability !== selectedAvailability) {
        return false
      }
      return true
    })
  }, [artworks, selectedCollection, selectedTechnique, selectedAvailability])

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filters */}
        <div className="mb-12 p-6 bg-white rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Collection Filter */}
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">Colección</label>
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54]"
              >
                <option value="all">Todas las colecciones</option>
                {collections.map((collection) => (
                  <option key={collection.id} value={collection.slug}>
                    {collection.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Technique Filter */}
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">Técnica</label>
              <select
                value={selectedTechnique}
                onChange={(e) => setSelectedTechnique(e.target.value)}
                className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54]"
              >
                {techniques.map((technique) => (
                  <option key={technique} value={technique}>
                    {technique}
                  </option>
                ))}
              </select>
            </div>

            {/* Availability Filter */}
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">Disponibilidad</label>
              <select
                value={selectedAvailability}
                onChange={(e) => setSelectedAvailability(e.target.value)}
                className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54]"
              >
                {availabilities.map((availability) => (
                  <option key={availability.value} value={availability.value}>
                    {availability.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mt-4 pt-4 border-t border-[#E8E5DC]">
            <p className="text-sm text-[#6B6B6B]">
              {filteredArtworks.length} {filteredArtworks.length === 1 ? "obra encontrada" : "obras encontradas"}
            </p>
          </div>
        </div>

        {/* Artworks Grid */}
        {filteredArtworks.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
            {selectedCollection === "conceptual" && (
              <div className="mt-12 text-center">
                <p className="text-lg text-[#8E927B] italic font-brush text-2xl">
                  Aquí hay 2 obras más en proceso...
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-[#6B6B6B] text-lg">No se encontraron obras con los filtros seleccionados.</p>
            <button
              onClick={() => {
                setSelectedCollection("all")
                setSelectedTechnique("Todas las técnicas")
                setSelectedAvailability("all")
              }}
              className="mt-4 text-[#5F6A54] font-medium hover:underline"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ArtworkCard({ artwork }: { artwork: SupabaseArtwork }) {
  const { addToCart } = useCart()
  const image = artwork.gallery_images?.[0] || artwork.main_image_url || "/placeholder.svg"

  // Adapt to cart's Artwork type
  const cartArtwork = {
    id: artwork.id,
    name: artwork.title,
    slug: artwork.slug,
    collection: artwork.collections?.slug || "",
    technique: artwork.technique || "",
    dimensions: artwork.dimensions || "",
    frame: artwork.frame || "",
    availability: artwork.availability as "original" | "por-encargo" | "vendida",
    price: artwork.price || 0,
    description: artwork.short_description || "",
    images: artwork.gallery_images || [],
    featured: artwork.featured,
    productionTime: "4-5 semanas",
    customizable: true,
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link href={`/obra/${artwork.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span
            className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
              artwork.availability === "original" ? "bg-[#5F6A54] text-[#F3F0E8]" : "bg-[#B79A63]/90 text-[#3D3D3D]"
            }`}
          >
            {artwork.availability === "original" ? "Disponible" : "Por encargo"}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/obra/${artwork.slug}`}>
          <h3 className="font-serif text-lg font-medium text-[#3D3D3D] group-hover:text-[#5F6A54] transition-colors line-clamp-1">
            {artwork.title}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-[#6B6B6B]">{artwork.dimensions}</p>

        <div className="mt-3">
          {artwork.price ? (
            <p className="text-lg font-serif font-medium text-[#5F6A54]">
              {formatPrice(artwork.price)}
            </p>
          ) : (
            <p className="text-sm text-[#8E927B] italic">Consultar precio</p>
          )}
          {artwork.availability === "por-encargo" && (
            <p className="text-xs text-[#8E927B] mt-0.5">Valor estimado</p>
          )}
        </div>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() => addToCart(cartArtwork)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#5F6A54] text-[#F3F0E8] text-sm font-medium rounded-full hover:bg-[#4A5343] transition-colors active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4" />
            Agregar
          </button>
          <Link
            href={`/obra/${artwork.slug}`}
            className="flex items-center justify-center w-10 h-10 border border-[#D4D1C7] text-[#5F6A54] rounded-full hover:bg-[#F3F0E8] transition-colors"
            aria-label="Ver obra"
          >
            <Eye className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

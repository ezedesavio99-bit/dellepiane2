import Link from "next/link"
import type { SupabaseArtwork } from "@/lib/supabase-artworks"

interface FeaturedWorksSectionProps {
  artworks: SupabaseArtwork[]
}

export function FeaturedWorksSection({ artworks }: FeaturedWorksSectionProps) {
  // Show featured artworks first, then fill up to 4 with the first visible ones
  const featured = artworks.filter((w) => w.featured).slice(0, 4)
  const featuredWorks = featured.length >= 4
    ? featured
    : [
        ...featured,
        ...artworks.filter((w) => !w.featured).slice(0, 4 - featured.length),
      ]

  if (featuredWorks.length === 0) return null

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
              Destacadas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D3D3D] text-balance">
              Obras Destacadas
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-[#5F6A54] font-medium hover:gap-4 transition-all duration-300"
          >
            Ver todas las obras
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work) => {
            const image = work.gallery_images?.[0] || work.main_image_url || null
            return (
              <Link key={work.id} href={`/obra/${work.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  {image ? (
                    <img
                      src={image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#E8E5DC]" />
                  )}
                  {work.availability === "original" && (
                    <span className="absolute top-4 right-4 px-3 py-1 bg-[#5F6A54] text-[#F3F0E8] text-xs font-medium rounded-full">
                      Original disponible
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-medium text-[#3D3D3D] group-hover:text-[#5F6A54] transition-colors">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-[#6B6B6B]">
                    {work.technique} · {work.dimensions}
                  </p>
                  <span className="inline-flex items-center gap-2 mt-4 text-[#5F6A54] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver obra
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

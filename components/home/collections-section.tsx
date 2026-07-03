import Link from "next/link"
import { collections } from "@/lib/artworks"

const collectionImages = [
  "/donde-empieza-lo-nuestro-1.jpg",
  "/coleccion-agua.jpg",
  "/coleccion-conceptual.jpg",
]

export function CollectionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F3F0E8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
            Explora
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D3D3D] text-balance">
            Nuestras Colecciones
          </h2>
          <p className="mt-4 text-lg text-[#6B6B6B]">
            Tres líneas artísticas que expresan diferentes emociones y estéticas
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {collections.map((collection, index) => (
            <Link
              key={collection.id}
              href={`/catalogo?coleccion=${collection.id}`}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <img
                src={collectionImages[index] || "/placeholder.svg"}
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/90 via-[#3D3D3D]/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-brush text-2xl md:text-3xl text-white mb-2">{collection.name}</h3>
                <p className="text-sm text-white/80 line-clamp-3">{collection.description}</p>
                <div className="mt-4 flex items-center gap-2 text-[#B79A63] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Ver colección
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F3F0E8] via-[#F3F0E8] to-[#E8E5DC]" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#8E927B]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#A97456]/10 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-6 animate-fade-up">
              Cuadros de Diseño
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-tight text-[#3D3D3D] text-balance animate-fade-up animation-delay-100">
              Obras de arte contemporáneas con <span className="text-[#5F6A54]">esencia familiar</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up animation-delay-200">
              Piezas únicas hechas a mano que mezclan historia, diseño y naturaleza. Cada cuadro cuenta una historia.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up animation-delay-300">
              <Link
                href="/catalogo"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#5F6A54] text-[#F3F0E8] font-medium rounded-full hover:bg-[#4A5343] transition-all duration-300 hover:shadow-lg"
              >
                Ver catálogo
              </Link>
              <a
                href="https://wa.me/5491158060140?text=Hola!%20Me%20interesa%20conocer%20más%20sobre%20las%20obras%20de%20DELLEPIANE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#5F6A54] text-[#5F6A54] font-medium rounded-full hover:bg-[#5F6A54] hover:text-[#F3F0E8] transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-19-08-13-2kmg2oGW2mtFlE79DXQE1HmNXKcF9F.jpg"
                alt="Obra destacada de DELLEPIANE - Cuadro artesanal con hojas de cerámica colgado en pared"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#B79A63] rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#8E927B] rounded-full -z-10" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <div className="w-6 h-10 border-2 border-[#8E927B] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[#8E927B] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

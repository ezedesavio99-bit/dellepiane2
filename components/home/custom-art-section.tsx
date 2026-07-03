import Link from "next/link"

export function CustomArtSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#5F6A54]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#B79A63] mb-4">
              Servicio personalizado
            </span>
            <h2 className="font-brush text-4xl md:text-5xl lg:text-6xl text-[#F3F0E8] leading-tight text-balance">
              Cuadros personalizados para espacios con alma
            </h2>
            <p className="mt-6 text-lg text-[#F3F0E8]/80 leading-relaxed">
              Creamos piezas a medida según tu espacio, colores y estilo. Tu historia convertida en arte, con la técnica
              y dimensiones perfectas para tu ambiente.
            </p>

            {/* Process steps */}
            <div className="mt-10 space-y-4">
              {[
                "Enviá fotos de tu espacio y medidas deseadas",
                "Recibí propuesta de paleta y composición",
                "Seguí la creación de tu obra paso a paso",
                "Recibila lista para colgar",
              ].map((step, index) => (
                <div key={index} className="flex items-center gap-4 text-left">
                  <div className="w-8 h-8 rounded-full bg-[#B79A63] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#3D3D3D] text-sm font-semibold">{index + 1}</span>
                  </div>
                  <p className="text-[#F3F0E8]/90">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link
                href="/arte-personalizado"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#F3F0E8] text-[#5F6A54] font-medium rounded-full hover:bg-[#B79A63] hover:text-[#3D3D3D] transition-all duration-300"
              >
                Pedir obra personalizada
              </Link>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-14-59-05%20%281%29-XS7NAq8M8OvTAMijLMEDevE7YhyADO.jpg"
                    alt="Proceso creativo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="/arte-ceramica.jpg"
                    alt="Arte en cerámica Dellepiane"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-10-15-11-39-10%20%281%29-2ZkNvo1q4Pze7jvGsnJTiTOjIGpEUD.jpg"
                    alt="Obra en espacio"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F5EBB269-EB74-40A0-8913-8634043F30E0-ssJsDw4XFcOVrzzAsj6VmIp8Li5LUJ.jpg"
                    alt="Técnica artesanal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

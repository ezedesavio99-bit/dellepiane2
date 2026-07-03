import Link from "next/link"

export function AboutSection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-23-11-06-07%20%281%29-mzzDPSaCpHcMVXzvsje5a7kYRKy4Wm.jpg"
                alt="Proceso artesanal de creación"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-[#F3F0E8] p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
              <p className="font-serif text-2xl text-[#5F6A54] mb-2">+200</p>
              <p className="text-sm text-[#6B6B6B]">Obras creadas con amor y dedicación</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
              Sobre DELLEPIANE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D3D3D] leading-tight text-balance">
              El arte nace de las pequeñas historias
            </h2>
            <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
              En DELLEPIANE creemos que el arte nace de las pequeñas historias. Cada pieza está creada a mano, con
              técnicas que combinan diseño, raíces familiares y elementos naturales.
            </p>
            <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
              Nuestras obras buscan conectar espacios con emociones, transformando paredes en ventanas hacia momentos y
              memorias especiales.
            </p>

            {/* Features */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5F6A54]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5F6A54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#3D3D3D]">Artesanal</h3>
                  <p className="text-sm text-[#6B6B6B]">100% hecho a mano</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5F6A54]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5F6A54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#3D3D3D]">Único</h3>
                  <p className="text-sm text-[#6B6B6B]">Piezas irrepetibles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5F6A54]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5F6A54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#3D3D3D]">Con historia</h3>
                  <p className="text-sm text-[#6B6B6B]">Texturas con alma</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#5F6A54]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#5F6A54]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-[#3D3D3D]">Para tu espacio</h3>
                  <p className="text-sm text-[#6B6B6B]">Colores que armonizan</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/quienes-somos"
                className="inline-flex items-center gap-2 text-[#5F6A54] font-medium hover:gap-4 transition-all duration-300"
              >
                Conocer más
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

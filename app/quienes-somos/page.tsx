import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import Link from "next/link"

export const metadata = {
  title: "Quiénes Somos | DELLEPIANE - Cuadros de Diseño",
  description:
    "Conocé la historia detrás de DELLEPIANE. Arte contemporáneo con esencia familiar, creado a mano con técnicas que combinan diseño y naturaleza.",
}

export default function QuienesSomosPage() {
  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
                Nuestra Historia
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D3D3D] leading-tight text-balance">
                Arte que nace del corazón
              </h1>
              <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
                DELLEPIANE nace de la conexión entre arte, familia y naturaleza. Cada pieza está creada a mano, cuidando
                los detalles y transmitiendo emociones reales.
              </p>
              <p className="mt-4 text-lg text-[#6B6B6B] leading-relaxed">
                Creemos que el arte debe contar historias, transformar espacios y conectar personas con sus memorias más
                queridas.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-14-54-34-P3BPFjyd5G3k33SsxHzVbI6BpDmLdN.jpg"
                  alt="Artista en el estudio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#8E927B] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
              Raíces Familiares
            </span>
            <h2 className="font-brush text-4xl md:text-5xl text-[#5F6A54] mb-8">
              De generación en generación
            </h2>
            <p className="text-lg text-[#6B6B6B] leading-relaxed">
              Somos un linaje de mujeres que tejen este proyecto.
            </p>
            <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
              En Dellepiane celebramos la esencia de lo natural y lo familiar, creando obras que conectan con la armonía del entorno y la historia personal.
            </p>
            <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
              Cada obra que creamos lleva un pedacito de esa historia: el amor por los materiales nobles, el respeto por los procesos artesanales y la búsqueda constante de transmitir emociones a través del arte.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32 bg-[#F3F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
              Filosofía
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#3D3D3D] text-balance">
              Lo que nos define
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Artesanal",
                description:
                  "Cada obra es 100% hecha a mano, sin procesos industriales. Creemos en el valor del tiempo dedicado y el amor puesto en cada trazo.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                ),
              },
              {
                title: "Único",
                description:
                  "Ninguna obra se repite. Aunque trabajemos una serie, cada pieza tiene variaciones que la hacen irrepetible y especial.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                ),
              },
              {
                title: "Texturas con historia",
                description:
                  "Incorporamos materiales naturales, técnicas mixtas y capas de significado que hacen que cada obra tenga profundidad y alma.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                ),
              },
              {
                title: "Armonía espacial",
                description:
                  "Diseñamos cada obra pensando en el espacio que habitará. Los colores, tamaños y composiciones buscan equilibrio y calidez.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#5F6A54]/10 flex items-center justify-center text-[#5F6A54] mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#3D3D3D] mb-3">{item.title}</h3>
                <p className="text-[#6B6B6B] leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#5F6A54]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] text-balance">
            ¿Querés conocer nuestras obras?
          </h2>
          <p className="mt-6 text-lg text-[#F3F0E8]/80 max-w-2xl mx-auto">
            Explorá el catálogo completo o escribinos para contarnos qué estás buscando.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F3F0E8] text-[#5F6A54] font-medium rounded-full hover:bg-[#B79A63] hover:text-[#3D3D3D] transition-all duration-300"
            >
              Ver catálogo
            </Link>
            <a
              href="https://wa.me/5491158060140?text=Hola!%20Quiero%20conocer%20más%20sobre%20DELLEPIANE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#F3F0E8] text-[#F3F0E8] font-medium rounded-full hover:bg-[#F3F0E8] hover:text-[#5F6A54] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contactar
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

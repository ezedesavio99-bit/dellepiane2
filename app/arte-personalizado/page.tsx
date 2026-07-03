import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export const metadata = {
  title: "Arte Personalizado | DELLEPIANE - Cuadros de Diseño",
  description: "Creamos obras de arte a medida según tu espacio, colores y estilo. Tu historia convertida en arte.",
}

export default function ArtePersonalizadoPage() {
  const whatsappMessage = encodeURIComponent(
    "Hola! Me interesa pedir una obra personalizada. Me gustaría contarte sobre mi espacio y estilo.",
  )

  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
                Servicio exclusivo
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#3D3D3D] leading-tight text-balance">
                Tu historia convertida en arte
              </h1>
              <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed">
                Cada espacio tiene su propia energía y merece una obra que la potencie. Creamos piezas únicas a medida, diseñadas especialmente para tu hogar o espacio.
              </p>
              <div className="mt-10">
                <a
                  href={`https://wa.me/5491158060140?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#5F6A54] text-[#F3F0E8] font-medium rounded-full hover:bg-[#4A5343] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Quiero mi obra personalizada
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/armonia%20verde%20y%20blanco%202-RDCDhpo0oeAmWtUK9iCvLwUz0qHv0A.jpg"
                  alt="Proceso de creación personalizado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#B79A63] rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
              Proceso
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D3D3D] text-balance">
              ¿Cómo funciona?
            </h2>
            <p className="mt-4 text-lg text-[#6B6B6B]">Un proceso simple y cercano para crear tu obra ideal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Contanos tu idea",
                description:
                  "Envianos fotos de tu espacio, medidas deseadas y contanos qué estilo, colores y sensaciones buscás.",
              },
              {
                step: "02",
                title: "Propuesta creativa",
                description:
                  "Te enviamos bocetos, paleta de colores y opciones de composición para que elijas la que más te guste.",
              },
              {
                step: "03",
                title: "Creación artesanal",
                description:
                  "Comenzamos la creación de tu obra. Te compartimos avances del proceso para que veas cómo cobra vida.",
              },
              {
                step: "04",
                title: "Entrega especial",
                description:
                  "Tu obra llega lista para colgar, con embalaje especial, certificado de autenticidad e instrucciones de cuidado.",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#5F6A54] rounded-full flex items-center justify-center">
                  <span className="text-[#F3F0E8] font-serif text-xl font-semibold">{item.step}</span>
                </div>
                <div className="pt-16 p-6 bg-[#F3F0E8] rounded-2xl h-full">
                  <h3 className="font-serif text-xl font-medium text-[#3D3D3D] mb-3">{item.title}</h3>
                  <p className="text-[#6B6B6B] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we need */}
      <section className="py-24 lg:py-32 bg-[#F3F0E8]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-14-49-41%20%283%29-6aEpEAePkcMnlzRGLtBPNR07EcV2Qp.jpg"
                    alt="Ejemplo de obra personalizada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-14-49-41%20%282%29-clhKu7RHkqMUBqV7eovbHUfXGteX2K.jpg"
                    alt="Detalle de textura"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="pt-8 space-y-4">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-15-03-44-v3AjVdcC1E3l1izpFHVWRPU0yexpAM.jpg"
                    alt="Obra abstracta personalizada"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-19-07-47-Pw1D19UploCh4YPdicsbBcq5bH0MD5.jpg"
                    alt="Obra con texturas naturales"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
                Para comenzar
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#3D3D3D] leading-tight text-balance">
                ¿Qué necesitamos de vos?
              </h2>
              <div className="mt-8 space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                    title: "Fotos del espacio",
                    description: "Donde irá la obra, para entender la luz, los colores y el estilo de tu ambiente.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                    ),
                    title: "Medidas deseadas",
                    description: "El tamaño ideal para tu pared. Te asesoramos si no estás seguro/a.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        />
                      </svg>
                    ),
                    title: "Paleta de colores",
                    description: "Tonos que te gusten o que combinen con tu decoración. Podemos sugerirte opciones.",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    ),
                    title: "Inspiración",
                    description:
                      "Imágenes, obras o sensaciones que te gustaría transmitir. Todo suma para crear algo único.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#5F6A54]/10 flex items-center justify-center flex-shrink-0 text-[#5F6A54]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-[#3D3D3D]">{item.title}</h3>
                      <p className="text-[#6B6B6B] text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#5F6A54]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#F3F0E8] text-balance">
            ¿Listo para crear tu obra única?
          </h2>
          <p className="mt-6 text-lg text-[#F3F0E8]/80 max-w-2xl mx-auto">
            {"Escribinos por WhatsApp y comenzamos a diseñar juntos la pieza perfecta para tu espacio.\n\n\n\n"}
          </p>
          <div className="mt-10">
            <a
              href={`https://wa.me/5491158060140?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#F3F0E8] text-[#5F6A54] font-medium rounded-full hover:bg-[#B79A63] hover:text-[#3D3D3D] transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Quiero mi obra personalizada
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { testimonials } from "@/lib/artworks"
import Link from "next/link"

export const metadata = {
  title: "Testimonios | DELLEPIANE - Cuadros de Diseño",
  description:
    "Conocé las experiencias de nuestros clientes con sus obras de DELLEPIANE. Testimonios reales de arte que transforma espacios.",
}

const additionalTestimonials = [
  {
    id: "4",
    name: "Ana Martínez",
    location: "Mendoza",
    text: "El proceso de crear mi cuadro personalizado fue una experiencia increíble. Me consultaron en cada paso y el resultado fue exactamente lo que soñaba para mi sala.",
    artwork: "Obra personalizada",
  },
  {
    id: "5",
    name: "Roberto Silva",
    location: "Mar del Plata",
    text: "Compré dos obras para mi consultorio y mis pacientes siempre preguntan por ellas. Transmiten una calma muy especial.",
    artwork: "Horizonte Sereno",
  },
  {
    id: "6",
    name: "Valentina Torres",
    location: "Santa Fe",
    text: "Regalo perfecto para el cumpleaños de mi suegra. La atención fue impecable y la obra llegó muy bien protegida.",
    artwork: "Alba Dorada",
  },
]

export default function TestimoniosPage() {
  const allTestimonials = [...testimonials, ...additionalTestimonials]

  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
            Experiencias
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#3D3D3D] text-balance">
            Lo que dicen nuestros clientes
          </h1>
          <p className="mt-6 text-lg text-[#6B6B6B]">
            Historias reales de personas que transformaron sus espacios con arte DELLEPIANE
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Quote icon */}
                <svg className="w-12 h-12 text-[#8E927B]/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-[#6B6B6B] leading-relaxed mb-8 text-lg">"{testimonial.text}"</p>

                <div className="border-t border-[#E8E5DC] pt-6">
                  <p className="font-serif text-lg font-medium text-[#3D3D3D]">{testimonial.name}</p>
                  <p className="text-sm text-[#8E927B] mt-1">{testimonial.location}</p>
                  <p className="text-sm text-[#A97456] mt-2">Obra: {testimonial.artwork}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-[#E8E5DC]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-[#3D3D3D] text-balance">
            ¿Querés ser el próximo en transformar tu espacio?
          </h2>
          <p className="mt-6 text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Explorá nuestro catálogo o contactanos para crear tu obra ideal
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#5F6A54] text-[#F3F0E8] font-medium rounded-full hover:bg-[#4A5343] transition-all duration-300"
            >
              Ver catálogo
            </Link>
            <a
              href="https://wa.me/5491158060140?text=Hola!%20Vi%20los%20testimonios%20y%20quiero%20consultar%20por%20una%20obra"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#5F6A54] text-[#5F6A54] font-medium rounded-full hover:bg-[#5F6A54] hover:text-[#F3F0E8] transition-all duration-300"
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

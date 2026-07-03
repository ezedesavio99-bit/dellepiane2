"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
            Contacto
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#3D3D3D] text-balance">
            Hablemos de tu proyecto
          </h1>
          <p className="mt-6 text-lg text-[#6B6B6B]">
            Estamos acá para responder tus consultas y ayudarte a encontrar la obra perfecta para tu espacio
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-[#3D3D3D] mb-8">Formas de contacto</h2>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/5491158060140?text=Hola!%20Quiero%20consultar%20sobre%20DELLEPIANE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">WhatsApp</p>
                    <p className="text-[#6B6B6B]">+54 9 11 5806-0140</p>
                    <p className="text-sm text-[#8E927B] mt-1">Respuesta inmediata</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:Dellepiane.obrasdearte@gmail.com"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#5F6A54]/10 flex items-center justify-center text-[#5F6A54] group-hover:bg-[#5F6A54] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Email</p>
                    <p className="text-[#6B6B6B]">Dellepiane.obrasdearte@gmail.com</p>
                    <p className="text-sm text-[#8E927B] mt-1">Respuesta en 24hs</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/dellepiane.arte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="w-14 h-14 rounded-full bg-[#E1306C]/10 flex items-center justify-center text-[#E1306C] group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Instagram</p>
                    <p className="text-[#6B6B6B]">@dellepiane.arte</p>
                    <p className="text-sm text-[#8E927B] mt-1">Seguinos para ver novedades</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-[#5F6A54]/10 flex items-center justify-center text-[#5F6A54]">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[#3D3D3D]">Ubicación</p>
                    <p className="text-[#6B6B6B]">Ciudad Jardin ,Lomas del Palomar ,Buenos Aires, Argentina</p>
                    <p className="text-sm text-[#8E927B] mt-1">Envíos a todo el país</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-medium text-[#3D3D3D] mb-8">Envianos un mensaje</h2>

              {submitted ? (
                <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#5F6A54]/10 flex items-center justify-center text-[#5F6A54] mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-xl font-medium text-[#3D3D3D] mb-3">¡Mensaje enviado!</h3>
                  <p className="text-[#6B6B6B] mb-6">
                    Te responderemos a la brevedad. Mientras tanto, podés seguirnos en Instagram.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-[#5F6A54] font-medium hover:underline">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54] focus:border-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54] focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Teléfono (opcional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54] focus:border-transparent"
                      placeholder="+54 9 11 0000-0000"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#3D3D3D] mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F3F0E8] border border-[#D4D1C7] rounded-lg text-[#3D3D3D] focus:outline-none focus:ring-2 focus:ring-[#5F6A54] focus:border-transparent resize-none"
                      placeholder="Contanos en qué podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#5F6A54] text-[#F3F0E8] font-medium rounded-full hover:bg-[#4A5343] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed Placeholder */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl font-medium text-[#3D3D3D]">Seguinos en Instagram</h2>
            <a
              href="https://instagram.com/dellepiane.arte"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-2 text-[#8E927B] hover:text-[#5F6A54] transition-colors"
            >
              @dellepiane.arte
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2026-02-18-14-59-05%20%281%29-XS7NAq8M8OvTAMijLMEDevE7YhyADO.jpg",
                alt: "Proceso creativo Dellepiane",
              },
              {
                src: "/arte-ceramica.jpg",
                alt: "Arte en cerámica Dellepiane",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-10-15-11-39-10%20%281%29-2ZkNvo1q4Pze7jvGsnJTiTOjIGpEUD.jpg",
                alt: "Obra en espacio",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F5EBB269-EB74-40A0-8913-8634043F30E0-ssJsDw4XFcOVrzzAsj6VmIp8Li5LUJ.jpg",
                alt: "Técnica artesanal Dellepiane",
              },
            ].map((image, index) => (
              <a
                key={index}
                href="https://instagram.com/dellepiane.arte"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}

import { testimonials } from "@/lib/artworks"

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#F3F0E8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-[#8E927B] mb-4">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-[#3D3D3D] text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote icon */}
              <svg className="w-10 h-10 text-[#8E927B]/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-[#6B6B6B] leading-relaxed mb-6">{testimonial.text}</p>
              <div className="border-t border-[#E8E5DC] pt-6">
                <p className="font-medium text-[#3D3D3D]">{testimonial.name}</p>
                <p className="text-sm text-[#8E927B]">{testimonial.location}</p>
                <p className="text-sm text-[#A97456] mt-2">Obra: {testimonial.artwork}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

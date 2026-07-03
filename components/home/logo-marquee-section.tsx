export function LogoMarqueeSection() {
  return (
    <section className="py-6 lg:py-8 bg-white overflow-hidden border-y border-[#E8E5DC] space-y-4">
      {/* Row 1: full brand logo — moves right to left (normal) */}
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src="/dellepiane-logo-full-brown.jpg"
              alt="Dellepiane Obras de Arte Contemporáneas"
              className="h-24 md:h-28 lg:h-32 w-auto mx-16 md:mx-20 lg:mx-24 select-none shrink-0 opacity-15"
              draggable={false}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={`dup-${i}`}
              src="/dellepiane-logo-full-brown.jpg"
              alt="Dellepiane Obras de Arte Contemporáneas"
              className="h-24 md:h-28 lg:h-32 w-auto mx-16 md:mx-20 lg:mx-24 select-none shrink-0 opacity-15"
              draggable={false}
            />
          ))}
        </div>
      </div>

      {/* Row 2: sage logo — moves left to right (reverse) */}
      <div className="relative">
        <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={i}
              src="/dellepiane-logo-full.png"
              alt="Dellepiane"
              className="h-24 md:h-28 lg:h-32 w-auto mx-16 md:mx-20 lg:mx-24 select-none shrink-0 opacity-15"
              draggable={false}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <img
              key={`dup-${i}`}
              src="/dellepiane-logo-full.png"
              alt="Dellepiane"
              className="h-24 md:h-28 lg:h-32 w-auto mx-16 md:mx-20 lg:mx-24 select-none shrink-0 opacity-15"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

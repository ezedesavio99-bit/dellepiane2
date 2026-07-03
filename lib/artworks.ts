export interface Artwork {
  id: string
  name: string
  slug: string
  collection: string
  technique: string
  dimensions: string
  frame?: string
  availability: "original" | "por-encargo" | "vendida"
  price: number | null
  description: string
  images: string[]
  featured: boolean
  productionTime: string
  customizable: boolean
}

export const collections = [
  {
    id: "botanica",
    name: "Colección Botánica",
    description: "Obras que capturan la esencia orgánica del mundo natural.",
    image: "/donde-empieza-lo-nuestro-1.jpg",
  },
  {
    id: "agua",
    name: "Colección Aguas",
    description: "Colección donde nuestras raíces se muestran naturalmente, transmitiendo un tiempo de conexión y fluidez.",
    image: "/obra-peces.jpg",
  },
  {
    id: "conceptual",
    name: "Colección Conceptual",
    description: "Expresiones modernas que nos invitan a descubrir la simpleza en sus líneas puras y en sus paletas suaves.",
    image: "/obra-circulos.jpg",
  },
]

// Base description for all artworks
const baseDescription = `Piezas únicas argentinas hechas a mano con esencia familiar, utilizando materiales naturales como arcilla, lanas de llama y oveja andina, sobre un soporte de tela panamá enmarcados en madera de Kiri orgánica.

Nuestras obras crean un diálogo entre la delicadeza del bordado y la textura tridimensional de la cerámica, evocando la esencia de la naturaleza y la fusión perfecta entre la tierra y el agua.

Todos los cuadros son entregados con su certificado de autenticidad que garantiza que corresponde a un original Dellepiane.`

export const artworks: Artwork[] = [
  // COLECCIÓN BOTÁNICA
  {
    id: "1",
    name: "Donde empieza lo nuestro",
    slug: "donde-empieza-lo-nuestro",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "60x60cm",
    frame: "Cintillo alto en madera de Kiri",
    availability: "por-encargo",
    price: 489290,
    description: baseDescription,
    images: [
      "/donde-empieza-lo-nuestro-1.jpg",
      "/donde-empieza-lo-nuestro-2.jpg",
    ],
    featured: false,
    productionTime: "3-4 semanas",
    customizable: true,
  },
  {
    id: "2",
    name: "Refugio de margaritas",
    slug: "refugio-de-margaritas",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "80x80cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 635400,
    description: baseDescription,
    images: [
      "/refugio-de-margaritas-1.jpg",
      "/refugio-de-margaritas-2.jpg",
      "/refugio-de-margaritas-3.jpg",
      "/refugio-de-margaritas-4.jpg",
    ],
    featured: true,
    productionTime: "2-3 semanas",
    customizable: true,
  },
  {
    id: "3",
    name: "Esencia pura dúo",
    slug: "esencia-pura-duo",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x25cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 371800,
    description: baseDescription,
    images: [
      "/esencia-pura-duo-1.jpg",
      "/esencia-pura-duo-2.jpg",
      "/esencia-pura-duo-4.jpg",
    ],
    featured: true,
    productionTime: "2-3 semanas",
    customizable: true,
  },
  {
    id: "4",
    name: "Armonía verde y blanco",
    slug: "armonia-verde-y-blanco",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x25cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 147500,
    description: baseDescription,
    images: [
      "/armonia-verde-y-blanco-1.jpg",
      "/armonia-verde-y-blanco-2.jpg",
      "/armonia-verde-y-blanco-3.jpg",
      "/armonia-verde-y-blanco-4.jpg",
    ],
    featured: true,
    productionTime: "3-4 semanas",
    customizable: true,
  },
  {
    id: "5",
    name: "Abriendo caminos",
    slug: "abriendo-caminos",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "30x60cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 390500,
    description: baseDescription,
    images: [
      "/abriendo-caminos-1.jpg",
      "/abriendo-caminos-2.jpg",
      "/abriendo-caminos-3.jpg",
      "/abriendo-caminos-4.jpg",
    ],
    featured: false,
    productionTime: "4-5 semanas",
    customizable: true,
  },
  {
    id: "6",
    name: "Dúo memoria de campo",
    slug: "duo-memoria-de-campo",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x25cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 390500,
    description: baseDescription,
    images: [
      "/duo-memoria-de-campo-1.jpg",
      "/duo-memoria-de-campo-2.jpg",
      "/duo-memoria-de-campo-3.jpg",
      "/duo-memoria-de-campo-4.jpg",
    ],
    featured: true,
    productionTime: "3-4 semanas",
    customizable: true,
  },
  {
    id: "7",
    name: "Relax",
    slug: "relax",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x50cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "por-encargo",
    price: 320700,
    description: baseDescription,
    images: ["/obra-relax.jpg"],
    featured: false,
    productionTime: "3-4 semanas",
    customizable: true,
  },
  {
    id: "8",
    name: "Ritmo natural",
    slug: "ritmo-natural",
    collection: "botanica",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x25cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 185900,
    description: baseDescription,
    images: [
      "/ritmo-natural-1.jpg",
      "/ritmo-natural-2.jpg",
    ],
    featured: false,
    productionTime: "3-4 semanas",
    customizable: true,
  },
  // COLECCIÓN AGUAS
  {
    id: "9",
    name: "Contracorriente",
    slug: "contracorriente",
    collection: "agua",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x50cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 340800,
    description: baseDescription,
    images: [
      "/contracorriente-1.jpg",
      "/contracorriente-2.jpg",
      "/contracorriente-3.jpg",
    ],
    featured: false,
    productionTime: "3-4 semanas",
    customizable: true,
  },
  {
    id: "10",
    name: "Oleaje de fibras dúo",
    slug: "oleaje-de-fibras-duo",
    collection: "agua",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "30x30cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 420400,
    description: baseDescription,
    images: [
      "/oleaje-de-fibras-duo-1.jpg",
      "/oleaje-de-fibras-duo-2.jpg",
      "/oleaje-de-fibras-duo-3.jpg",
      "/oleaje-de-fibras-duo-4.jpg",
      "/oleaje-de-fibras-duo-5.jpg",
    ],
    featured: false,
    productionTime: "4-5 semanas",
    customizable: true,
  },
  // COLECCIÓN CONCEPTUAL
  {
    id: "11",
    name: "Conexiones",
    slug: "conexiones",
    collection: "conceptual",
    technique: "Cerámica y bordado, sobre soporte de telas naturales",
    dimensions: "25x25cm",
    frame: "Cintillo plano en madera de Kiri",
    availability: "original",
    price: 135600,
    description: baseDescription,
    images: [
      "/conexiones-1.jpg",
      "/conexiones-2.jpg",
      "/conexiones-4.jpg",
    ],
    featured: true,
    productionTime: "2-3 semanas",
    customizable: true,
  },
]

export const testimonials = [
  {
    id: "1",
    name: "María García",
    location: "Buenos Aires",
    text: "La obra que encargué transformó completamente mi living. El proceso fue muy personalizado y el resultado superó mis expectativas.",
    artwork: "Raíces de Otoño",
  },
  {
    id: "2",
    name: "Carlos Mendoza",
    location: "Córdoba",
    text: "Increíble la atención al detalle y la calidez de cada pieza. Se nota que hay amor y dedicación en cada trazo.",
    artwork: "Horizonte Sereno",
  },
  {
    id: "3",
    name: "Laura Fernández",
    location: "Rosario",
    text: "Pedí una obra personalizada para el cumpleaños de mi madre. Quedó emocionada con el resultado. Gracias DELLEPIANE.",
    artwork: "Obra personalizada",
  },
]

export const faqs = [
  {
    question: "¿Las obras son únicas?",
    answer:
      "Sí, cada pieza es única y está creada artesanalmente. Incluso las obras por encargo tienen variaciones que las hacen irrepetibles.",
  },
  {
    question: "¿Hacés cuadros personalizados?",
    answer:
      "Sí, creamos obras a medida según tu espacio, colores preferidos y estilo. El proceso incluye una consulta inicial, propuesta de diseño y seguimiento durante la creación.",
  },
  {
    question: "¿Envían a todo el país?",
    answer:
      "Sí, realizamos envíos a toda Argentina con embalaje especial para obras de arte. También coordinamos envíos internacionales.",
  },
  {
    question: "¿Cuánto tardan en producirse?",
    answer:
      "El tiempo varía según la técnica y complejidad. En general, las obras toman entre 2 a 6 semanas. Te informamos el tiempo estimado antes de confirmar tu pedido.",
  },
  {
    question: "¿Vienen listos para colgar?",
    answer:
      "Sí, todas las obras se entregan con sistema de colgado ya instalado y protección adecuada. También incluimos instrucciones de cuidado.",
  },
  {
    question: "¿Qué técnicas usan?",
    answer:
      "Trabajamos con cerámica artesanal, bordado sobre telas naturales y materiales nobles como arcilla, lanas de llama y oveja andina. Todas nuestras obras son creadas a mano, sin el uso de pinturas industriales.",
  },
  {
    question: "¿Medios de pago?",
    answer:
      "Aceptamos transferencia bancaria.",
  },
]

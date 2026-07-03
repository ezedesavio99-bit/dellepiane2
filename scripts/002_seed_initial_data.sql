-- Seed collections
INSERT INTO public.collections (name, slug, description, image_url, order_index, visible) VALUES
  ('Colección Botánica', 'botanica', 'Obras que capturan la esencia orgánica del mundo natural.', '/donde-empieza-lo-nuestro-1.jpg', 1, true),
  ('Colección Aguas', 'agua', 'Colección donde nuestras raíces se muestran naturalmente, transmitiendo un tiempo de conexión y fluidez.', '/coleccion-agua.jpg', 2, true),
  ('Colección Conceptual', 'conceptual', 'Expresiones modernas que nos invitan a descubrir la simpleza en sus líneas puras y en sus paletas suaves.', '/coleccion-conceptual.jpg', 3, true)
ON CONFLICT (slug) DO NOTHING;

-- Seed artworks (reference collection by slug lookup)
INSERT INTO public.artworks (title, slug, collection_id, technique, dimensions, frame, price, currency, main_image_url, gallery_images, featured, available, visible, order_index, full_description)
SELECT
  a.title, a.slug,
  c.id,
  a.technique, a.dimensions, a.frame, a.price, 'ARS',
  a.main_image_url, a.gallery_images,
  a.featured, a.available, true, a.order_index,
  'Piezas únicas argentinas hechas a mano con esencia familiar, utilizando materiales naturales como arcilla, lanas de llama y oveja andina, sobre un soporte de tela panamá enmarcados en madera de Kiri orgánica.'
FROM (VALUES
  ('Donde empieza lo nuestro','donde-empieza-lo-nuestro','botanica','Cerámica y bordado, sobre soporte de telas naturales','60x60cm','Cintillo alto en madera de Kiri',489290,'/donde-empieza-lo-nuestro-1.jpg',ARRAY['/donde-empieza-lo-nuestro-1.jpg','/donde-empieza-lo-nuestro-2.jpg'],false,true,1),
  ('Refugio de margaritas','refugio-de-margaritas','botanica','Cerámica y bordado, sobre soporte de telas naturales','80x80cm','Cintillo plano en madera de Kiri',635400,'/refugio-de-margaritas-1.jpg',ARRAY['/refugio-de-margaritas-1.jpg','/refugio-de-margaritas-2.jpg','/refugio-de-margaritas-3.jpg','/refugio-de-margaritas-4.jpg'],true,true,2),
  ('Esencia pura dúo','esencia-pura-duo','botanica','Cerámica y bordado, sobre soporte de telas naturales','25x25cm','Cintillo plano en madera de Kiri',371800,'/esencia-pura-duo-1.jpg',ARRAY['/esencia-pura-duo-1.jpg','/esencia-pura-duo-2.jpg','/esencia-pura-duo-4.jpg'],true,true,3),
  ('Armonía verde y blanco','armonia-verde-y-blanco','botanica','Cerámica y bordado, sobre soporte de telas naturales','25x25cm','Cintillo plano en madera de Kiri',147500,'/armonia-verde-y-blanco-1.jpg',ARRAY['/armonia-verde-y-blanco-1.jpg','/armonia-verde-y-blanco-2.jpg','/armonia-verde-y-blanco-3.jpg','/armonia-verde-y-blanco-4.jpg'],true,true,4),
  ('Abriendo caminos','abriendo-caminos','botanica','Cerámica y bordado, sobre soporte de telas naturales','30x60cm','Cintillo plano en madera de Kiri',390500,'/abriendo-caminos-1.jpg',ARRAY['/abriendo-caminos-1.jpg','/abriendo-caminos-2.jpg','/abriendo-caminos-3.jpg','/abriendo-caminos-4.jpg'],false,true,5),
  ('Dúo memoria de campo','duo-memoria-de-campo','botanica','Cerámica y bordado, sobre soporte de telas naturales','25x25cm','Cintillo plano en madera de Kiri',390500,'/duo-memoria-de-campo-1.jpg',ARRAY['/duo-memoria-de-campo-1.jpg','/duo-memoria-de-campo-2.jpg','/duo-memoria-de-campo-3.jpg','/duo-memoria-de-campo-4.jpg'],true,true,6),
  ('Relax','relax','botanica','Cerámica y bordado, sobre soporte de telas naturales','25x50cm','Cintillo plano en madera de Kiri',320700,'/obra-relax.jpg',ARRAY['/obra-relax.jpg'],false,true,7),
  ('Ritmo natural','ritmo-natural','botanica','Cerámica y bordado, sobre soporte de telas naturales','25x25cm','Cintillo plano en madera de Kiri',185900,'/ritmo-natural-1.jpg',ARRAY['/ritmo-natural-1.jpg','/ritmo-natural-2.jpg'],false,true,8),
  ('Contracorriente','contracorriente','agua','Cerámica y bordado, sobre soporte de telas naturales','25x50cm','Cintillo plano en madera de Kiri',340800,'/contracorriente-1.jpg',ARRAY['/contracorriente-1.jpg','/contracorriente-2.jpg','/contracorriente-3.jpg'],false,true,9),
  ('Oleaje de fibras dúo','oleaje-de-fibras-duo','agua','Cerámica y bordado, sobre soporte de telas naturales','30x30cm','Cintillo plano en madera de Kiri',420400,'/oleaje-de-fibras-duo-1.jpg',ARRAY['/oleaje-de-fibras-duo-1.jpg','/oleaje-de-fibras-duo-2.jpg','/oleaje-de-fibras-duo-3.jpg','/oleaje-de-fibras-duo-4.jpg','/oleaje-de-fibras-duo-5.jpg'],false,true,10),
  ('Conexiones','conexiones','conceptual','Cerámica y bordado, sobre soporte de telas naturales','25x25cm','Cintillo plano en madera de Kiri',135600,'/conexiones-1.jpg',ARRAY['/conexiones-1.jpg','/conexiones-2.jpg','/conexiones-4.jpg'],true,true,11)
) AS a(title,slug,col_slug,technique,dimensions,frame,price,main_image_url,gallery_images,featured,available,order_index)
JOIN public.collections c ON c.slug = a.col_slug
ON CONFLICT (slug) DO NOTHING;

-- Seed site_content
INSERT INTO public.site_content (section_key, title, subtitle, content) VALUES
  ('hero', 'Arte que nace del alma', 'Piezas únicas con esencia familiar', 'Obras artesanales que fusionan cerámica y bordado sobre telas naturales.'),
  ('about', 'Nuestra historia', 'Escencia & Familia', 'Somos una marca familiar argentina que crea obras de arte únicas, hechas a mano con amor y dedicación.'),
  ('cta', 'Creamos juntos tu obra', 'Arte personalizado para tu espacio', 'Contactanos y diseñamos una pieza única para vos.')
ON CONFLICT (section_key) DO NOTHING;

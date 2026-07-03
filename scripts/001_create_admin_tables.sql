-- Collections table
CREATE TABLE IF NOT EXISTS public.collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  visible BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Artworks table
CREATE TABLE IF NOT EXISTS public.artworks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  artist_name TEXT DEFAULT 'Dellepiane',
  collection_id UUID REFERENCES public.collections(id) ON DELETE SET NULL,
  short_description TEXT,
  full_description TEXT,
  price NUMERIC(12, 2),
  currency TEXT DEFAULT 'ARS',
  main_image_url TEXT,
  gallery_images TEXT[] DEFAULT '{}',
  dimensions TEXT,
  technique TEXT,
  frame TEXT,
  year INTEGER,
  featured BOOLEAN DEFAULT false,
  available BOOLEAN DEFAULT true,
  visible BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Banners table
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT,
  subtitle TEXT,
  description TEXT,
  image_url TEXT,
  button_text TEXT,
  button_link TEXT,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Site content table
CREATE TABLE IF NOT EXISTS public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_key TEXT NOT NULL UNIQUE,
  title TEXT,
  subtitle TEXT,
  content TEXT,
  extra_data JSONB,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- RLS
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Public read access for all tables
CREATE POLICY "public_read_collections" ON public.collections FOR SELECT USING (true);
CREATE POLICY "public_read_artworks" ON public.artworks FOR SELECT USING (true);
CREATE POLICY "public_read_banners" ON public.banners FOR SELECT USING (true);
CREATE POLICY "public_read_site_content" ON public.site_content FOR SELECT USING (true);

-- Authenticated write access (admin only via service role or authenticated session)
CREATE POLICY "auth_all_collections" ON public.collections FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_all_artworks" ON public.artworks FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_all_banners" ON public.banners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "auth_all_site_content" ON public.site_content FOR ALL USING (auth.role() = 'authenticated');

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER set_collections_updated_at BEFORE UPDATE ON public.collections FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER set_artworks_updated_at BEFORE UPDATE ON public.artworks FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER set_banners_updated_at BEFORE UPDATE ON public.banners FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER set_site_content_updated_at BEFORE UPDATE ON public.site_content FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

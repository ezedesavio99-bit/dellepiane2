-- Create storage buckets for artworks and banners
INSERT INTO storage.buckets (id, name, public)
VALUES
  ('artworks', 'artworks', true),
  ('banners', 'banners', true)
ON CONFLICT (id) DO NOTHING;

-- Enable public access for artworks bucket
CREATE POLICY "Public Access Artworks"
ON storage.objects FOR SELECT
USING (bucket_id = 'artworks');

-- Enable public access for banners bucket
CREATE POLICY "Public Access Banners"
ON storage.objects FOR SELECT
USING (bucket_id = 'banners');

-- Allow authenticated users to upload to artworks bucket
CREATE POLICY "Authenticated Upload Artworks"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'artworks' AND auth.role() = 'authenticated');

-- Allow authenticated users to upload to banners bucket
CREATE POLICY "Authenticated Upload Banners"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'banners' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete from artworks bucket
CREATE POLICY "Authenticated Delete Artworks"
ON storage.objects FOR DELETE
USING (bucket_id = 'artworks' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete from banners bucket
CREATE POLICY "Authenticated Delete Banners"
ON storage.objects FOR DELETE
USING (bucket_id = 'banners' AND auth.role() = 'authenticated');

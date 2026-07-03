import { createClient } from "@/lib/supabase/server"

export type SupabaseArtwork = {
  id: string
  title: string
  slug: string
  collection_id: string | null
  short_description: string | null
  price: number | null
  main_image_url: string | null
  gallery_images: string[]
  dimensions: string | null
  technique: string | null
  frame: string | null
  featured: boolean
  available: boolean
  availability: string
  visible: boolean
  order_index: number
  created_at: string
  updated_at: string
  collections?: {
    id: string
    name: string
    slug: string
  } | null
}

export type SupabaseCollection = {
  id: string
  name: string
  slug: string
  description: string | null
  image_url: string | null
  order_index: number
  visible: boolean
}

export async function getArtworks(): Promise<SupabaseArtwork[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("artworks")
    .select("*, collections(id, name, slug)")
    .eq("visible", true)
    .order("order_index", { ascending: true })

  if (error) {
    console.error("Error fetching artworks:", error)
    return []
  }
  return data || []
}

export async function getArtworkBySlug(slug: string): Promise<SupabaseArtwork | null> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("artworks")
    .select("*, collections(id, name, slug)")
    .eq("slug", slug)
    .single()

  if (error) {
    console.error("Error fetching artwork:", error)
    return null
  }
  return data
}

export async function getCollections(): Promise<SupabaseCollection[]> {
  const supabase = await createClient()
  const { data, error } = await supabase
    .from("collections")
    .select("*")
    .eq("visible", true)
    .order("order_index", { ascending: true })

  if (error) {
    console.error("Error fetching collections:", error)
    return []
  }
  return data || []
}

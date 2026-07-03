import { createClient } from "./supabase/server"

export async function uploadImage(file: File, bucket: "artworks" | "banners") {
  const supabase = await createClient()
  const timestamp = Date.now()
  const filename = `${timestamp}-${file.name}`

  try {
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filename, file, {
        cacheControl: "3600",
        upsert: true,
      })

    if (error) throw error

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from(bucket).getPublicUrl(filename)

    return { url: publicUrl, path: data.path }
  } catch (error) {
    console.error(`Error uploading to ${bucket}:`, error)
    throw error
  }
}

export async function deleteImage(path: string, bucket: "artworks" | "banners") {
  const supabase = await createClient()

  try {
    const { error } = await supabase.storage.from(bucket).remove([path])
    if (error) throw error
  } catch (error) {
    console.error(`Error deleting from ${bucket}:`, error)
    throw error
  }
}

export function getPublicImageUrl(path: string, bucket: "artworks" | "banners") {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`
}

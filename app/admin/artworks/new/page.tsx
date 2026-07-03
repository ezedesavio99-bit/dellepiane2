"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { DashboardLayout } from "@/components/admin/dashboard-layout"
import Link from "next/link"
import { ArrowLeft, Upload, X } from "lucide-react"

export default function NewArtworkPage() {
  const router = useRouter()
  const supabase = createClient()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [form, setForm] = useState({
    title: "",
    slug: "",
    collection_id: "",
    short_description: "",
    price: "",
    dimensions: "",
    technique: "",
    frame: "",
    available: true,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.from("artworks").insert([
        {
          ...form,
          price: form.price ? parseFloat(form.price) : null,
          collection_id: form.collection_id || null,
          gallery_images: galleryImages,
        },
      ])

      if (error) throw error
      router.push("/admin/artworks")
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    setUploading(true)
    try {
      for (const file of Array.from(files)) {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("bucket", "artworks")

        const res = await fetch("/api/admin/upload-image", {
          method: "POST",
          body: formData,
        })

        const data = await res.json()
        if (data.url) {
          setGalleryImages([...galleryImages, data.url])
        }
      }
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setUploading(false)
    }
  }

  const removeImage = (index: number) => {
    setGalleryImages(galleryImages.filter((_, i) => i !== index))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  }

  const handleTitleChange = (value: string) => {
    setForm({
      ...form,
      title: value,
      slug: generateSlug(value),
    })
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/artworks"
            className="p-2 hover:bg-[#F3F0E8] rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#5F6A54]" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-[#3D3D3D]">Nueva obra</h1>
            <p className="text-[#6B6B6B] mt-1">Agrega una nueva obra al catálogo</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-[#E8E5DC] p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Título *
              </label>
              <input
                type="text"
                required
                value={form.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Slug * (se genera automáticamente)
              </label>
              <input
                type="text"
                readOnly
                value={form.slug}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg bg-[#F3F0E8] text-[#8E927B] cursor-not-allowed"
              />
              <p className="text-xs text-[#8E927B] mt-1">
                Se genera automáticamente desde el título
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Precio (ARS)
              </label>
              <input
                type="number"
                step="0.01"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Dimensiones
              </label>
              <input
                type="text"
                placeholder="30x60cm"
                value={form.dimensions}
                onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Descripción
              </label>
              <textarea
                value={form.short_description}
                onChange={(e) => setForm({ ...form, short_description: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] h-24"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Técnica
              </label>
              <input
                type="text"
                value={form.technique}
                onChange={(e) => setForm({ ...form, technique: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Marco
              </label>
              <input
                type="text"
                value={form.frame}
                onChange={(e) => setForm({ ...form, frame: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>
          </div>

          {/* Image Upload Section */}
          <div className="pt-6 border-t border-[#E8E5DC]">
            <label className="block text-sm font-medium text-[#3D3D3D] mb-3">
              Imágenes de la obra
            </label>
            
            <div className="mb-4">
              <label className="relative flex items-center justify-center w-full px-6 py-8 border-2 border-dashed border-[#D4D1C7] rounded-lg cursor-pointer hover:border-[#5F6A54] hover:bg-[#F9F9F9] transition-colors">
                <div className="text-center">
                  <Upload className="w-8 h-8 text-[#8E927B] mx-auto mb-2" />
                  <p className="text-sm font-medium text-[#3D3D3D]">
                    Arrastrá imágenes o hacé clic para seleccionar
                  </p>
                  <p className="text-xs text-[#8E927B] mt-1">
                    PNG, JPG, WebP (máx. 10MB cada una)
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>
            </div>

            {/* Gallery Preview */}
            {galleryImages.length > 0 && (
              <div>
                <p className="text-xs text-[#8E927B] mb-2">
                  {galleryImages.length} imagen{galleryImages.length !== 1 ? 'es' : ''} agregada{galleryImages.length !== 1 ? 's' : ''}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {galleryImages.map((img, index) => (
                    <div key={img} className="relative group rounded-lg overflow-hidden border border-[#E8E5DC]">
                      <img
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-32 object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <div className="absolute top-1 left-1 bg-[#3D3D3D] text-white text-xs font-bold px-2 py-1 rounded">
                        {index + 1}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-[#E8E5DC]">
            <Link
              href="/admin/artworks"
              className="px-6 py-2.5 border border-[#D4D1C7] text-[#3D3D3D] rounded-lg hover:bg-[#F3F0E8] transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 bg-[#5F6A54] text-[#F3F0E8] rounded-lg hover:bg-[#4A5343] transition-colors disabled:opacity-50"
            >
              {loading ? "Guardando..." : "Guardar obra"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

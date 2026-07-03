'use client'

import { useEffect, useState, useRef } from "react"
import { useParams, useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { DashboardLayout } from "@/components/admin/dashboard-layout"
import { ArrowLeft, Save, Trash2, GripVertical, X, ChevronLeft, ChevronRight, Upload } from "lucide-react"
import Link from "next/link"

export default function EditArtworkPage() {
  const params = useParams()
  const router = useRouter()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [collections, setCollections] = useState<any[]>([])
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)
  const [form, setForm] = useState({
    title: "",
    slug: "",
    collection_id: "",
    short_description: "",
    price: "",
    dimensions: "",
    technique: "",
    frame: "",
    availability: "original",
    featured: false,
    available: true,
    visible: true,
  })

  useEffect(() => {
    const load = async () => {
      const supabase = createClient()
      const [{ data: artwork }, { data: cols }] = await Promise.all([
        supabase.from("artworks").select("*").eq("id", id).single(),
        supabase.from("collections").select("id, name").order("order_index"),
      ])
      if (artwork) {
        setForm({
          title: artwork.title || "",
          slug: artwork.slug || "",
          collection_id: artwork.collection_id || "",
          short_description: artwork.short_description || "",
          price: artwork.price?.toString() || "",
          dimensions: artwork.dimensions || "",
          technique: artwork.technique || "",
          frame: artwork.frame || "",
          availability: artwork.availability || "original",
          featured: artwork.featured || false,
          available: artwork.available ?? true,
          visible: artwork.visible ?? true,
        })
        setGalleryImages(artwork.gallery_images || [])
      }
      setCollections(cols || [])
      setLoading(false)
    }
    load()
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    const supabase = createClient()
    await supabase.from("artworks").update({
      ...form,
      price: parseFloat(form.price),
      gallery_images: galleryImages,
    }).eq("id", id)
    setSaving(false)
    router.push("/admin/artworks")
  }

  // Drag & drop handlers
  const handleDragStart = (index: number) => setDragIndex(index)
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    setDragOverIndex(index)
  }
  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) return
    const updated = [...galleryImages]
    const [moved] = updated.splice(dragIndex, 1)
    updated.splice(index, 0, moved)
    setGalleryImages(updated)
    setDragIndex(null)
    setDragOverIndex(null)
  }
  const handleDragEnd = () => {
    setDragIndex(null)
    setDragOverIndex(null)
  }
  const moveImage = (index: number, direction: "left" | "right") => {
    const updated = [...galleryImages]
    const targetIndex = direction === "left" ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= updated.length) return
    ;[updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]]
    setGalleryImages(updated)
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

  const handleDelete = async () => {
    if (!confirm("¿Seguro que deseas eliminar esta obra?")) return
    setDeleting(true)
    const supabase = createClient()
    await supabase.from("artworks").delete().eq("id", id)
    router.push("/admin/artworks")
  }

  if (loading) return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-64 text-[#8E927B]">Cargando...</div>
    </DashboardLayout>
  )

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/admin/artworks" className="p-2 hover:bg-[#E8E5DC] rounded-lg transition-colors">
              <ArrowLeft className="w-5 h-5 text-[#3D3D3D]" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-[#3D3D3D]">Editar obra</h1>
              <p className="text-[#6B6B6B] mt-1">{form.title}</p>
            </div>
          </div>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm"
          >
            <Trash2 className="w-4 h-4" />
            Eliminar obra
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-[#E8E5DC] p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Título</label>
              <input type="text" value={form.title} onChange={e => handleTitleChange(e.target.value)}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Slug (automático)</label>
              <input type="text" readOnly value={form.slug}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg bg-[#F3F0E8] text-[#8E927B] cursor-not-allowed" />
              <p className="text-xs text-[#8E927B] mt-1">Se genera automáticamente desde el título</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Colección</label>
              <select value={form.collection_id} onChange={e => setForm({...form, collection_id: e.target.value})}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] bg-white">
                <option value="">Sin colección</option>
                {collections.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Precio (ARS)</label>
              <input type="number" value={form.price} onChange={e => setForm({...form, price: e.target.value})}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Dimensiones</label>
              <input type="text" value={form.dimensions} onChange={e => setForm({...form, dimensions: e.target.value})}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Disponibilidad</label>
              <select value={form.availability} onChange={e => setForm({...form, availability: e.target.value})}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] bg-white">
                <option value="original">Original</option>
                <option value="por-encargo">Por encargo</option>
                <option value="vendida">Vendida</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Técnica</label>
              <input type="text" value={form.technique} onChange={e => setForm({...form, technique: e.target.value})}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Marco</label>
              <input type="text" value={form.frame} onChange={e => setForm({...form, frame: e.target.value})}
                className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3D3D3D] mb-1">Descripción breve</label>
            <textarea value={form.short_description} onChange={e => setForm({...form, short_description: e.target.value})} rows={3}
              className="w-full px-3 py-2 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] resize-none" />
          </div>

          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={e => setForm({...form, featured: e.target.checked})}
                className="w-4 h-4 accent-[#5F6A54]" />
              <span className="text-sm text-[#3D3D3D]">Destacada</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.available} onChange={e => setForm({...form, available: e.target.checked})}
                className="w-4 h-4 accent-[#5F6A54]" />
              <span className="text-sm text-[#3D3D3D]">Disponible</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.visible} onChange={e => setForm({...form, visible: e.target.checked})}
                className="w-4 h-4 accent-[#5F6A54]" />
              <span className="text-sm text-[#3D3D3D]">Visible en catálogo</span>
            </label>
          </div>

          {/* Gallery Image Ordering */}
          {galleryImages.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-1">
                Orden de imágenes en el catálogo
              </label>
              <p className="text-xs text-[#8E927B] mb-3">
                Arrastrá las imágenes para cambiar el orden. La primera es la que se muestra en el catálogo.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {galleryImages.map((img, index) => (
                  <div
                    key={img}
                    draggable
                    onDragStart={() => handleDragStart(index)}
                    onDragOver={(e) => handleDragOver(e, index)}
                    onDrop={() => handleDrop(index)}
                    onDragEnd={handleDragEnd}
                    className={`relative group rounded-lg overflow-hidden border-2 cursor-grab active:cursor-grabbing transition-all ${
                      dragOverIndex === index
                        ? "border-[#5F6A54] scale-105"
                        : dragIndex === index
                        ? "border-[#8E927B] opacity-50"
                        : "border-[#E8E5DC]"
                    }`}
                  >
                    {/* Position badge */}
                    <div className="absolute top-1.5 left-1.5 z-10 w-6 h-6 bg-[#3D3D3D]/80 text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>

                    {/* Drag handle */}
                    <div className="absolute top-1.5 right-1.5 z-10 p-0.5 bg-[#3D3D3D]/60 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <GripVertical className="w-3.5 h-3.5" />
                    </div>

                    {/* Remove button - top right hover */}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1.5 right-8 z-10 p-1.5 bg-red-500/80 rounded text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                      title="Eliminar esta imagen"
                    >
                      <X className="w-4 h-4" />
                    </button>

                    {/* Image */}
                    <div className="aspect-square">
                      <img
                        src={img}
                        alt={`Imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Arrow buttons for mobile */}
                    <div className="flex border-t border-[#E8E5DC]">
                      <button
                        type="button"
                        onClick={() => moveImage(index, "left")}
                        disabled={index === 0}
                        className="flex-1 py-1 flex items-center justify-center text-[#6B6B6B] hover:bg-[#F3F0E8] disabled:opacity-30 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveImage(index, "right")}
                        disabled={index === galleryImages.length - 1}
                        className="flex-1 py-1 flex items-center justify-center text-[#6B6B6B] hover:bg-[#F3F0E8] disabled:opacity-30 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="flex-1 py-1 flex items-center justify-center text-red-600 hover:bg-red-50 transition-colors font-medium text-xs"
                        title="Eliminar imagen"
                      >
                        <X className="w-4 h-4 mr-1" />
                        Eliminar
                      </button>
                    </div>

                    {index === 0 && (
                      <div className="bg-[#5F6A54] text-white text-center text-xs py-0.5 font-medium">
                        Principal
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add more images section */}
          <div className="pt-6 border-t border-[#E8E5DC]">
            <label className="block text-sm font-medium text-[#3D3D3D] mb-3">
              Agregar más imágenes
            </label>
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

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#5F6A54] text-[#F3F0E8] rounded-lg hover:bg-[#4A5343] transition-colors disabled:opacity-50">
              <Save className="w-4 h-4" />
              {saving ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { DashboardLayout } from "@/components/admin/dashboard-layout"
import { ArrowLeft, Save, Upload, X } from "lucide-react"
import Link from "next/link"

export default function BannerEditFormClient({
  id,
  initialBanner,
}: {
  id: string
  initialBanner: any
}) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [form, setForm] = useState({
    title: initialBanner?.title || "",
    subtitle: initialBanner?.subtitle || "",
    description: initialBanner?.description || "",
    image_url: initialBanner?.image_url || "",
    button_text: initialBanner?.button_text || "",
    button_link: initialBanner?.button_link || "",
    active: initialBanner?.active ?? true,
  })

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("bucket", "banners")

      const res = await fetch("/api/admin/upload-image", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()
      if (data.url) {
        setForm({ ...form, image_url: data.url })
      }
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const supabase = createClient()

      if (id === "new") {
        const { error } = await supabase.from("banners").insert([form])
        if (error) throw error
      } else {
        const { error } = await supabase.from("banners").update(form).eq("id", id)
        if (error) throw error
      }

      router.push("/admin/banners")
    } catch (error) {
      console.error("Error:", error)
    } finally {
      setSaving(false)
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/banners"
            className="p-2 hover:bg-[#F3F0E8] rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#5F6A54]" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-[#3D3D3D]">
              {id === "new" ? "Nuevo Banner" : "Editar Banner"}
            </h1>
            <p className="text-[#6B6B6B] mt-1">
              {id === "new" ? "Crea un nuevo banner" : "Actualiza el banner"}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg border border-[#E8E5DC] p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Título
              </label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Subtítulo
              </label>
              <input
                type="text"
                value={form.subtitle}
                onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Descripción
              </label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] h-24"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Texto del botón
              </label>
              <input
                type="text"
                value={form.button_text}
                onChange={(e) => setForm({ ...form, button_text: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Link del botón
              </label>
              <input
                type="text"
                value={form.button_link}
                onChange={(e) => setForm({ ...form, button_link: e.target.value })}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54]"
              />
            </div>

            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) => setForm({ ...form, active: e.target.checked })}
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-[#3D3D3D]">Activo</span>
              </label>
            </div>
          </div>

          {/* Image Upload */}
          <div className="pt-6 border-t border-[#E8E5DC]">
            <label className="block text-sm font-medium text-[#3D3D3D] mb-3">
              Imagen del banner
            </label>

            {form.image_url && (
              <div className="mb-4 relative w-full max-w-xs">
                <img
                  src={form.image_url}
                  alt="Banner preview"
                  className="w-full h-40 object-cover rounded-lg border border-[#E8E5DC]"
                />
                <button
                  type="button"
                  onClick={() => setForm({ ...form, image_url: "" })}
                  className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            <label className="relative flex items-center justify-center w-full px-6 py-8 border-2 border-dashed border-[#D4D1C7] rounded-lg cursor-pointer hover:border-[#5F6A54] hover:bg-[#F9F9F9] transition-colors">
              <div className="text-center">
                <Upload className="w-8 h-8 text-[#8E927B] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#3D3D3D]">
                  Arrastrá la imagen o hacé clic para seleccionar
                </p>
                <p className="text-xs text-[#8E927B] mt-1">
                  PNG, JPG, WebP (máx. 10MB)
                </p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-[#E8E5DC]">
            <Link
              href="/admin/banners"
              className="px-6 py-2.5 border border-[#D4D1C7] text-[#3D3D3D] rounded-lg hover:bg-[#F3F0E8] transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-6 py-2.5 bg-[#5F6A54] text-[#F3F0E8] rounded-lg hover:bg-[#4A5343] transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? "Guardando..." : "Guardar banner"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  )
}

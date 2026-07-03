'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { DashboardLayout } from '@/components/admin/dashboard-layout'
import { GripVertical, ChevronUp, ChevronDown } from 'lucide-react'

interface Artwork {
  id: string
  title: string
  slug: string
  main_image_url?: string
  order_index: number
}

export default function ArtworksOrderPage() {
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null)

  useEffect(() => {
    loadArtworks()
  }, [])

  const loadArtworks = async () => {
    const supabase = createClient()
    const { data } = await supabase
      .from('artworks')
      .select('*')
      .order('order_index', { ascending: true })
    setArtworks(data || [])
    setLoading(false)
  }

  const handleDragStart = (index: number) => setDragIndex(index)
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    setDragOverIndex(index)
  }
  const handleDrop = (index: number) => {
    if (dragIndex === null || dragIndex === index) return
    const updated = [...artworks]
    const [moved] = updated.splice(dragIndex, 1)
    updated.splice(index, 0, moved)
    setArtworks(updated)
    setDragIndex(null)
    setDragOverIndex(null)
  }
  const handleDragEnd = () => {
    setDragIndex(null)
    setDragOverIndex(null)
  }

  const moveArtwork = (index: number, direction: 'up' | 'down') => {
    const updated = [...artworks]
    const targetIndex = direction === 'up' ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= updated.length) return
    ;[updated[index], updated[targetIndex]] = [updated[targetIndex], updated[index]]
    setArtworks(updated)
  }

  const saveOrder = async () => {
    setSaving(true)
    const supabase = createClient()
    
    // Update all artworks with their new order_index
    const updates = artworks.map((artwork, index) => ({
      id: artwork.id,
      order_index: index,
    }))

    for (const update of updates) {
      await supabase
        .from('artworks')
        .update({ order_index: update.order_index })
        .eq('id', update.id)
    }

    setSaving(false)
    alert('Orden actualizado correctamente')
  }

  if (loading) {
    return (
      <DashboardLayout>
        <div className="text-center py-12">Cargando obras...</div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#3D3D3D]">Orden del catálogo</h1>
          <p className="text-[#6B6B6B] mt-2">
            Arrastrá las obras para cambiar el orden en que aparecen en el catálogo
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
          La primera obra será la que aparece primero en el catálogo cuando se filtra por colección.
        </div>

        <div className="space-y-2">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={() => handleDrop(index)}
              onDragEnd={handleDragEnd}
              className={`flex items-center gap-4 p-4 bg-white rounded-lg border-2 cursor-grab active:cursor-grabbing transition-all ${
                dragOverIndex === index
                  ? 'border-[#5F6A54] scale-102'
                  : dragIndex === index
                  ? 'border-[#8E927B] opacity-50'
                  : 'border-[#E8E5DC]'
              }`}
            >
              {/* Position badge */}
              <div className="flex items-center justify-center w-8 h-8 bg-[#3D3D3D] text-white rounded-full font-bold text-sm">
                {index + 1}
              </div>

              {/* Drag handle */}
              <div className="text-[#8E927B]">
                <GripVertical className="w-5 h-5" />
              </div>

              {/* Image thumbnail */}
              {artwork.main_image_url && (
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-[#F3F0E8]">
                  <img
                    src={artwork.main_image_url}
                    alt={artwork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Title */}
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#3D3D3D] truncate">{artwork.title}</p>
              </div>

              {/* Arrow buttons */}
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => moveArtwork(index, 'up')}
                  disabled={index === 0}
                  className="p-2 rounded-lg bg-[#F3F0E8] text-[#3D3D3D] hover:bg-[#E8E5DC] disabled:opacity-30 transition-colors"
                  title="Mover arriba"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  onClick={() => moveArtwork(index, 'down')}
                  disabled={index === artworks.length - 1}
                  className="p-2 rounded-lg bg-[#F3F0E8] text-[#3D3D3D] hover:bg-[#E8E5DC] disabled:opacity-30 transition-colors"
                  title="Mover abajo"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={saveOrder}
            disabled={saving}
            className="px-6 py-2.5 bg-[#5F6A54] text-[#F3F0E8] rounded-lg hover:bg-[#4A5343] transition-colors disabled:opacity-50 font-medium"
          >
            {saving ? 'Guardando...' : 'Guardar orden'}
          </button>
        </div>
      </div>
    </DashboardLayout>
  )
}

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardLayout } from "@/components/admin/dashboard-layout"
import Link from "next/link"
import { Plus, Edit, Trash2, ArrowUpDown } from "lucide-react"

export default async function ArtworksPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/auth/login")
  }

  const { data: artworks } = await supabase
    .from("artworks")
    .select("*, collections(name)")
    .order("created_at", { ascending: false })

  const handleDelete = async (id: string) => {
    "use server"
    const supabase = await createClient()
    await supabase.from("artworks").delete().eq("id", id)
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#3D3D3D]">Obras</h1>
            <p className="text-[#6B6B6B] mt-1">Gestiona el catálogo de obras</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/admin/artworks/order"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#8E927B] text-[#F3F0E8] rounded-lg hover:bg-[#7A7C6B] transition-colors"
            >
              <ArrowUpDown className="w-5 h-5" />
              Ordenar obras
            </Link>
            <Link
              href="/admin/artworks/new"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#5F6A54] text-[#F3F0E8] rounded-lg hover:bg-[#4A5343] transition-colors"
            >
              <Plus className="w-5 h-5" />
              Nueva obra
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E8E5DC] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F3F0E8] border-b border-[#E8E5DC]">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3D3D3D]">
                    Título
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3D3D3D]">
                    Colección
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3D3D3D]">
                    Precio
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#3D3D3D]">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-[#3D3D3D]">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {artworks && artworks.length > 0 ? (
                  artworks.map((artwork: any) => (
                    <tr
                      key={artwork.id}
                      className="border-b border-[#E8E5DC] hover:bg-[#F3F0E8] transition-colors"
                    >
                      <td className="px-6 py-4 text-[#3D3D3D]">{artwork.title}</td>
                      <td className="px-6 py-4 text-[#6B6B6B]">
                        {artwork.collections?.name || "Sin colección"}
                      </td>
                      <td className="px-6 py-4 text-[#3D3D3D]">
                        ${artwork.price?.toLocaleString("es-AR") || "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            artwork.available
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {artwork.available ? "Disponible" : "No disponible"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right flex items-center justify-end gap-3">
                        <Link
                          href={`/admin/artworks/${artwork.id}`}
                          className="p-2 hover:bg-[#E8E5DC] rounded-lg transition-colors text-[#5F6A54]"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-500">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-[#8E927B]">
                      No hay obras creadas aún
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

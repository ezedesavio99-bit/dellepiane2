import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardLayout } from "@/components/admin/dashboard-layout"

export default async function AdminDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/auth/login")
  }

  const [{ count: artworksCount }, { count: collectionsCount }, { count: bannersCount }, { data: recentArtworks }] = await Promise.all([
    supabase.from("artworks").select("*", { count: "exact", head: true }),
    supabase.from("collections").select("*", { count: "exact", head: true }),
    supabase.from("banners").select("*", { count: "exact", head: true }),
    supabase.from("artworks").select("title, availability, price, created_at").order("created_at", { ascending: false }).limit(5),
  ])

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-[#3D3D3D]">Dashboard</h1>
          <p className="text-[#6B6B6B] mt-2">Bienvenido al panel de administración de DELLEPIANE</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E8E5DC]">
            <h3 className="text-sm font-medium text-[#8E927B]">Total Obras</h3>
            <p className="text-3xl font-bold text-[#3D3D3D] mt-2">{artworksCount ?? 0}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E8E5DC]">
            <h3 className="text-sm font-medium text-[#8E927B]">Colecciones</h3>
            <p className="text-3xl font-bold text-[#3D3D3D] mt-2">{collectionsCount ?? 0}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E8E5DC]">
            <h3 className="text-sm font-medium text-[#8E927B]">Banners</h3>
            <p className="text-3xl font-bold text-[#3D3D3D] mt-2">{bannersCount ?? 0}</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-[#E8E5DC]">
            <h3 className="text-sm font-medium text-[#8E927B]">Usuario</h3>
            <p className="text-sm text-[#3D3D3D] mt-2 truncate">{user.email}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-[#E8E5DC] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#E8E5DC]">
            <h2 className="text-lg font-semibold text-[#3D3D3D]">Últimas obras cargadas</h2>
          </div>
          <table className="w-full">
            <thead className="bg-[#F3F0E8]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#3D3D3D]">Título</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#3D3D3D]">Disponibilidad</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-[#3D3D3D]">Precio</th>
              </tr>
            </thead>
            <tbody>
              {recentArtworks?.map((a: any) => (
                <tr key={a.title} className="border-t border-[#E8E5DC]">
                  <td className="px-6 py-3 text-[#3D3D3D] text-sm">{a.title}</td>
                  <td className="px-6 py-3 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${a.availability === 'original' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {a.availability === 'original' ? 'Original' : 'Por encargo'}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-[#3D3D3D] text-sm">${a.price?.toLocaleString("es-AR")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}

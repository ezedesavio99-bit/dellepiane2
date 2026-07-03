import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { DashboardLayout } from "@/components/admin/dashboard-layout"

export default async function ContentPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/admin/auth/login")
  }

  const { data: content } = await supabase
    .from("site_content")
    .select()

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#3D3D3D]">Contenido del Sitio</h1>
          <p className="text-[#6B6B6B] mt-1">Gestiona el contenido estático del sitio</p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {content && content.length > 0 ? (
            content.map((item: any) => (
              <div
                key={item.id}
                className="bg-white rounded-lg border border-[#E8E5DC] p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[#3D3D3D]">{item.section_key}</h3>
                    {item.title && (
                      <p className="text-sm text-[#6B6B6B] mt-1">{item.title}</p>
                    )}
                  </div>
                  <button className="px-4 py-2 border border-[#D4D1C7] text-[#3D3D3D] rounded-lg hover:bg-[#F3F0E8] transition-colors">
                    Editar
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg border border-[#E8E5DC] p-12 text-center">
              <p className="text-[#8E927B]">No hay contenido disponible</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}

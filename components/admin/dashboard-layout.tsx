"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Menu, X, LogOut, LayoutDashboard, Images, Palette, FileText, Flag } from "lucide-react"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/auth/login")
  }

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/artworks", label: "Obras", icon: Images },
    { href: "/admin/collections", label: "Colecciones", icon: Palette },
    { href: "/admin/banners", label: "Banners", icon: Flag },
    { href: "/admin/content", label: "Contenido", icon: FileText },
  ]

  return (
    <div className="flex h-screen bg-[#F3F0E8]">
      {/* Overlay para cerrar menú en mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static w-64 h-full bg-[#3D3D3D] text-[#F3F0E8] transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-6 border-b border-[#5F6A54]">
          <h1 className="text-2xl font-serif font-bold">DELLEPIANE</h1>
          <p className="text-xs text-[#B79A63] mt-1">Admin Panel</p>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[#5F6A54] transition-colors"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#5F6A54]">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-[#5F6A54] transition-colors text-red-300"
          >
            <LogOut className="w-5 h-5" />
            <span>Cerrar sesión</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="bg-white border-b border-[#E8E5DC] p-4 flex items-center gap-4">
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 hover:bg-[#F3F0E8] rounded-lg"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h2 className="text-lg font-semibold text-[#3D3D3D]">DELLEPIANE Admin</h2>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

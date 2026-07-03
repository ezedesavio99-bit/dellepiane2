'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error
      router.push('/admin')
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'Error al iniciar sesión')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F0E8] flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#E8E5DC]">
          <div className="mb-8">
            <h1 className="text-3xl font-serif font-bold text-[#3D3D3D]">DELLEPIANE</h1>
            <p className="text-[#8E927B] mt-2">Panel de Administración</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] bg-white text-[#3D3D3D]"
                placeholder="admin@dellepiane.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#3D3D3D] mb-2">
                Contraseña
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 border border-[#D4D1C7] rounded-lg focus:outline-none focus:border-[#5F6A54] bg-white text-[#3D3D3D]"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#5F6A54] text-[#F3F0E8] py-2.5 rounded-lg font-medium hover:bg-[#4A5343] transition-colors disabled:opacity-50"
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>
          </form>

          <p className="text-center text-sm text-[#8E927B] mt-6">
            ¿Problemas al iniciar sesión? Contacta con soporte
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useEffect } from "react"
import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react"
import { useCart, formatPrice } from "@/lib/cart-context"

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    getWhatsAppUrl,
  } = useCart()

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [closeCart])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#F3F0E8] z-50 shadow-2xl flex flex-col animate-slide-in-right">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#D4D1C7]">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#5F6A54]" />
            <h2 className="font-serif text-xl font-medium text-[#3D3D3D]">
              Tu selección
            </h2>
            {totalItems > 0 && (
              <span className="px-2 py-0.5 text-xs font-medium bg-[#5F6A54] text-[#F3F0E8] rounded-full">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-[#E8E5DC] rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-5 h-5 text-[#3D3D3D]" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-16 h-16 text-[#D4D1C7] mb-4" />
              <p className="text-[#6B6B6B] text-lg">Tu selección está vacía</p>
              <p className="text-[#8E927B] text-sm mt-2">
                Explorá nuestras obras y agregá las que te gusten
              </p>
              <button
                onClick={closeCart}
                className="mt-6 px-6 py-3 bg-[#5F6A54] text-[#F3F0E8] rounded-full font-medium hover:bg-[#4A5343] transition-colors"
              >
                Ver catálogo
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.artwork.id}
                  className="flex gap-4 p-4 bg-white rounded-xl shadow-sm"
                >
                  {/* Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.artwork.images[0] || "/placeholder.svg"}
                      alt={item.artwork.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-base font-medium text-[#3D3D3D] truncate">
                      {item.artwork.name}
                    </h3>
                    <p className="text-sm text-[#8E927B]">{item.artwork.dimensions}</p>
                    <p className="text-sm font-medium text-[#5F6A54] mt-1">
                      {item.artwork.price ? formatPrice(item.artwork.price) : "Consultar"}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.artwork.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-[#F3F0E8] rounded-full hover:bg-[#E8E5DC] transition-colors"
                          aria-label="Reducir cantidad"
                        >
                          <Minus className="w-3 h-3 text-[#3D3D3D]" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium text-[#3D3D3D]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.artwork.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-[#F3F0E8] rounded-full hover:bg-[#E8E5DC] transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="w-3 h-3 text-[#3D3D3D]" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.artwork.id)}
                        className="p-1.5 text-[#6B6B6B] hover:text-red-500 transition-colors"
                        aria-label="Eliminar del carrito"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with totals and actions */}
        {items.length > 0 && (
          <div className="border-t border-[#D4D1C7] p-6 bg-white">
            {/* Subtotal */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[#6B6B6B]">Total estimado</span>
              <span className="text-xl font-serif font-medium text-[#3D3D3D]">
                {formatPrice(totalPrice)}
              </span>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#5F6A54] text-[#F3F0E8] rounded-full font-medium hover:bg-[#4A5343] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Finalizar por WhatsApp
              </a>
              <button
                onClick={closeCart}
                className="w-full px-6 py-3 text-[#5F6A54] font-medium border border-[#5F6A54] rounded-full hover:bg-[#5F6A54] hover:text-[#F3F0E8] transition-colors"
              >
                Seguir viendo obras
              </button>
            </div>

            {/* Note */}
            <p className="mt-4 text-xs text-center text-[#8E927B]">
              Todas las obras incluyen certificado de autenticidad
            </p>
          </div>
        )}
      </div>
    </>
  )
}

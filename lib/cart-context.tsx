"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Artwork } from "./artworks"

// WhatsApp number - easy to change in one place
export const WHATSAPP_NUMBER = "5491158060140"

export interface CartItem {
  artwork: Artwork
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (artwork: Artwork) => void
  removeFromCart: (artworkId: string) => void
  updateQuantity: (artworkId: string, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  totalItems: number
  totalPrice: number
  generateWhatsAppMessage: () => string
  getWhatsAppUrl: () => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const addToCart = useCallback((artwork: Artwork) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.artwork.id === artwork.id)
      if (existing) {
        return prev.map((item) =>
          item.artwork.id === artwork.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { artwork, quantity: 1 }]
    })
    setIsOpen(true)
  }, [])

  const removeFromCart = useCallback((artworkId: string) => {
    setItems((prev) => prev.filter((item) => item.artwork.id !== artworkId))
  }, [])

  const updateQuantity = useCallback((artworkId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((item) => item.artwork.id !== artworkId))
    } else {
      setItems((prev) =>
        prev.map((item) => (item.artwork.id === artworkId ? { ...item, quantity } : item))
      )
    }
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const openCart = useCallback(() => setIsOpen(true), [])
  const closeCart = useCallback(() => setIsOpen(false), [])
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), [])

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = items.reduce((sum, item) => sum + (item.artwork.price || 0) * item.quantity, 0)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const generateWhatsAppMessage = useCallback(() => {
    if (items.length === 0) return ""

    const greeting = "Hola, vi estas obras en la web de Dellepiane y quiero consultar por las siguientes piezas:"
    
    const artworkLines = items.map((item) => {
      const price = item.artwork.price ? formatPrice(item.artwork.price) : "Consultar"
      const qty = item.quantity > 1 ? ` (x${item.quantity})` : ""
      return `- ${item.artwork.name}${qty} — ${price}`
    }).join("\n")

    const total = `\nTotal estimado: ${formatPrice(totalPrice)}`
    const closing = "\n\nQuisiera más información sobre disponibilidad y forma de compra. Gracias."

    return `${greeting}\n\n${artworkLines}${total}${closing}`
  }, [items, totalPrice])

  const getWhatsAppUrl = useCallback(() => {
    const message = encodeURIComponent(generateWhatsAppMessage())
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
  }, [generateWhatsAppMessage])

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isOpen,
        openCart,
        closeCart,
        toggleCart,
        totalItems,
        totalPrice,
        generateWhatsAppMessage,
        getWhatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

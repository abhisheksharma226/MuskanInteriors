"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in booking a free consultation with Muskan Interiors."
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919975542228?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 p-2 bg-white rounded-lg shadow-lg text-sm w-48 text-center text-gray-600">
            Chat with us on WhatsApp
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white"></div>
          </div>
        )}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </div>
  )
}

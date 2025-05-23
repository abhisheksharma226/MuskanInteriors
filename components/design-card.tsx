"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

interface Design {
  id: number
  title: string
  description: string
  image: string
}

interface DesignCardProps {
  design: Design
  onRequestQuote: () => void
}

export default function DesignCard({ design, onRequestQuote }: DesignCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64">
        <Image src={design.image || "/placeholder.svg"} alt={design.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{design.title}</h3>
        <p className="text-gray-600 mb-6">{design.description}</p>
        <Button onClick={onRequestQuote} className="w-full bg-gray-900 hover:bg-gray-800 text-white">
          Request This Design
        </Button>
      </div>
    </div>
  )
}

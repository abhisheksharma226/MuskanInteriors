"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import DesignCard from "@/components/design-card"
import RequestQuoteModal from "@/components/request-quote-modal"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/breadcrumb"

// Sample design data - in a real app, this would come from a database or API
const designsByRoom = {
  kitchen: [
    {
      id: 1,
      title: "Modern Marble Kitchen",
      description: "Sleek design with premium marble countertops",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Rustic Farmhouse Kitchen",
      description: "Warm wood tones with vintage accents",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Minimalist White Kitchen",
      description: "Clean lines and bright, open spaces",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Industrial Style Kitchen",
      description: "Raw materials with contemporary functionality",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Luxury Chef's Kitchen",
      description: "Professional-grade appliances in an elegant setting",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Contemporary Open Kitchen",
      description: "Seamless flow with dining and living areas",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Traditional Wooden Kitchen",
      description: "Classic design with modern conveniences",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Scandinavian Kitchen",
      description: "Light woods with functional simplicity",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Mediterranean Kitchen",
      description: "Warm colors with artisanal touches",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Smart Modern Kitchen",
      description: "Integrated technology with elegant design",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  bathroom: [
    {
      id: 1,
      title: "Spa-Inspired Bathroom",
      description: "Tranquil retreat with natural elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Luxury Marble Bathroom",
      description: "Opulent design with premium fixtures",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Modern Minimalist Bathroom",
      description: "Clean lines with sophisticated simplicity",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Classic White Bathroom",
      description: "Timeless design with elegant details",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Industrial Chic Bathroom",
      description: "Raw materials with refined finishes",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Contemporary Black Bathroom",
      description: "Bold contrast with luxurious touches",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Natural Wood Bathroom",
      description: "Warm tones with organic elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Art Deco Bathroom",
      description: "Geometric patterns with glamorous details",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Japanese Zen Bathroom",
      description: "Minimalist design with peaceful ambiance",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Mediterranean Blue Bathroom",
      description: "Vibrant tiles with artisanal character",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  "living-room": [
    {
      id: 1,
      title: "Contemporary Living Room",
      description: "Clean lines with sophisticated comfort",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Scandinavian Living Room",
      description: "Light and airy with functional design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Mid-Century Modern Living Room",
      description: "Retro-inspired with timeless appeal",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Luxury Classic Living Room",
      description: "Elegant details with refined comfort",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Minimalist Living Room",
      description: "Understated elegance with essential elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Bohemian Living Room",
      description: "Eclectic patterns with artistic flair",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Industrial Living Room",
      description: "Urban edge with comfortable textures",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Coastal Living Room",
      description: "Breezy style with natural elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Rustic Modern Living Room",
      description: "Warm woods with contemporary touches",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Art Collector's Living Room",
      description: "Gallery-inspired with statement pieces",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  bedroom: [
    {
      id: 1,
      title: "Serene Neutral Bedroom",
      description: "Calming palette with luxurious textures",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Modern Minimalist Bedroom",
      description: "Clean lines with essential comfort",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Luxury Master Bedroom",
      description: "Opulent details with premium finishes",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Scandinavian Bedroom",
      description: "Light woods with cozy simplicity",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Romantic Traditional Bedroom",
      description: "Classic elegance with refined details",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Contemporary Dark Bedroom",
      description: "Bold contrast with sophisticated comfort",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Coastal Retreat Bedroom",
      description: "Breezy style with natural elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Industrial Chic Bedroom",
      description: "Raw materials with refined comfort",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Mid-Century Bedroom",
      description: "Retro-inspired with timeless appeal",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Zen Japanese Bedroom",
      description: "Minimalist design with peaceful ambiance",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  balcony: [
    {
      id: 1,
      title: "Urban Oasis Balcony",
      description: "Green retreat in the city",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Mediterranean Balcony",
      description: "Terracotta and vibrant textiles",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Minimalist Balcony",
      description: "Clean lines with essential elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Bohemian Balcony Retreat",
      description: "Eclectic patterns with artistic flair",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Scandinavian Balcony",
      description: "Light woods with cozy simplicity",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Luxury Outdoor Lounge",
      description: "Premium materials with elegant comfort",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 7,
      title: "Zen Garden Balcony",
      description: "Peaceful design with natural elements",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 8,
      title: "Modern Dining Balcony",
      description: "Sleek furniture for outdoor entertaining",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 9,
      title: "Vertical Garden Balcony",
      description: "Lush greenery with space-saving design",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 10,
      title: "Coastal Balcony",
      description: "Breezy style with nautical touches",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
}

export default function RoomDesigns() {
  const params = useParams()
  const room = params.room as string
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedDesign, setSelectedDesign] = useState<any>(null)

  // Format room ID for display (e.g., "living-room" -> "Living Room")
  const formatRoomName = (roomId: string) => {
    return roomId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const designs = designsByRoom[room as keyof typeof designsByRoom] || []

  const handleRequestQuote = (design: any) => {
    setSelectedDesign(design)
    setIsModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-[#FFF4E6] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/get-quote">Get Quote</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href={`/get-quote/${room}`}>{formatRoomName(room)}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          {formatRoomName(room)} Designs
        </h1>
        <p className="text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Browse our premium {formatRoomName(room).toLowerCase()} designs and request a quote for your project.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {designs.map((design) => (
            <DesignCard key={design.id} design={design} onRequestQuote={() => handleRequestQuote(design)} />
          ))}
        </div>

        {isModalOpen && selectedDesign && (
          <RequestQuoteModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            design={selectedDesign}
            room={formatRoomName(room)}
          />
        )}
      </div>
    </div>
  )
}

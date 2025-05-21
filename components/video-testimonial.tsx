"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

interface VideoTestimonialProps {
  thumbnail: string
  name: string
  project: string
}

export function VideoTestimonial({ thumbnail, name, project }: VideoTestimonialProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div className="relative overflow-hidden rounded-lg shadow-sm cursor-pointer group" onClick={openModal}>
        <div className="relative aspect-video">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={`${name} testimonial`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 text-[#4a5d23] ml-1" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="font-medium">{name}</h3>
          <p className="text-sm text-white/80">{project}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={closeModal}>
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button className="absolute -top-10 right-0 text-white hover:text-gray-300" onClick={closeModal}>
              Close
            </button>

            <div className="relative aspect-video bg-black">
              {/* This would be a real video in production */}
              <div className="absolute inset-0 flex items-center justify-center text-white">
                <p>Video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

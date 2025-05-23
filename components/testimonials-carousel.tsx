"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  content: string
  project: string
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajiv Mehta",
      role: "Homeowner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Muskan Interiors transformed our house into a dream home. Their attention to detail and understanding of our needs was exceptional. The team was professional, and the project was completed on time and within budget.",
      project: "Residential Renovation",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Business Owner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "We hired Muskan Interiors for our office redesign, and the results exceeded our expectations. The space is now more functional, aesthetically pleasing, and our employees love the new environment. Highly recommended!",
      project: "Office Interior Design",
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Restaurant Owner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "The team at Muskan Interiors understood exactly what we wanted for our restaurant. They created a warm, inviting atmosphere that our customers love. The project was completed on schedule, and we couldn't be happier with the results.",
      project: "Restaurant Design",
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Homeowner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Working with Muskan Interiors was a pleasure from start to finish. They listened to our ideas and transformed them into a beautiful, functional space that perfectly suits our lifestyle. Their creativity and professionalism are unmatched.",
      project: "Villa Interior Design",
    },
    {
      id: 5,
      name: "Amit Patel",
      role: "Restaurant Owner",
      avatar: "/cus.jpg?height=100&width=100",
      content:
        "The team at Muskan Interiors understood exactly what we wanted for our restaurant. They created a warm, inviting atmosphere that our customers love. The project was completed on schedule, and we couldn't be happier with the results.",
      project: "Restaurant Design",
    },
    {
      id: 6,
      name: "Neha Gupta",
      role: "Homeowner",
      avatar: "/placeholder.svg?height=100&width=100",
      content:
        "Working with Muskan Interiors was a pleasure from start to finish. They listened to our ideas and transformed them into a beautiful, functional space that perfectly suits our lifestyle. Their creativity and professionalism are unmatched.",
      project: "Villa Interior Design",
    },
  ]

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 2 >= testimonials.length ? 0 : prevIndex + 2))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 2 < 0 ? testimonials.length - 2 : prevIndex - 2))
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [currentIndex])

  // Ensure we don't go out of bounds
  const safeIndex = (index: number) => {
    if (index >= testimonials.length) {
      return index - testimonials.length
    }
    return index
  }

  return (
    <div className="relative max-w-6xl mx-auto">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}
      >
        <TestimonialCard testimonial={testimonials[safeIndex(currentIndex)]} />
        {testimonials.length > 1 && <TestimonialCard testimonial={testimonials[safeIndex(currentIndex + 1)]} />}
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              Math.floor(currentIndex / 2) === index ? "bg-[#c9a55c]" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index * 2)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:flex items-center justify-center"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:flex items-center justify-center"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-6 w-6 text-gray-600" />
      </button>
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="mb-4 text-[#c9a55c]">
        <Quote className="h-8 w-8" />
      </div>

      <p className="text-gray-700 mb-6 flex-grow">{testimonial.content}</p>

      <div className="flex items-center text-gray-600">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>

        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.project}</p>
        </div>
      </div>
    </div>
  )
}

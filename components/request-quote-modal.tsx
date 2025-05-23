"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface Design {
  id: number
  title: string
  description: string
  image: string
}

interface RequestQuoteModalProps {
  isOpen: boolean
  onClose: () => void
  design: Design
  room: string
}

export default function RequestQuoteModal({ isOpen, onClose, design, room }: RequestQuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Close modal after showing success message
      setTimeout(() => {
        onClose()
      }, 3000)
    }, 1500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 z-10">
          <X size={24} />
        </button>

        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <Image src={design.image || "/placeholder.svg"} alt={design.title} fill className="object-cover" />
          </div>

          <div className="p-6 md:p-8">
            {!isSubmitted ? (
              <>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Request a Quote</h3>
                <p className="text-gray-600 mb-6">
                  {design.title} - {room}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label className="text-gray-600 mb-6" htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                     className="mt-1 bg-gray-100"

                    />
                  </div>

                  <div>
                    <Label className="text-gray-600 mb-6" htmlFor="contact">Email or Phone</Label>
                    <Input
                      id="contact"
                      name="contact"
                      value={formData.contact}
                      onChange={handleChange}
                      required
                      className="mt-1 bg-gray-100"
                      style={{ color: 'black' }}  
                    />
                  </div>

                  <div>
                    <Label className="text-gray-600 mb-6" htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, area, etc."
                      className="mt-1 bg-gray-100"
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Request Quote"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600">
                  Your quote request has been submitted. We'll contact you shortly with pricing and availability.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

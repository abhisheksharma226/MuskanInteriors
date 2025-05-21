"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate form
    if (!formData.name.trim()) {
      setError("Please enter your name")
      return
    }

    if (!formData.phone.trim()) {
      setError("Please enter your phone number")
      return
    }

    // Phone number validation (simple)
    const phoneRegex = /^\d{10}$/
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      setError("Please enter a valid 10-digit phone number")
      return
    }

    // Submit form
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", phone: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="bg-green-100 border border-green-200 text-green-800 rounded-lg p-4 text-center">
          Thank you! We'll call you back shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="bg-red-100 border border-red-200 text-red-800 rounded-lg p-3 text-sm">{error}</div>}

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              disabled={isSubmitting}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#c9a55c] hover:bg-[#b89346] text-white font-medium py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Request Callback"}
          </Button>
        </form>
      )}
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    time: "",
    projectType: "",
    message: "",
  })
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    projectType: "",
  })

  const validateForm = () => {
    let isValid = true
    const newErrors = {
      fullName: "",
      phone: "",
      email: "",
      date: "",
      time: "",
      projectType: "",
    }

    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
      isValid = false
    }

    // Phone validation
    const phoneRegex = /^\+?[0-9]{10,15}$/
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
      isValid = false
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    // Date validation
    if (!date) {
      newErrors.date = "Please select a date"
      isValid = false
    }

    // Time validation
    if (!formData.time) {
      newErrors.time = "Please select a time"
      isValid = false
    }

    // Project type validation
    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Reset form after successful submission
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        time: "",
        projectType: "",
        message: "",
      })
      setDate(undefined)

      alert("Your consultation has been booked successfully! We'll contact you shortly.")
    } catch (error) {
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          className={cn(errors.fullName && "border-red-500")}
        />
        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567"
          className={cn(errors.phone && "border-red-500")}
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
          className={cn(errors.email && "border-red-500")}
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label>Preferred Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                  errors.date && "border-red-500",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Select a date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
          {errors.date && <p className="text-sm text-red-500">{errors.date}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">Preferred Time</Label>
          <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))} value={formData.time}>
            <SelectTrigger id="time" className={cn(errors.time && "border-red-500")}>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && <p className="text-sm text-red-500">{errors.time}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType">Project Type</Label>
        <Select
          onValueChange={(value) => setFormData((prev) => ({ ...prev, projectType: value }))}
          value={formData.projectType}
        >
          <SelectTrigger id="projectType" className={cn(errors.projectType && "border-red-500")}>
            <SelectValue placeholder="Select project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="home">Home</SelectItem>
            <SelectItem value="office">Office</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.projectType && <p className="text-sm text-red-500">{errors.projectType}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message / Requirements</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project and requirements..."
          className="min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-olive-700 hover:bg-olive-800 text-white text-lg py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Book Now"
        )}
      </Button>
    </form>
  )
}

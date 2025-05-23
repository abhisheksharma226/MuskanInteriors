import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Homeowner",
      review:
        "Muskan Interiors transformed our living space completely. The consultation was thorough and they understood exactly what we wanted. Highly recommend their services!",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Office Manager",
      review:
        "We hired Muskan Interiors for our office renovation. From the initial consultation to the final execution, everything was handled professionally. Our workspace looks amazing now!",
      rating: 5,
    },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="border-olive-100 shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-olive-700 mb-4 italic">"{testimonial.review}"</p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-olive-200 flex items-center justify-center text-olive-800 font-semibold">
                {testimonial.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-semibold text-olive-800">{testimonial.name}</p>
                <p className="text-sm text-olive-600">{testimonial.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

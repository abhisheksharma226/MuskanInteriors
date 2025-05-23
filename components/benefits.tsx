import { Palette, Calculator, Users } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: <Palette className="h-6 w-6 text-olive-700" />,
      title: "Personalized Design Plan",
      description: "Get a customized design plan tailored to your specific needs and preferences.",
    },
    {
      icon: <Calculator className="h-6 w-6 text-olive-700" />,
      title: "Free Cost Estimate",
      description: "Receive a detailed cost breakdown with no hidden charges or obligations.",
    },
    {
      icon: <Users className="h-6 w-6 text-olive-700" />,
      title: "Expert Guidance",
      description: "Our experienced designers will guide you through every step of your project.",
    },
  ]

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="bg-cream-100 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300"
        >
          <div className="flex justify-center mb-4">{benefit.icon}</div>
          <h3 className="text-lg font-semibold text-olive-800 mb-2">{benefit.title}</h3>
          <p className="text-olive-600">{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}

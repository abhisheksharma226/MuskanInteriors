import { Utensils, Bed, Sofa, Briefcase } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "utensils":
        return <Utensils className="h-10 w-10 text-[#c9a55c]" />
      case "bed":
        return <Bed className="h-10 w-10 text-[#c9a55c]" />
      case "sofa":
        return <Sofa className="h-10 w-10 text-[#c9a55c]" />
      case "briefcase":
        return <Briefcase className="h-10 w-10 text-[#c9a55c]" />
      default:
        return <Utensils className="h-10 w-10 text-[#c9a55c]" />
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

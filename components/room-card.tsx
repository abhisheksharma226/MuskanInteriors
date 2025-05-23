import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface RoomCardProps {
  id: string
  title: string
  description: string
  image: string
}

export default function RoomCard({ id, title, description, image }: RoomCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white">
          <Link href={`/get-quote/${id}`}>View Designs</Link>
        </Button>
      </div>
    </div>
  )
}

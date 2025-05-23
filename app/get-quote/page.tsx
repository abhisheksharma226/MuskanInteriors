import RoomCard from "@/components/room-card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/breadcrumb"

const rooms = [
  {
    id: "kitchen",
    title: "Kitchen",
    description: "Explore modern and classic kitchen styles",
    image: "/kitchen-get.avif?height=400&width=600",
  },
  {
    id: "bathroom",
    title: "Bathroom",
    description: "Luxurious bathroom designs for your comfort",
    image: "/bath-get.jpg?height=400&width=600",
  },
  {
    id: "living-room",
    title: "Living Room",
    description: "Create a welcoming space for family and friends",
    image: "/living-get.jpg?height=400&width=600",
  },
  {
    id: "bedroom",
    title: "Bedroom",
    description: "Design your perfect sanctuary for rest",
    image: "/bedroom-get.jpg?height=400&width=600",
  },
  {
    id: "balcony",
    title: "Balcony",
    description: "Transform your outdoor space into a retreat",
    image: "/balcony-get.jpg?height=400&width=600",
  },
]

export default function GetQuote() {
  return (
    <div className="min-h-screen bg-[#FFF4E6] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb className="mb-8">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/get-quote">Get Quote</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Choose a Room to Get Started</h1>
        <p className="text-gray-700 mb-12 text-center max-w-2xl mx-auto">
          Select the room you'd like to redesign and explore our premium design options.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <RoomCard key={room.id} id={room.id} title={room.title} description={room.description} image={room.image} />
          ))}
        </div>
      </div>
    </div>
  )
}

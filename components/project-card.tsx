import Image from "next/image"

interface ProjectCardProps {
  title: string
  category: string
  image: string
}

export function ProjectCard({ title, category, image }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-sm">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="mb-1">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-[#c9a55c] rounded-full">{category}</span>
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>

      <div className="absolute inset-0 bg-[#4a5d23]/80 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <button className="px-4 py-2 bg-white text-[#4a5d23] rounded-full font-medium transform -translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
          View Project
        </button>
      </div>
    </div>
  )
}

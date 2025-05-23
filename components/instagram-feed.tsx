import Image from "next/image"
import { Instagram } from "lucide-react"

export function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: "/bedroom.jpg?height=300&width=300",
      likes: "20k",
      comments: "1.2k",
    },
    {
      id: 2,
      image: "/appa.avif?height=300&width=300",
      likes: "18.4k",
      comments: "2k",
    },
    {
      id: 3,
      image: "/hotel.jpg?height=300&width=300",
      likes: "26k",
      comments: "1.k",
    },
    {
      id: 4,
      image: "/kit.jpg?height=300&width=300",
      likes: "22.3k",
      comments: "529",
    },
    {
      id: 5,
      image: "/livi.avif?height=300&width=300",
      likes: "15k",
      comments: "1.9k",
    },
    {
      id: 6,
      image: "/off.jpg?height=300&width=300",
      likes: "30k",
      comments: 99,
    },
  ]

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {instagramPosts.map((post) => (
          <div key={post.id} className="group relative overflow-hidden rounded-lg">
            <div className="relative aspect-square">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
              <Instagram className="h-6 w-6 mb-2" />
              <div className="flex space-x-4 text-sm">
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#4a5d23] hover:text-[#3a4a1c] font-medium"
        >
          <Instagram className="h-5 w-5 mr-2" />
          Follow us on Instagram
        </a>
      </div>
    </div>
  )
}

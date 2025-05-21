"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

type RoomType = "kitchen" | "bedroom" | "living"

interface RoomOption {
  id: RoomType
  name: string
  image: string
  description: string
}

export function RoomPlanner() {
  const [selectedRoom, setSelectedRoom] = useState<RoomType>("kitchen")

  const rooms: RoomOption[] = [
    {
      id: "kitchen",
      name: "Kitchen",
      image: "/placeholder.svg?height=500&width=800",
      description:
        "Design your dream kitchen with our interactive planner. Choose from various layouts, cabinet styles, and color schemes.",
    },
    {
      id: "bedroom",
      name: "Bedroom",
      image: "/placeholder.svg?height=500&width=800",
      description:
        "Create a peaceful bedroom retreat. Explore different bed placements, storage solutions, and decor options.",
    },
    {
      id: "living",
      name: "Living Room",
      image: "/placeholder.svg?height=500&width=800",
      description:
        "Plan your perfect living space. Experiment with furniture arrangements, lighting options, and accent pieces.",
    },
  ]

  const currentRoom = rooms.find((room) => room.id === selectedRoom) || rooms[0]

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="p-6 md:border-r border-gray-100">
          <h3 className="text-xl font-medium mb-4">Select Room Type</h3>

          <div className="space-y-3">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(room.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  selectedRoom === room.id ? "bg-[#4a5d23] text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
              >
                {room.name}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-gray-600 mb-4">{currentRoom.description}</p>
            <Button className="w-full bg-[#c9a55c] hover:bg-[#b89346] text-white">Start Planning</Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={currentRoom.image || "/placeholder.svg"}
              alt={`${currentRoom.name} design visualization`}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/10"></div>

            {/* Interactive Hotspots */}
            {selectedRoom === "kitchen" && (
              <>
                <div
                  className="absolute top-[30%] left-[40%] w-6 h-6 bg-[#c9a55c] rounded-full animate-pulse cursor-pointer"
                  title="Cabinets"
                ></div>
                <div
                  className="absolute top-[50%] left-[60%] w-6 h-6 bg-[#c9a55c] rounded-full animate-pulse cursor-pointer"
                  title="Island"
                ></div>
              </>
            )}

            {selectedRoom === "bedroom" && (
              <>
                <div
                  className="absolute top-[40%] left-[30%] w-6 h-6 bg-[#c9a55c] rounded-full animate-pulse cursor-pointer"
                  title="Bed"
                ></div>
                <div
                  className="absolute top-[60%] left-[70%] w-6 h-6 bg-[#c9a55c] rounded-full animate-pulse cursor-pointer"
                  title="Wardrobe"
                ></div>
              </>
            )}

            {selectedRoom === "living" && (
              <>
                <div
                  className="absolute top-[35%] left-[45%] w-6 h-6 bg-[#c9a55c] rounded-full animate-pulse cursor-pointer"
                  title="Sofa"
                ></div>
                <div
                  className="absolute top-[55%] left-[25%] w-6 h-6 bg-[#c9a55c] rounded-full animate-pulse cursor-pointer"
                  title="TV Unit"
                ></div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

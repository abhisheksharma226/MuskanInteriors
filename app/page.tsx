"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { RoomPlanner } from "@/components/room-planner"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CallbackForm } from "@/components/callback-form"
import { VideoTestimonial } from "@/components/video-testimonial"
import { InstagramFeed } from "@/components/instagram-feed"
import { ProjectCard } from "@/components/project-card"
import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Phone, Mail, MapPin } from "lucide-react"


export default function Home() {

  const router = useRouter()

  const handleClick = () => {
    router.push("/booking")
  }

  return (
    <main className="min-h-screen">
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/backg.jpg?height=1080&width=1920"
            alt="Elegant interior design"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">Bringing Style to Life</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Transform your space into a masterpiece with Muskan Interiors, where elegance meets functionality.
            </p>
            <Button size="lg" onClick={handleClick}
             className="bg-[#c9a55c] hover:bg-[#b89346] text-white">
              Book Free Consultation <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      

      {/* What We Offer Section */}
      <section className="py-20 bg-[#f9f7f4]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">What We Offer</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Comprehensive interior design solutions tailored to your unique style and requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-600">
            <ServiceCard
              title="Modular Kitchen"
              description="Functional and stylish kitchen designs that maximize space and efficiency."
              icon="utensils"
            />
            <ServiceCard
              title="Bedroom Design"
              description="Create your perfect sanctuary with our comfortable and elegant bedroom designs."
              icon="bed"
            />
            <ServiceCard
              title="Living Room"
              description="Stunning living spaces that balance aesthetics with everyday comfort."
              icon="sofa"
            />
            <ServiceCard
              title="Office Interiors"
              description="Professional workspace designs that inspire productivity and creativity."
              icon="briefcase"
            />
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Transformations</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            See the dramatic before and after results of our interior design projects.
          </p>

          <BeforeAfterSlider
            beforeImage="/after.jpg?height=600&width=800"
            afterImage="/before.jpeg?height=600&width=800"
            beforeAlt="Before renovation"
            afterAlt="After renovation"
          />
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 bg-[#f9f7f4]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Latest Projects</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our recent interior design projects and get inspired.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Modern Apartment Makeover"
              category="Residential"
              image="/appa.avif?height=400&width=600"
            />
            <ProjectCard
              title="Luxury Villa Interior"
              category="Residential"
              image="/villa.avif?height=400&width=600"
            />
            <ProjectCard
              title="Corporate Office Design"
              category="Commercial"
              image="/off.jpg?height=400&width=600"
            />
            <ProjectCard
              title="Restaurant Renovation"
              category="Commercial"
              image="/res.avif?height=400&width=600"
            />
            <ProjectCard
              title="Boutique Hotel Lobby"
              category="Hospitality"
              image="/hotel.jpg?height=400&width=600"
            />
            <ProjectCard
              title="Modern Kitchen Design"
              category="Residential"
              image="/kitchen.jpg?height=400&width=600"
            />
          </div>
        </div>
      </section>

      {/* Room Planner Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Interactive Room Planner</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Visualize your dream space with our interactive room planner.
          </p>

          <RoomPlanner />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#f9f7f4]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">What Our Clients Say</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Hear from our satisfied clients about their experience with Muskan Interiors.
          </p>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Areas We Serve</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Providing exceptional interior design services across these cities.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-4xl mx-auto text-gray-600">
            <div className="p-4 border border-[#c9a55c]/20 rounded-lg bg-white shadow-sm">
              <p className="font-medium text-lg">Kalyan</p>
            </div>
            <div className="p-4 border border-[#c9a55c]/20 rounded-lg bg-white shadow-sm">
              <p className="font-medium text-lg">Dombivli</p>
            </div>
            <div className="p-4 border border-[#c9a55c]/20 rounded-lg bg-white shadow-sm">
              <p className="font-medium text-lg">Ulhasnagar</p>
            </div>
            <div className="p-4 border border-[#c9a55c]/20 rounded-lg bg-white shadow-sm">
              <p className="font-medium text-lg">Thane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Callback Form Section */}
      <section className="py-20 bg-[#4a5d23] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Request a Callback</h2>
            <p className="mb-8">Leave your details and we'll call you back to discuss your interior design needs.</p>

            <CallbackForm />
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Follow Our Journey</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Check out our latest projects and behind-the-scenes on Instagram.
          </p>

          <InstagramFeed />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f9f7f4]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Why Choose Us</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            What sets Muskan Interiors apart from the rest.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#c9a55c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-600">Years Experience</h3>
              <p className="text-gray-600">A decade of creating beautiful spaces.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#c9a55c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">150+</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-600">Projects Completed</h3>
              <p className="text-gray-600">Successful transformations and happy clients.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-[#c9a55c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">100%</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-600">Client Satisfaction</h3>
              <p className="text-gray-600">Our commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Client Video Testimonials</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Watch what our clients have to say about their experience with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <VideoTestimonial
              thumbnail="/placeholder.svg?height=300&width=500"
              name="Priya Sharma"
              project="Modern Apartment Renovation"
            />
            <VideoTestimonial
              thumbnail="/placeholder.svg?height=300&width=500"
              name="Rajesh Kumar"
              project="Office Interior Design"
            />
            <VideoTestimonial
              thumbnail="/placeholder.svg?height=300&width=500"
              name="Anita Patel"
              project="Luxury Villa Makeover"
            />
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-[#f9f7f4]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-gray-600">Design Insights</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore our blog for interior design tips, trends, and inspiration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">2023 Interior Design Trends</h3>
                <p className="text-gray-600 mb-4">
                  Discover the latest trends that are shaping interior design this year.
                </p>
                <a href="#" className="text-[#4a5d23] font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Small Space Design Tips</h3>
                <p className="text-gray-600 mb-4">Learn how to maximize functionality in compact living spaces.</p>
                <a href="#" className="text-[#4a5d23] font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Blog post thumbnail"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Color Psychology in Design</h3>
                <p className="text-gray-600 mb-4">
                  How different colors affect mood and perception in interior spaces.
                </p>
                <a href="#" className="text-[#4a5d23] font-medium hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#333] text-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Muskan Interiors</h3>
              <p className="mb-4">Transforming spaces into beautiful, functional environments since 2013.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#c9a55c]">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#c9a55c]">
                  <span className="sr-only">Instagram</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#c9a55c]">
                  <span className="sr-only">Pinterest</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <path d="M19 12H5"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 mr-2 mt-0.5" />
                  <span>+91 9876543210</span>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 mr-2 mt-0.5" />
                  <span>info@muskaninteriors.com</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                  <span>123 Design Street, Dhanbad, Jharkhand, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-[#c9a55c]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c9a55c]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c9a55c]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c9a55c]">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c9a55c]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#c9a55c]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Muskan Interiors. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

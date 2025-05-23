"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const router = useRouter()

  const handleClick = () => {
    router.push("/get-quote")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className={`text-2xl font-serif font-bold ${isScrolled ? "text-[#4a5d23]" : "text-white"}`}>
              Muskan Interiors
            </span>
          </Link>

          {isMobile ? (
            <button
              onClick={toggleMenu}
              className={`p-2 ${isScrolled ? "text-gray-800" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          ) : (
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-[#c9a55c] transition-colors`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-[#c9a55c] transition-colors`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-[#c9a55c] transition-colors`}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-[#c9a55c] transition-colors`}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-[#c9a55c] transition-colors`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`font-medium ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-[#c9a55c] transition-colors`}
              >
                Contact
              </Link>
              <Button 
                onClick={handleClick}
                className={`${
                  isScrolled
                    ? "bg-[#4a5d23] hover:bg-[#3a4a1c] text-white"
                    : "bg-[#c9a55c] hover:bg-[#b89346] text-white"
                }`}
              >
                Get a Quote
              </Button>
            </nav>
          )}
        </div>

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-[#c9a55c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-gray-800 hover:text-[#c9a55c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-medium text-gray-800 hover:text-[#c9a55c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/projects"
                className="font-medium text-gray-800 hover:text-[#c9a55c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="font-medium text-gray-800 hover:text-[#c9a55c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="font-medium text-gray-800 hover:text-[#c9a55c] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button
                className="bg-[#4a5d23] hover:bg-[#3a4a1c] text-white w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

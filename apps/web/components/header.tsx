"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <header
        className={`relative md:fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left: Logo */}
            <div className="flex items-center gap-2">
              <Globe className="h-6 w-6 text-navy" />
              <span className="font-bold text-lg text-navy">ftiaxesite.gr</span>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-teal"
              >
                Λειτουργίες
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-teal"
              >
                Διαδικασία
              </button>
            </div>

            {/* Right: CTA Button - hidden on mobile, shown on desktop */}
            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:inline-flex bg-teal hover:bg-teal/90 text-white font-semibold"
            >
              Φτιάξε το site σου
            </Button>
          </div>
        </nav>
      </header>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-white via-white to-transparent pt-8 pb-2">
        <Button
          onClick={() => scrollToSection("contact")}
          className="w-full bg-teal hover:bg-teal/90 text-white font-semibold shadow-lg py-6 text-base rounded-none"
        >
          Φτιάξε το site σου
        </Button>
      </div>
    </>
  )
}


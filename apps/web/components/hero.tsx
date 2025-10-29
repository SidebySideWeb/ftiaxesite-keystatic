"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

interface HeroProps {
      content: {
        heroHeadline: string
        heroSubheadline: string
        heroCta: string
        heroImage: string
        heroBadge: string
        heroStats: string
      }
    }

export default function Hero({ content }: HeroProps) {
  const handleCTAClick = () => {
    const contactForm = document.getElementById("contact")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gradient-to-br from-white via-teal/5 to-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6 lg:gap-8">
                <div className="inline-flex items-center gap-2 text-[#4ECDC4] font-medium text-sm md:text-base">
                  <Sparkles className="w-5 h-5" />
                  <span>{content.heroBadge}</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1B264F] leading-tight text-balance">
                  {content.heroHeadline}
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">{content.heroSubheadline}</p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Button
                    onClick={handleCTAClick}
                    size="lg"
                    className="bg-[#1B264F] hover:bg-[#1B264F]/90 text-white px-8 py-6 text-lg font-semibold"
                  >
                    {content.heroCta}
                  </Button>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#4ECDC4] border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-[#1B264F] border-2 border-white" />
                  <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white" />
                </div>
                <span className="text-gray-600">{content.heroStats}</span>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#1B264F]">48h</div>
                <div className="text-sm text-gray-600">Παράδοση</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#1B264F]">250€</div>
                <div className="text-sm text-gray-600">Από</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#1B264F]">AI</div>
                <div className="text-sm text-gray-600">Τεχνολογία</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Placeholder illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4ECDC4]/10 to-[#1B264F]/10 rounded-3xl" />

              {/* Hero Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src={content.heroImage || "/images/hero-image.jpg"}
                  alt="AI-Powered Web Development Dashboard"
                  className="w-full h-full object-contain rounded-3xl shadow-2xl"
                />
              </div>

              {/* Floating accent elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#4ECDC4] rounded-2xl opacity-20 blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#1B264F] rounded-2xl opacity-20 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

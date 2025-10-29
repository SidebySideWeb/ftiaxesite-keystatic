import { Clock, Euro, TrendingUp, Shield, Smartphone, Zap } from "lucide-react"

interface FeaturesProps {
  content: {
    featuresTitle: string
    featuresSubtitle: string
    featuresItems: Array<{
      title: string
      description: string
      icon: string
    }>
  }
}

const iconMap = {
  Clock,
  Euro,
  TrendingUp,
  Shield,
  Smartphone,
  Zap,
}

export default function Features({ content }: FeaturesProps) {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-navy/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">{content.featuresTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">{content.featuresSubtitle}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.featuresItems.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap] || Clock
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-teal" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-navy mb-2">{feature.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

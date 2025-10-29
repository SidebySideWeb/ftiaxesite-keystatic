import { FileText, Wand2, CheckCircle2 } from "lucide-react"

interface HowWeWorkProps {
  content: {
    howWeWorkTitle: string
    howWeWorkSubtitle: string
    processSteps: Array<{
      number: string
      title: string
      description: string
      icon: string
    }>
  }
}

const iconMap = {
  FileText,
  Wand2,
  CheckCircle2,
}

export default function HowWeWork({ content }: HowWeWorkProps) {
  return (
    <section id="process" className="py-16 md:py-24 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal/5 to-transparent -z-10" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{content.howWeWorkTitle}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{content.howWeWorkSubtitle}</p>
        </div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {content.processSteps.map((step, index) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap] || FileText
              const bgColor = index % 2 === 0 ? "bg-teal/10" : "bg-navy/10"
              const borderColor = index % 2 === 0 ? "border-teal" : "border-navy"
              const iconBg = index % 2 === 0 ? "bg-teal" : "bg-navy"
              const numberBg = index % 2 === 0 ? "bg-teal" : "bg-navy"
              const hoverBg = index % 2 === 0 ? "hover:bg-teal/20" : "hover:bg-navy/20"
              
              return (
                <div key={index} className="relative">
                  <div
                    className={`relative ${bgColor} ${hoverBg} border-2 ${borderColor} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 h-full flex flex-col items-center text-center`}
                  >
                    <div className={`${numberBg} text-white px-4 py-1 rounded-full text-sm font-bold mb-6`}>
                      ΒΗΜΑ {step.number}
                    </div>

                    {/* Icon circle */}
                    <div
                      className={`w-20 h-20 rounded-full ${iconBg} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-navy mb-3">{step.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

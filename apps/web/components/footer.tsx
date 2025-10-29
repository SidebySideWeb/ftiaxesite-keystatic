import { Mail, Phone, Globe } from "lucide-react"
import Link from "next/link"

const content = {
  footer: {
    brand: {
      name: "ftiaxesite.gr",
      tagline: "AI Websites σε 48 Ώρες",
    },
    contact: {
      title: "Επικοινωνία",
      email: "info@ftiaxesite.gr",
      phone: "+30 210 1234567",
    },
    links: {
      title: "Χρήσιμα",
      items: [
        { label: "Όροι Χρήσης", href: "/terms" },
        { label: "Πολιτική Απορρήτου", href: "/privacy" },
      ],
    },
    copyright: "© 2025 ftiaxesite.gr – Κατασκευή Ιστοσελίδων με AI",
  },
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <Globe className="h-6 w-6 text-teal" />
              <h3 className="text-xl font-bold">{content.footer.brand.name}</h3>
            </div>
            <p className="text-gray-300 text-sm">{content.footer.brand.tagline}</p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 text-teal">{content.footer.contact.title}</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${content.footer.contact.email}`}
                className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-teal transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                {content.footer.contact.email}
              </a>
              <a
                href={`tel:${content.footer.contact.phone}`}
                className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-teal transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                {content.footer.contact.phone}
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 text-teal">{content.footer.links.title}</h4>
            <ul className="space-y-2">
              {content.footer.links.items.map((link) => (
                <li key={link.href}>
                  <Link href={link.href as any} className="text-gray-300 hover:text-teal transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

import { Phone, Mail, Globe, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#c41e3a]">GET IN TOUCH</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#c41e3a] rounded-full flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Contact Us</h3>
            <a href="tel:+919238312005" className="text-gray-300 hover:text-[#c41e3a] transition-colors">
              +91 9238312005
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#c41e3a] rounded-full flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Email</h3>
            <a href="mailto:hello@maatarini.net" className="text-gray-300 hover:text-[#c41e3a] transition-colors">
              hello@maatarini.net
            </a>
          </div>

          {/* Website */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#c41e3a] rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Website</h3>
            <a
              href="https://www.maatarini.net"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#c41e3a] transition-colors"
            >
              www.maatarini.net
            </a>
          </div>

          {/* Locations */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-[#c41e3a] rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2 text-white">Locations</h3>
            <p className="text-gray-300">Kesura, Bhubaneswar, India</p>
            <p className="text-gray-300">Rudra Heights, Varanasi, India</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400">© 2025 MAA TARINI ENTERPRISES. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

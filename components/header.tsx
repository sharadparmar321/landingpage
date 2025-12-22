import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="MAA TARINI ENTERPRISES Logo"
              width={180}
              height={50}
              className="h-10 md:h-12 w-auto"
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#who-we-are" className="text-base md:text-lg font-semibold uppercase tracking-wider text-gray-700 hover:text-[#c41e3a] px-2 py-1 rounded hover:bg-[#fff6f7] focus:outline-none focus:ring-2 focus:ring-[#c41e3a]/30">WHO WE ARE</a>
          <a href="#our-expertise" className="text-base md:text-lg font-semibold uppercase tracking-wider text-gray-700 hover:text-[#c41e3a] px-2 py-1 rounded hover:bg-[#fff6f7] focus:outline-none focus:ring-2 focus:ring-[#c41e3a]/30">OUR EXPERTISE</a>
          <a href="#what-we-offer" className="text-base md:text-lg font-semibold uppercase tracking-wider text-gray-700 hover:text-[#c41e3a] px-2 py-1 rounded hover:bg-[#fff6f7] focus:outline-none focus:ring-2 focus:ring-[#c41e3a]/30">WHAT WE OFFER</a>
        </nav>
      </div>
    </header>
  )
} 

import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
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
    </header>
  )
}

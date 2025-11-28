import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
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

        {/* Company name centered */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#c41e3a] tracking-wide text-center absolute left-1/2 -translate-x-1/2">
          MAA TARINI ENTERPRISES
        </h1>

        {/* Empty div for balance */}
        <div className="w-[180px] hidden md:block"></div>
      </div>
    </header>
  )
}

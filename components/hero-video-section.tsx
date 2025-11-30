"use client"

export function HeroVideoSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/Untitled design.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6 drop-shadow-lg">
          Welcome to MAA TARINI ENTERPRISES
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mb-8 drop-shadow-md">
          Your trusted partner in construction excellence
        </p>
      </div>
    </section>
  )
}

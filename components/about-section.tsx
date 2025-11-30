export function AboutSection() {
  return (
    <section className="py-16 bg-linear-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#c41e3a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c41e3a]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#c41e3a]">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Main content with accent border */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-linear-to-b from-[#c41e3a] to-transparent"></div>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#c41e3a]/10 flex items-center justify-center group-hover:bg-[#c41e3a]/20 transition-colors">
                    <svg className="w-6 h-6 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Established in 2015 with a singular mission: to bridge the gap between cement suppliers and consumers by delivering exceptional customer experiences and offering the most competitive rates.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-[#c41e3a]/10 flex items-center justify-center group-hover:bg-[#c41e3a]/20 transition-colors">
                    <svg className="w-6 h-6 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Our Commitment</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We don't just meet industry standards; we set them. Our growth and success are built on the trust and satisfaction of our customers, and we are committed to maintaining and enhancing this relationship for years to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Stats/Highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-linear-to-br from-[#c41e3a]/10 to-transparent rounded-2xl p-6 border border-[#c41e3a]/20 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-[#c41e3a] mb-2">2015</div>
              <div className="text-sm text-muted-foreground">Year Established</div>
            </div>
            <div className="bg-linear-to-br from-[#c41e3a]/10 to-transparent rounded-2xl p-6 border border-[#c41e3a]/20 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-[#c41e3a] mb-2">40+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="bg-linear-to-br from-[#c41e3a]/10 to-transparent rounded-2xl p-6 border border-[#c41e3a]/20 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-[#c41e3a] mb-2">8</div>
              <div className="text-sm text-muted-foreground">States Coverage</div>
            </div>
            <div className="bg-linear-to-br from-[#c41e3a]/10 to-transparent rounded-2xl p-6 border border-[#c41e3a]/20 hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-[#c41e3a] mb-2">Best</div>
              <div className="text-sm text-muted-foreground">Market Rates</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function OfferingsSection() {
  const offerings = [
    {
      title: "Industrial Products",
      items: [
        "Phosphogypsum (Chemical Gypsum)",
        "Slag from steel plants",
        "Clinker"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      iconColor: "text-blue-600"
    },
    {
      title: "Minerals & Aggregates",
      items: [
        "M-Sand",
        "Dust, metal aggregates",
        "Limestone",
        "Dolomite"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      iconColor: "text-green-600"
    },
    {
      title: "Cement & Concrete Inputs",
      items: [
        "OPC / PPC / PSC Cement",
        "GGBS & GGBFS",
        "Fly Ash (Dry & Wet)",
        "Admixture"
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <section className="py-16 bg-linear-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#c41e3a]">
          OUR OFFERINGS
        </h2>
        
        <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          MTCS is the preferred partner for material supply because we source directly from certified manufacturers, ensuring consistent quality at every stage. Our optimised procurement and logistics routes enable highly competitive pricing, delivering both efficiency and value to every customer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={index}
              className={`relative group bg-gradient-to-br ${offering.gradient} backdrop-blur-sm rounded-2xl p-8 border-2 ${offering.border} hover:shadow-2xl hover:scale-105 transition-all duration-300`}
            >
              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-[#c41e3a] transition-colors">
                  {offering.title}
                </h3>
                
                <ul className="space-y-2">
                  {offering.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-[#c41e3a] mt-1 shrink-0">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon at bottom right */}
              <div className={`absolute bottom-6 right-6 ${offering.iconColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}>
                {offering.icon}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#c41e3a]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#c41e3a]/10 px-6 py-3 rounded-full">
            <svg className="w-5 h-5 text-[#c41e3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-semibold text-[#c41e3a]">Certified Quality | Competitive Pricing | Timely Delivery</span>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"

export function IndustriesSection() {
  const industries = [
    {
      title: "Commercial RMC",
      description: "Commercial RMC plants rely on consistent, high-performance materials to maintain uniform mix designs and meet diverse client specifications. MTCS supplies OPC cement, GGBS, and high-quality admixtures directly to leading RMC units. With optimized logistics, plant-level coordination, and dependable delivery schedules, we provide uninterrupted material flow that keeps commercial batching operations running smoothly and efficiently.",
      image: "/images/industriesServerBlock/CommercialRMC.png",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      title: "Mining Industry",
      description: "Mining operations require reliable, high-strength materials for critical applications such as roofing support, backfilling, shotcreting, and underground stabilization. MTCS supplies OPC cement tailored to these demanding mining environments across all operational needs. With dependable delivery schedules, on-ground coordination, and robust logistics planning, we provide uninterrupted cement supply that keeps mining activities running safely and efficiently.",
      image: "/images/industriesServerBlock/MiningIndustry.png",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      title: "Precast Manufactures",
      description: "Precast manufacturers across India rely on high-strength, consistent raw materials to achieve precision, durability, and faster project timelines. We supply OPC cement directly to leading precast units, ensuring uninterrupted production and uniform concrete performance. Through reliable logistics and plant-level coordination, MTCS delivers timely OPC shipments that keep precast operations running efficiently.",
      image: "/images/industriesServerBlock/Precast Manufactures.png",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      title: "Infrastructure Projects",
      description: "Infrastructure projects such as tunnels, roads, bridges, and flagship buildings demand consistent material quality and reliable supply to maintain structural integrity and meet strict execution timelines. With coordinated logistics and on-ground support, we enable uninterrupted cement delivery that keeps large-scale infrastructure projects moving efficiently and without delay.",
      image: "/images/industriesServerBlock/infraProject.png",
      gradient: "from-gray-700 to-gray-900"
    }
  ]

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c41e3a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c41e3a]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#c41e3a]">
          INDUSTRIES WE SERVE
        </h2>
        
        <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto mb-12">
          Backed by a strong nationwide presence, we provide every critical construction input needed for continuous operations. These four core customer verticals rely on us for consistent quality and dependable supply.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group h-80 md:h-72 [perspective:1000px]"
            >
              <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 h-full w-full rounded-2xl bg-gray-100 border-2 border-gray-200 [backface-visibility:hidden] shadow-xl">
                  <div className="flex flex-col items-center justify-center h-full p-8 relative overflow-hidden">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
                    
                    {/* Image */}
                    <div className="relative w-24 h-24 mb-4 transform group-hover:scale-110 transition-transform duration-300 z-10">
                      <Image
                        src={industry.image}
                        alt={industry.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-800 text-center relative z-10">
                      {industry.title}
                    </h3>
                    
                    {/* Hover indicator */}
                    <div className="absolute bottom-4 text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      Hover to learn more →
                    </div>
                  </div>
                </div>
                
                {/* Back Side */}
                <div className={`absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br ${industry.gradient} [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 overflow-y-auto shadow-xl`}>
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="relative w-12 h-12 shrink-0">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-contain brightness-0 invert"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-100">
                        {industry.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 text-sm leading-relaxed flex-1">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const departments = [
  "CENTRAL PUBLIC WORKS DEPARTMENT",
  "NATIONAL HIGHWAY AUTHORITY OF INDIA",
  "INDIAN RAILWAYS",
  "RAIL VIKAS NIGAM LIMITED",
  "IRCON INTERNATIONAL LIMITED",
  "NATIONAL THERMAL POWER CORPORATION",
  "AIRPORTS AUTHORITY OF INDIA",
  "INDIAN OIL CORPORATION LIMITED",
  "NATIONAL MINERAL DEVELOPMENT CORPORATION",
  "NATIONAL HYDROELECTRIC POWER CORPORATION",
  "DELHI METRO RAIL CORPORATION",
  "CHENNAI METRO RAIL CORPORATION",
]

export function DepartmentsMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#c41e3a]">SERVICEABLE DEPARTMENTS</h2>
        
        <p className="text-center text-lg text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          MTCS plays a crucial role in assisting companies and brands with government approvals by managing the complete liaisoning process required for enlistment in approved vendor lists. We handle all documentation, submissions, and compliance formalities, ensuring a smooth and efficient approval journey. By taking ownership of the tedious procedural workload, we enable businesses to focus on their core operations while we secure the necessary government clearances—making MTCS a trusted partner for streamlined vendor registration and regulatory coordination.
        </p>

        <div className="hidden lg:flex justify-center items-center gap-8 max-w-7xl mx-auto">
          {/* Left column - 6 departments */}
          <div className="flex flex-col gap-6 justify-center">
            <DepartmentBadge name={departments[0]} />
            <DepartmentBadge name={departments[1]} />
            <DepartmentBadge name={departments[2]} />
            <DepartmentBadge name={departments[3]} />
            <DepartmentBadge name={departments[4]} />
            <DepartmentBadge name={departments[5]} />
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/image1.png"
              alt="Map of India highlighting operational states: Odisha, Bihar, Jharkhand, Uttar Pradesh,Madhya Pradesh, Chhattisgarh, Maharashtra and West Bengal"
              className="w-[400px] h-auto object-contain"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center max-w-md">
              Our operations span across{" "}
              <span className="font-semibold text-[#c41e3a]">
                Odisha, Bihar, Jharkhand, Uttar Pradesh, Madhya Pradesh, Chhattisgarh, Maharashtra and West Bengal
              </span>
            </p>
          </div>

          {/* Right column - 6 departments */}
          <div className="flex flex-col gap-6 justify-center">
            <DepartmentBadge name={departments[6]} />
            <DepartmentBadge name={departments[7]} />
            <DepartmentBadge name={departments[8]} />
            <DepartmentBadge name={departments[9]} />
            <DepartmentBadge name={departments[10]} />
            <DepartmentBadge name={departments[11]} />
          </div>
        </div>

        <div className="lg:hidden">
          <div className="max-w-xs mx-auto mb-8">
            <img
              src="/images/image1.png"
              alt="Map of India highlighting operational states: Odisha, Bihar, Jharkhand, Uttar Pradesh,Madhya Pradesh, Chhattisgarh, Maharashtra and West Bengal"
              className="w-full h-auto object-contain"
            />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Our operations span across{" "}
              <span className="font-semibold text-[#c41e3a]">
                Odisha, Bihar, Jharkhand, Uttar Pradesh,Madhya Pradesh, Chhattisgarh, Maharashtra and West Bengal
              </span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {departments.map((dept, index) => (
              <DepartmentBadge key={index} name={dept} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DepartmentBadge({ name }: { name: string }) {
  return (
    <div className="bg-[#c41e3a] text-white rounded-full px-5 py-3 text-center text-sm font-medium shadow-lg hover:shadow-xl transition-shadow hover:bg-[#a01830] cursor-default min-w-[220px]">
      {name}
    </div>
  )
}

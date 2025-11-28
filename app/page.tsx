import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { DepartmentsMap } from "@/components/departments-map"
import { ClientsSlider } from "@/components/clients-slider"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutSection />
      <DepartmentsMap />
      <ClientsSlider />
      <ContactSection />
    </main>
  )
}

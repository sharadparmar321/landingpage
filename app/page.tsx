import { Header } from "@/components/header"
import { HeroVideoSection } from "@/components/hero-video-section"
import { AboutSection } from "@/components/about-section"
import { DepartmentsMap } from "@/components/departments-map"
import { ClientsSlider } from "@/components/clients-slider"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroVideoSection />
      <AboutSection />
      <ClientsSlider />
      <DepartmentsMap />
      <ContactSection />
    </main>
  )
}

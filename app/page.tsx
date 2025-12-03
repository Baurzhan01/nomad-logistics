import { Header } from "@/components/header"
import { HeroSection } from "@/sections/hero-section"
import { BenefitsSection } from "@/sections/benefits-section"
import { EquipmentSection } from "@/sections/equipment-section"
import { ServicesSection } from "@/sections/services-section"
import { GallerySection } from "@/sections/gallery-section"
import { TestimonialsSection } from "@/sections/testimonials-section"
import { FaqSection } from "@/sections/faq-section"
import { ContactSection } from "@/sections/contact-section"
import { Footer } from "@/components/footer"
import { CallbackModal } from "@/components/callbacks-modal"
import { FloatingButtons } from "@/components/floating-buttons"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <EquipmentSection />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <CallbackModal />
      <FloatingButtons />
    </main>
  )
}

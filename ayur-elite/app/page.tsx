import { BenefitsSection } from '@/components/benefits-section'
import { ContactSection } from '@/components/contact-section'
import { FaqSection } from '@/components/faq-section'
import { FloatingWhatsapp } from '@/components/floating-whatsapp'
import { HeroSection } from '@/components/hero-section'
import { MarqueeStrip } from '@/components/marquee-strip'
import { ProductsSection } from '@/components/products-section'
import { ReviewsSection } from '@/components/reviews-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteNavbar } from '@/components/site-navbar'
import { WhyChooseSection } from '@/components/why-choose-section'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteNavbar />
      <HeroSection />
      <MarqueeStrip />
      <BenefitsSection />
      <ProductsSection />
      <WhyChooseSection />
      <ReviewsSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
      <FloatingWhatsapp />
    </main>
  )
}

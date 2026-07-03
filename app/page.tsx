import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { CollectionsSection } from "@/components/home/collections-section"
import { FeaturedWorksSection } from "@/components/home/featured-works-section"
import { CustomArtSection } from "@/components/home/custom-art-section"
import { CTASection } from "@/components/home/cta-section"
import { LogoMarqueeSection } from "@/components/home/logo-marquee-section"
import { getArtworks } from "@/lib/supabase-artworks"

export const revalidate = 0

export default async function HomePage() {
  const artworks = await getArtworks()

  return (
    <main className="min-h-screen bg-[#F3F0E8]">
      <Header />
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <FeaturedWorksSection artworks={artworks} />
      <LogoMarqueeSection />
      <CustomArtSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

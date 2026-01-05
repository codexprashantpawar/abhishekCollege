import TopBar from "@/components/top-bar"
import Navbar from "@/components/navbar"
import AnnouncementBanner from "@/components/announcement-banner"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import EventsSection from "@/components/events-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <AnnouncementBanner />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <StatsSection />
      <TestimonialsSection />
      <EventsSection />
      <CTASection />
      <Footer />
    </main>
  )
}


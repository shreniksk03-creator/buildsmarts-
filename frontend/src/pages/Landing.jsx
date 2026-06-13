import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBadges from "@/components/sections/TrustBadges";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CostCalculator from "@/components/sections/CostCalculator";
import Portfolio from "@/components/sections/Portfolio";
import OngoingProjects from "@/components/sections/OngoingProjects";
import BeforeAfter from "@/components/sections/BeforeAfter";
import Process from "@/components/sections/Process";
import ClientLogos from "@/components/sections/ClientLogos";
import Testimonials from "@/components/sections/Testimonials";
import GoogleReviews from "@/components/sections/GoogleReviews";
import FAQ from "@/components/sections/FAQ";
import LeadMagnet from "@/components/sections/LeadMagnet";
import Contact from "@/components/sections/Contact";
import BrochureDownload from "@/components/sections/BrochureDownload";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import BackToTop from "@/components/sections/BackToTop";
import StickyEstimate from "@/components/sections/StickyEstimate";
import { Toaster } from "@/components/ui/sonner";
import { useTheme } from "@/hooks/useTheme";

export default function Landing() {
  // Initialize theme on mount
  useTheme();

  return (
    <main className="bg-[#050A15] text-white min-h-screen" data-testid="landing-page">
      <Navbar />
      <Hero />
      <TrustBadges />
      <ClientLogos />
      <About />
      <Team />
      <Services />
      <Packages />
      <WhyChooseUs />
      <CostCalculator />
      <Portfolio />
      <OngoingProjects />
      <BeforeAfter />
      <Process />
      <Testimonials />
      <GoogleReviews />
      <FAQ />
      <LeadMagnet />
      <Contact />
      <BrochureDownload />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <StickyEstimate />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--bsi-card)",
            color: "var(--bsi-text)",
            border: "1px solid rgba(212,175,55,0.4)",
          },
        }}
      />
    </main>
  );
}

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import BackToTop from "@/components/sections/BackToTop";
import { Toaster } from "@/components/ui/sonner";

export default function Landing() {
  return (
    <main className="bg-[#050A15] text-white" data-testid="landing-page">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Services />
      <Packages />
      <WhyChooseUs />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0F172A",
            color: "#fff",
            border: "1px solid rgba(212,175,55,0.4)",
          },
        }}
      />
    </main>
  );
}

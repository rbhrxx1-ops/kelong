import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AppSection from "@/components/AppSection";
import QualitySection from "@/components/QualitySection";
import SustainabilitySection from "@/components/SustainabilitySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AppSection />
      <QualitySection />
      <SustainabilitySection />
      <Footer />
    </main>
  );
}

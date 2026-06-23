import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatsBand from "@/components/sections/StatsBand";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import MaintenancePromo from "@/components/sections/MaintenancePromo";
import FinancingTeaser from "@/components/sections/FinancingTeaser";
import Testimonials from "@/components/sections/Testimonials";
import WorkGallery from "@/components/sections/WorkGallery";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import EmergencyCTA from "@/components/sections/EmergencyCTA";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <StatsBand />
      <ServicesGrid />
      <WhyChooseUs />
      <MaintenancePromo />
      <FinancingTeaser />
      <Testimonials />
      <WorkGallery />
      <ServiceAreaSection />
      <EmergencyCTA />
      <ContactSection />
    </>
  );
}

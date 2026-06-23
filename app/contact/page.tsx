import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import ContactSection from "@/components/sections/ContactSection";
import EmergencyCTA from "@/components/sections/EmergencyCTA";

export const metadata: Metadata = {
  title: "Contact / Schedule Service",
  description:
    "Schedule HVAC service with Jarrell's Quality. Call, text, or request an estimate online — we serve Murfreesboro and the greater Middle Tennessee area.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Schedule Service or Request a Quote"
        description="Call or text us directly for the fastest response, or fill out the form below and we'll follow up to confirm your appointment."
      />
      <ContactSection />
      <EmergencyCTA />
    </>
  );
}

import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import ServiceCTA from "@/components/service-cta";
import ServiceFAQ from "@/components/service-faq";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { siteConfig } from "@/lib/site-config";
import { FAQSchema } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Bathroom Accessibility Remodeling Chandler AZ",
  description: "ADA compliant bathroom accessibility remodeling in Chandler, AZ. Grab bars, walk-in showers, and aging in place solutions. Free quotes!",
  keywords: ["bathroom accessibility chandler", "ADA compliant bathrooms", "walk-in tub installation", "grab bar installation", "accessible bathrooms"],
  openGraph: {
    title: "Bathroom Accessibility Remodeling Chandler AZ",
    description: "Professional accessibility remodeling in Chandler with ADA compliant bathrooms and aging in place solutions.",
    url: `${siteConfig.url}/bathroom-accessibility-remodeling`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Accessibility Remodeling Chandler AZ",
    description: "Professional accessibility remodeling in Chandler with ADA compliant solutions.",
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-accessibility-remodeling`,
  },
};

const faqs = [
  { question: "What makes a bathroom ADA compliant in Chandler?", answer: "ADA compliant bathrooms require specific clearances, grab bar placement, accessible fixtures, and barrier-free entries. We ensure all installations meet ADA guidelines for wheelchair accessibility and mobility assistance." },
  { question: "How much does bathroom accessibility remodeling cost?", answer: "Bathroom accessibility remodeling in Chandler costs $5,000-$15,000 depending on modifications needed. Basic grab bar installation starts around $500, while complete accessible bathroom remodels can exceed $15,000." },
  { question: "Do you install walk-in tubs for seniors?", answer: "Yes! We specialize in walk-in tub installation for seniors and individuals with mobility challenges. These tubs feature low thresholds, built-in seating, and safety features for independent bathing." },
  { question: "Can you make existing bathrooms wheelchair accessible?", answer: "Absolutely! We modify existing bathrooms for wheelchair accessibility including widening doorways, installing roll-in showers, lowering fixtures, and creating proper clearances for maneuvering." }
];

export default function BathroomAccessibilityRemodelingPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <Header />
      <main>
        <ServiceHero
          title="Bathroom Accessibility Remodeling in Chandler, Arizona"
          description="Create safe, accessible bathrooms with ADA compliant features, grab bars, walk-in showers, and aging in place solutions for your Chandler home."
          backgroundImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
        />
        <ServiceCTA title="Ready for bathroom accessibility remodeling in Chandler?" description="Get expert consultation on ADA compliant features, safety installations, and aging in place solutions." />
        <ServiceFAQ faqs={faqs} />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

import { Metadata } from 'next'
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import ProcessSection from "@/components/home/process-section";
import Testimonials from "@/components/home/testimonials";
import ServiceAreas from "@/components/home/service-areas";
import ServiceCTA from "@/components/service-cta";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: 'Kitchen Remodeling Chandler AZ - Expert',
  description: 'Professional kitchen remodeling in Chandler, Arizona. Expert contractors specializing in custom cabinets, countertops, flooring and complete kitchen renovations.',
  keywords: ['kitchen remodeling Chandler AZ', 'kitchen renovation Arizona', 'custom kitchen cabinets Chandler', 'kitchen contractors near me', 'luxury kitchen remodel', 'kitchen renovation contractors'],
  openGraph: {
    title: 'Kitchen Remodeling Chandler AZ - Expert',
    description: 'Professional kitchen remodeling in Chandler, Arizona with expert contractors specializing in luxury renovations.',
    url: `${siteConfig.url}/kitchen-remodeling`,
    images: [
      {
        url: `${siteConfig.url}/images/kitchen-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: 'Kitchen Remodeling Chandler Arizona - ARZ Home Remodeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Remodeling Chandler AZ - Expert',
    description: 'Professional kitchen remodeling in Chandler, Arizona with expert contractors specializing in luxury renovations.',
    images: [`${siteConfig.url}/images/kitchen-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/kitchen-remodeling`,
  },
}

const serviceFaqs = [
  {
    question: "How long does a kitchen remodel take in Chandler, Arizona?",
    answer: "A typical kitchen remodel takes 4-8 weeks depending on scope. Minor updates may take 2-3 weeks, while complete renovations can take 8-12 weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "What is included in a full kitchen remodel?",
    answer: "A full remodel includes demolition, plumbing, electrical, flooring, cabinets, countertops, appliances, lighting, backsplash, and finishing touches. We handle all permits and inspections.",
  },
  {
    question: "Do you offer financing for kitchen remodeling projects?",
    answer: "Yes! We offer flexible financing options including 0% APR for qualified buyers, extended payment plans, and quick approval processes to make your dream kitchen affordable.",
  },
  {
    question: "Are you licensed kitchen remodeling contractors in Arizona?",
    answer: "Absolutely! We are fully licensed, bonded, and insured contractors specializing in kitchen remodeling throughout Chandler and the greater Phoenix area.",
  },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Kitchen Remodeling Services in Chandler, Arizona"
        serviceDescription="Professional kitchen remodeling services including custom cabinets, countertops, flooring, appliances, lighting, backsplash installation, and complete kitchen renovations. Serving Chandler, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/kitchen-remodeling`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Expert Kitchen Remodeling in Chandler, Arizona"
          description="Transform your kitchen with ARZ Home Remodeling's professional renovation services. From custom cabinets and countertops to complete kitchen makeovers, we deliver exceptional results with 15+ years of experience in Chandler, AZ."
        />
        <Benefits />
        <Tips />
        <ProcessSection />
        <Testimonials />
        <ServiceAreas />
        <ServiceCTA />
      </main>
      <Footer />
    </>
  );
}
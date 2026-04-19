import { Metadata } from 'next'
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/service-hero";
import SubServices from "@/components/sub-services";
import IssuesSolved from "@/components/issues-solved";
import Benefits from "@/components/benefits";
import Tips from "@/components/tips";
import ProcessSection from "@/components/home/process-section";
import Testimonials from "@/components/home/testimonials";
import ServiceAreas from "@/components/home/service-areas";
import ServiceCTA from "@/components/service-cta";
import { ServiceSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: 'Bathroom Remodeling Chandler AZ | Top Contractors',
  description: 'Professional bathroom remodeling services in Chandler, AZ. Licensed bathroom remodelers, affordable pricing, luxury renovations. Free estimates!',
  keywords: ['bathroom remodeling Chandler AZ', 'bathroom remodelers Chandler', 'bathroom renovation Chandler Arizona', 'bathroom contractors Chandler AZ', 'luxury bathroom remodel Chandler', 'affordable bathroom remodeling'],
  openGraph: {
    title: 'Bathroom Remodeling Chandler AZ | Top Contractors',
    description: 'Professional bathroom remodeling services in Chandler, AZ. Licensed contractors, luxury renovations.',
    url: `${siteConfig.url}/bathroom-remodeling`,
    images: [
      {
        url: `${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`,
        width: 1200,
        height: 630,
        alt: 'Bathroom Remodeling Chandler Arizona - ARZ Home Remodeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bathroom Remodeling Chandler AZ | Top Contractors',
    description: 'Professional bathroom remodeling in Chandler, AZ. Licensed contractors, free estimates!',
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling`,
  },
}

const serviceFaqs = [
  {
    question: "How much does bathroom remodeling cost in Chandler, AZ?",
    answer: "Bathroom remodeling cost in Chandler varies by scope. Basic updates start around $5,000, mid-range remodels $10,000-$20,000, and luxury bathroom remodels $25,000+. We provide free bathroom remodel estimates with transparent pricing.",
  },
  {
    question: "How long does bathroom remodeling take in Chandler?",
    answer: "A typical bathroom remodel in Chandler takes 2-4 weeks. Fast bathroom remodel options available for quick renovations. Complete luxury bathroom renovations may take 4-6 weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "Are you licensed bathroom contractors in Chandler, AZ?",
    answer: "Yes! We are fully licensed bathroom contractors in Chandler, AZ. Our certified bathroom remodelers are bonded and insured, serving Chandler and the greater Phoenix area with 15+ years experience.",
  },
  {
    question: "Do you offer affordable bathroom remodeling financing?",
    answer: "Yes! We offer affordable bathroom remodeling with flexible financing options including 0% APR for qualified buyers, extended payment plans, and quick approval to make your bathroom renovation budget-friendly.",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Bathroom Remodeling Services in Chandler, Arizona"
        serviceDescription="Professional bathroom remodeling services including shower remodeling, bathtub installation, vanity installation, tile work, flooring, lighting, and complete bathroom renovations. Serving Chandler, Arizona and surrounding areas."
        serviceUrl={`${siteConfig.url}/bathroom-remodeling`}
      />
      <FAQSchema faqs={serviceFaqs} />
      <Header />
      <main>
        <ServiceHero
          title="Top Rated Bathroom Remodeling Chandler AZ"
          description="Looking for the best bathroom remodeling company in Chandler? Our licensed bathroom remodelers deliver affordable bathroom renovations with premium quality. Get your free bathroom remodel estimate today!"
        />
        <SubServices />
        <IssuesSolved />
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

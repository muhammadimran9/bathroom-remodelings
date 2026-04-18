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
  title: 'Bathroom Remodeling Chandler AZ - Expert',
  description: 'Professional bathroom remodeling in Chandler, Arizona. Expert contractors specializing in shower remodels, vanities, tile work, and complete renovations.',
  keywords: ['bathroom remodeling Chandler AZ', 'bathroom renovation Arizona', 'shower remodeling Chandler', 'bathroom contractors near me', 'luxury bathroom remodel', 'bathroom renovation contractors'],
  openGraph: {
    title: 'Bathroom Remodeling Chandler AZ - Expert',
    description: 'Professional bathroom remodeling in Chandler, Arizona with expert contractors specializing in luxury renovations.',
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
    title: 'Bathroom Remodeling Chandler AZ - Expert',
    description: 'Professional bathroom remodeling services in Chandler, Arizona. Expert contractors specializing in luxury renovations.',
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling`,
  },
}

const serviceFaqs = [
  {
    question: "How long does a bathroom remodel take in Chandler, Arizona?",
    answer: "A typical bathroom remodel takes 2-4 weeks depending on scope. Simple updates may take 1-2 weeks, while complete renovations can take 4-6 weeks. We provide detailed timelines during consultation.",
  },
  {
    question: "What is included in a full bathroom remodel?",
    answer: "A full remodel includes demolition, plumbing, electrical, flooring, walls, fixtures, vanity, shower/tub, lighting, and finishing touches. We handle all permits and inspections.",
  },
  {
    question: "Do you offer financing for bathroom remodeling projects?",
    answer: "Yes! We offer flexible financing options including 0% APR for qualified buyers, extended payment plans, and quick approval processes to make your dream bathroom affordable.",
  },
  {
    question: "Are you licensed bathroom remodeling contractors in Arizona?",
    answer: "Absolutely! We are fully licensed, bonded, and insured contractors specializing in bathroom remodeling throughout Chandler and the greater Phoenix area.",
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
          title="Expert Bathroom Remodeling in Chandler, Arizona"
          description="Transform your bathroom with ARZ Home Remodeling's professional renovation services. From luxury shower remodels to complete bathroom makeovers, we deliver exceptional results with 15+ years of experience in Chandler, AZ."
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
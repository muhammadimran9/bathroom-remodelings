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
  title: 'Bathroom Remodeling Contractors Chandler AZ | #1',
  description: 'Top rated bathroom remodeling contractors Chandler AZ. Licensed bathroom renovation company, affordable bathroom remodel cost. Free estimates!',
  keywords: ['bathroom remodeling contractors chandler az', 'bathroom remodel cost chandler az', 'bathroom remodel services chandler az', 'bathroom renovation contractors chandler az', 'bathroom remodeling company chandler az', 'hire bathroom remodel contractor chandler az', 'licensed bathroom remodeling contractors chandler az', 'affordable bathroom remodeling contractors chandler az', 'best bathroom remodeling contractors chandler az', 'professional bathroom remodeling contractors chandler az'],
  openGraph: {
    title: 'Bathroom Remodeling Contractors Chandler AZ | #1',
    description: 'Top rated bathroom remodeling contractors Chandler AZ. Affordable bathroom remodel cost, licensed!',
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
    title: 'Bathroom Remodeling Contractors Chandler AZ',
    description: 'Top rated bathroom remodeling contractors Chandler AZ. Free bathroom remodel estimate!',
    images: [`${siteConfig.url}/images/bathroom-remodeling-chandler.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling`,
  },
}

const serviceFaqs = [
  {
    question: "How much does bathroom remodel cost in Chandler AZ?",
    answer: "Bathroom remodel cost in Chandler AZ varies: basic bathroom renovation cost starts at $5,000, mid-range bathroom remodeling services cost $10,000-$20,000, and luxury bathroom remodel cost can exceed $25,000. We provide free bathroom remodel estimates with transparent bathroom remodeling pricing.",
  },
  {
    question: "Are you licensed bathroom remodeling contractors in Chandler AZ?",
    answer: "Yes! We are licensed bathroom remodeling contractors in Chandler AZ with 15+ years experience. Our professional bathroom renovation contractors are bonded and insured. We're the top rated bathroom remodeling company serving Chandler and the greater Phoenix area.",
  },
  {
    question: "How do I hire bathroom remodel contractor in Chandler AZ?",
    answer: "To hire a bathroom remodel contractor in Chandler AZ, simply contact us for a free bathroom remodel quote. Our bathroom remodeling professionals will provide a bathroom renovation estimate and discuss your bathroom redesign services needs.",
  },
  {
    question: "Do you offer affordable bathroom remodeling services in Chandler AZ?",
    answer: "Yes! We offer affordable bathroom remodeling contractors in Chandler AZ with flexible financing. Our bathroom remodel services include budget-friendly options and 0% APR financing. Get your free bathroom remodeling estimate today!",
  },
  {
    question: "What bathroom remodel services do you offer in Chandler AZ?",
    answer: "Our bathroom remodel services in Chandler AZ include: shower remodel, bathtub replacement, bathroom installation services, bathroom repair services, bathroom upgrade, custom bathroom remodel services, master bathroom remodel, and small bathroom remodel. We're your local bathroom remodeling service providers.",
  },
  {
    question: "How long does bathroom renovation take in Chandler?",
    answer: "Bathroom renovation in Chandler typically takes 2-4 weeks. Same day bathroom remodeling contractors are available for emergency bathroom repair services. Our bathroom remodel construction services are efficient while maintaining professional bathroom remodeling quality.",
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
          title="Best Bathroom Remodeling Contractors Chandler AZ"
          description="Looking for top rated bathroom remodeling contractors in Chandler AZ? Hire our licensed bathroom renovation contractors for affordable bathroom remodel services. Get your free bathroom remodel quote today!"
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

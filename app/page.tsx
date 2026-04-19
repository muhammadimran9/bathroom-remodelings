import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import TrustBadges from "@/components/home/trust-badges";
import { LocalBusinessSchema, FAQSchema } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/site-config";

// Lazy load below-the-fold components
const WhyChooseUs = dynamic(() => import("@/components/home/why-choose-us"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const BathroomSection = dynamic(() => import("@/components/home/bathroom-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ServicesGrid = dynamic(() => import("@/components/home/services-grid"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const GalleryPreview = dynamic(() => import("@/components/home/gallery-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ProcessSection = dynamic(() => import("@/components/home/process-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const Testimonials = dynamic(() => import("@/components/home/testimonials"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const AboutPreview = dynamic(() => import("@/components/home/about-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ServiceAreas = dynamic(() => import("@/components/home/service-areas"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const Financing = dynamic(() => import("@/components/home/financing"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const FAQ = dynamic(() => import("@/components/home/faq"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const BlogPreview = dynamic(() => import("@/components/home/blog-preview"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const ContactSection = dynamic(() => import("@/components/home/contact-section"), { 
  loading: () => <div className="h-96" />,
  ssr: true 
});
const FinalCTA = dynamic(() => import("@/components/home/final-cta"), { 
  loading: () => <div className="h-32" />,
  ssr: true 
});

const homeFaqs = [
  {
    question: "What bathroom remodeling services do you offer in Chandler, AZ?",
    answer:
      "ARZ Home Remodeling offers complete bathroom remodeling services in Chandler, Arizona including shower remodeling, bathtub replacement, walk-in shower installation, bathroom vanity installation, tile installation, and luxury bathroom renovations with 15+ years of experience.",
  },
  {
    question: "How much does bathroom remodeling cost in Chandler?",
    answer:
      "Bathroom remodeling cost in Chandler varies based on scope. We offer affordable bathroom remodeling options starting from basic updates to luxury bathroom remodels. Contact us for a free bathroom remodel estimate with transparent pricing.",
  },
  {
    question: "Are you licensed bathroom contractors in Chandler, AZ?",
    answer:
      "Yes! We are fully licensed bathroom contractors in Chandler, AZ. Our certified bathroom contractors are bonded and insured, serving Chandler, Sun Lakes, Ahwatukee, Tempe, Mesa, and South Phoenix areas.",
  },
  {
    question: "How long does a bathroom remodel take in Chandler?",
    answer:
      "Most bathroom remodeling projects in Chandler take 2-4 weeks. Fast bathroom remodel options are available for quick bathroom renovations. We provide detailed timelines during your free consultation.",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema faqs={homeFaqs} />
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <AboutPreview />
        <ServicesGrid />
        <WhyChooseUs />
        <Testimonials />
        <BathroomSection />
        <GalleryPreview />
        <ProcessSection />
        <ServiceAreas />
        <Financing />
        <FAQ />
        <BlogPreview />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

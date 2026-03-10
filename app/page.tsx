import dynamic from "next/dynamic";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Hero from "@/components/home/hero";
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
    question: "Are you commercial bathroom remodel contractors near me?",
    answer:
      "Yes! We are licensed commercial bathroom remodel contractors near me serving Chandler, AZ and surrounding areas including 60625 IL. We specialize in both residential and commercial bathroom remodeling projects with bathroom remodel financing near me options available.",
  },
  {
    question: "Do you offer handicap bathroom remodel contractors near me services?",
    answer:
      "Absolutely! We are certified handicap bathroom remodel contractors near me, specializing in ADA-compliant bathroom renovations. We also offer free bathroom remodel for seniors near me programs and bathroom remodel with financing near me options.",
  },
  {
    question: "What bathroom remodel financing near me options do you provide?",
    answer:
      "We offer flexible bathroom remodel financing near me with approved credit. Our bathroom remodel near me with financing includes 0% interest options, extended payment plans, and special programs for seniors. Contact us for bathroom remodel with financing near me details.",
  },
  {
    question: "Do you provide bathroom remodel in a day near me services?",
    answer:
      "Yes! We offer bathroom remodel in a day near me services for quick updates and renovations. Our experienced bathroom remodelers near me 60625 il team can complete many projects in just one day, perfect for busy homeowners and commercial properties.",
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

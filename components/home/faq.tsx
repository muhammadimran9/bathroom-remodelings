"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does a typical bathroom remodel take in Chandler, Arizona?",
    answer:
      "A standard bathroom remodel typically takes 2-4 weeks depending on the scope of work. Simple updates like replacing fixtures may take just a few days, while complete gut renovations with custom tile work can take 4-6 weeks. We also offer bathroom remodel in a day near me services for quick updates. During your free consultation, we'll provide a detailed timeline specific to your project.",
  },
  {
    question: "What is the cost of bathroom remodeling in Chandler, AZ?",
    answer:
      "Bathroom remodeling costs vary based on the size of your bathroom and the materials selected. Basic remodels start around $8,000-$15,000, mid-range renovations typically range from $15,000-$30,000, and luxury bathroom remodels can exceed $30,000. We offer bathroom remodel financing near me to make your dream bathroom affordable. We provide detailed, transparent quotes with no hidden fees.",
  },
  {
    question: "Do you offer bathroom remodel financing near me?",
    answer:
      "Yes! We offer flexible bathroom remodel with financing near me options to fit your budget. Our financing plans include low monthly payments, competitive interest rates, and quick approval. During your consultation, we'll discuss all available financing options to help make your bathroom renovation affordable.",
  },
  {
    question: "Are you the best bathroom remodel company near me?",
    answer:
      "Chandler Bathroom Remodeling is consistently rated as the best bathroom remodel company near me by our customers. We're fully licensed (ROC #123456), bonded, and insured for residential remodeling in Arizona. With 15+ years of experience and hundreds of 5-star reviews, we're the top-rated bathroom remodelers near me in Chandler and the East Valley.",
  },
  {
    question: "Do you offer handicap bathroom remodel contractors near me services?",
    answer:
      "Absolutely! We specialize in handicap bathroom remodel contractors near me services, creating ADA-compliant bathrooms that are both beautiful and accessible. Our accessibility modifications include walk-in tubs, grab bars, roll-in showers, comfort-height toilets, and non-slip flooring. We also offer free bathroom remodel for seniors near me assistance programs.",
  },
  {
    question: "Do you handle commercial bathroom remodel contractors near me projects?",
    answer:
      "Yes, we are experienced commercial bathroom remodel contractors near me serving Chandler and surrounding areas. We work with businesses, offices, restaurants, and commercial properties to deliver professional bathroom renovations with minimal disruption to your operations.",
  },
  {
    question: "Can I stay in my home during the bathroom remodel?",
    answer:
      "Yes, in most cases you can stay in your home during the remodel. If you have multiple bathrooms, we'll coordinate the work to ensure you always have access to facilities. We take care to minimize dust and disruption, cleaning up daily and protecting your home throughout the process.",
  },
  {
    question: "What areas in Arizona do you serve for bathroom remodeling?",
    answer:
      "We primarily serve Chandler, Arizona and nearby East Valley communities including Sun Lakes, Ahwatukee, Tempe, Mesa, and South Phoenix. As the best bathroom remodelers near me, we're proud to serve homeowners throughout the region.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-6 text-left flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg font-medium text-foreground pr-4">
          {question}
        </span>
        <ChevronDown 
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 mt-1",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              FAQ
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Find answers to common questions about our bathroom 
              remodeling services in Chandler, Arizona.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

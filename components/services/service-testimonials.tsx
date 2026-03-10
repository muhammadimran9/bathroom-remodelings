"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceTestimonial, getTestimonialsByService } from "@/lib/service-testimonials";

interface ServiceTestimonialsProps {
  serviceCategory: string;
  title?: string;
  subtitle?: string;
}

export default function ServiceTestimonials({ 
  serviceCategory, 
  title = "What Our Customers Say",
  subtitle = "Real experiences from satisfied customers"
}: ServiceTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<ServiceTestimonial[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const serviceTestimonials = getTestimonialsByService(serviceCategory);
    setTestimonials(serviceTestimonials);
  }, [serviceCategory]);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Customer Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-6 text-foreground text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-2xl p-8 lg:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/20" />

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              {/* Image */}
              <div className="shrink-0">
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                {/* Rating */}
                <div className="flex justify-center lg:justify-start gap-1 mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground text-lg lg:text-xl leading-relaxed mb-6">
                  <p>&ldquo;{currentTestimonial.content}&rdquo;</p>
                </blockquote>

                {/* Author */}
                <div>
                  <cite className="font-serif text-xl font-semibold text-foreground not-italic">
                    {currentTestimonial.name}
                  </cite>
                  <p className="text-muted-foreground">
                    {currentTestimonial.location} • {currentTestimonial.service}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-center lg:justify-end gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                
                <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-border"
                      }`}
                      role="tab"
                      aria-selected={index === currentIndex}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              "itemReviewed": {
                "@type": "Service",
                "name": currentTestimonial.service
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": currentTestimonial.rating,
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": currentTestimonial.name
              },
              "reviewBody": currentTestimonial.content
            })
          }}
        />
      </div>
    </section>
  );
}
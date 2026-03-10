import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bathtubs Installation & Replacement | Chandler Bathroom Remodeling",
  description: "Professional bathtub installation and replacement services in Chandler, Arizona. Premium bathtubs for comfort, style, and relaxation. Free estimates available.",
};

export default function BathtubsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Premium Bathtub Installation & Replacement"
          subtitle="Bathtubs"
          description="Transform your bathroom with our professional bathtub installation and replacement services. Choose from a wide selection of premium bathtubs designed for ultimate comfort and relaxation."
          image="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Bathtubs", url: `${siteConfig.url}/services/bathtubs` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Professional Bathtub Services in Chandler, Arizona
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Whether you're looking to install a new bathtub or replace an existing one, our expert team provides comprehensive bathtub services in Chandler, Arizona. We specialize in a wide range of bathtub styles including alcove tubs, freestanding tubs, soaking tubs, and whirlpool tubs.
                </p>
                <p className="mb-6">
                  Our professional installation ensures proper plumbing connections, waterproofing, and structural support for long-lasting performance. We work with top-quality materials and trusted brands to deliver bathtubs that combine comfort, durability, and style.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Benefits of Professional Bathtub Installation
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Expert Installation</h3>
                  <p className="text-muted-foreground">Professional installation ensures proper fit, plumbing connections, and waterproofing for years of reliable use.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Quality Materials</h3>
                  <p className="text-muted-foreground">We use only premium bathtubs from trusted manufacturers, ensuring durability and long-lasting beauty.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Increased Home Value</h3>
                  <p className="text-muted-foreground">A new bathtub installation can significantly increase your home's value and appeal to potential buyers.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Enhanced Comfort</h3>
                  <p className="text-muted-foreground">Modern bathtubs offer improved comfort features like ergonomic design and therapeutic options.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Why Choose Our Bathtub Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Licensed & Insured Professionals</h3>
                    <p className="text-muted-foreground">Our team consists of licensed and insured professionals with years of experience in bathtub installation and replacement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Comprehensive Warranty</h3>
                    <p className="text-muted-foreground">We stand behind our work with comprehensive warranties on both materials and labor for your peace of mind.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Local Chandler Experts</h3>
                    <p className="text-muted-foreground">As local Chandler experts, we understand local building codes and provide personalized service to our community.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-12 text-foreground text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">How long does bathtub installation take?</h3>
                  <p className="text-muted-foreground">Most bathtub installations can be completed in 1-2 days, depending on the complexity of the project and any additional plumbing work required.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What types of bathtubs do you install?</h3>
                  <p className="text-muted-foreground">We install all types of bathtubs including alcove tubs, freestanding tubs, soaking tubs, whirlpool tubs, and walk-in tubs from leading manufacturers.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Do you handle the plumbing connections?</h3>
                  <p className="text-muted-foreground">Yes, our team includes licensed plumbers who handle all necessary plumbing connections, ensuring proper installation and compliance with local codes.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What is included in your bathtub installation service?</h3>
                  <p className="text-muted-foreground">Our service includes removal of old tub (if applicable), preparation, installation, plumbing connections, waterproofing, and cleanup.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for Your New Bathtub?"
          description="Contact us today for a free consultation and estimate on your bathtub installation or replacement project."
        />
      </main>
      <Footer />
    </>
  );
}
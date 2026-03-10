import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Shower Systems Installation | Chandler Bathroom Remodeling",
  description: "Complete shower system installations in Chandler, Arizona. Modern fixtures, premium materials, and professional installation. Free estimates available.",
};

export default function ShowerSystemsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Complete Shower Systems Installation"
          subtitle="Shower Systems"
          description="Upgrade your bathroom with our complete shower system installations featuring modern fixtures, premium materials, and expert craftsmanship for the ultimate shower experience."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Shower Systems", url: `${siteConfig.url}/services/shower-systems` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Professional Shower System Installation in Chandler
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Transform your daily routine with our complete shower system installations. We specialize in modern shower systems that combine functionality, style, and durability. From rainfall showerheads to multi-function shower panels, we create shower experiences tailored to your preferences.
                </p>
                <p className="mb-6">
                  Our shower systems include premium fixtures, efficient plumbing, proper waterproofing, and beautiful tile work. We work with leading brands to ensure your shower system delivers years of reliable performance and satisfaction.
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
                Benefits of Modern Shower Systems
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Enhanced Shower Experience</h3>
                  <p className="text-muted-foreground">Modern shower systems offer multiple spray patterns, temperature control, and luxury features for a spa-like experience.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Water Efficiency</h3>
                  <p className="text-muted-foreground">New shower systems are designed for water efficiency without compromising performance, helping reduce utility costs.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Easy Maintenance</h3>
                  <p className="text-muted-foreground">Modern fixtures and materials are designed for easy cleaning and maintenance, keeping your shower looking new.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Customizable Options</h3>
                  <p className="text-muted-foreground">Choose from various fixtures, finishes, and features to create a shower system that matches your style and needs.</p>
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
                Why Choose Our Shower System Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Complete System Design</h3>
                    <p className="text-muted-foreground">We design complete shower systems that integrate seamlessly with your bathroom layout and personal preferences.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Premium Brand Partners</h3>
                    <p className="text-muted-foreground">We work with top shower system manufacturers to offer the latest technology and highest quality products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Professional Installation</h3>
                    <p className="text-muted-foreground">Our certified installers ensure proper plumbing, waterproofing, and fixture installation for optimal performance.</p>
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
                  <h3 className="font-semibold text-foreground mb-3">What's included in a complete shower system?</h3>
                  <p className="text-muted-foreground">A complete shower system includes showerheads, valves, controls, body sprays (if desired), plumbing fixtures, and all necessary installation components.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Can you install shower systems in existing bathrooms?</h3>
                  <p className="text-muted-foreground">Yes, we can install new shower systems in existing bathrooms. We'll assess your current plumbing and make necessary updates for optimal performance.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">How long does shower system installation take?</h3>
                  <p className="text-muted-foreground">Installation typically takes 2-4 days depending on the complexity of the system and any required plumbing modifications.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Do you offer different shower system styles?</h3>
                  <p className="text-muted-foreground">Yes, we offer various styles including rainfall systems, multi-function panels, traditional systems, and luxury spa-style configurations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready to Upgrade Your Shower System?"
          description="Contact us today for a free consultation and estimate on your new shower system installation."
        />
      </main>
      <Footer />
    </>
  );
}
import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Walk-In Showers Installation | Chandler Bathroom Remodeling",
  description: "Accessible walk-in shower installations in Chandler, Arizona. Safe, comfortable, and modern design for enhanced bathing independence. Free estimates available.",
};

export default function WalkInShowersPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Accessible Walk-In Shower Installation"
          subtitle="Walk-In Showers"
          description="Create a safer, more accessible bathroom with our walk-in shower installations. Designed for comfort, safety, and modern aesthetics without compromising on style."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Walk-In Showers", url: `${siteConfig.url}/services/walk-in-showers` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Professional Walk-In Shower Installation in Chandler
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Walk-in showers provide the perfect solution for enhanced bathroom accessibility without sacrificing style. Our walk-in shower installations feature low or no-threshold entry, slip-resistant flooring, and thoughtful design elements that make bathing safer and more comfortable for users of all ages and mobility levels.
                </p>
                <p className="mb-6">
                  We specialize in creating walk-in showers that seamlessly blend accessibility features with modern design. From curbless entries to built-in seating and grab bars, every element is carefully planned to enhance both safety and aesthetics.
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
                Benefits of Walk-In Showers
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Enhanced Safety</h3>
                  <p className="text-muted-foreground">Low or no-threshold entry reduces trip hazards, while slip-resistant surfaces and optional grab bars provide additional safety.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Improved Accessibility</h3>
                  <p className="text-muted-foreground">Walk-in design accommodates wheelchairs, walkers, and other mobility aids for enhanced independence.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Modern Aesthetics</h3>
                  <p className="text-muted-foreground">Clean lines and open design create a spacious, contemporary look that enhances your bathroom's appeal.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Easy Maintenance</h3>
                  <p className="text-muted-foreground">Fewer crevices and joints make walk-in showers easier to clean and maintain than traditional tub-shower combinations.</p>
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
                Why Choose Our Walk-In Shower Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">ADA Compliance Expertise</h3>
                    <p className="text-muted-foreground">We understand ADA requirements and can design walk-in showers that meet accessibility standards while maintaining style.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Custom Design Solutions</h3>
                    <p className="text-muted-foreground">Every walk-in shower is custom designed to fit your space, needs, and style preferences perfectly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Quality Materials & Installation</h3>
                    <p className="text-muted-foreground">We use premium materials and proven installation techniques to ensure your walk-in shower lasts for years.</p>
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
                  <h3 className="font-semibold text-foreground mb-3">What makes a shower "walk-in"?</h3>
                  <p className="text-muted-foreground">A walk-in shower has a low or no threshold entry, making it easy to enter without stepping over a high barrier. It may also include accessibility features like grab bars and seating.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Can you convert my existing tub to a walk-in shower?</h3>
                  <p className="text-muted-foreground">Yes, we specialize in tub-to-shower conversions and can transform your existing bathtub space into a beautiful, accessible walk-in shower.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Do walk-in showers require special drainage?</h3>
                  <p className="text-muted-foreground">Walk-in showers require proper slope and drainage design to prevent water from escaping. We ensure proper drainage in every installation.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What accessibility features can be included?</h3>
                  <p className="text-muted-foreground">We can include grab bars, built-in seating, handheld showerheads, slip-resistant flooring, and other features to enhance safety and accessibility.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for a Safer, More Accessible Shower?"
          description="Contact us today for a free consultation on your walk-in shower installation project."
        />
      </main>
      <Footer />
    </>
  );
}
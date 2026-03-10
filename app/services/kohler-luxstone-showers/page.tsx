import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "KOHLER® LuxStone Showers Installation | Chandler Bathroom Remodeling",
  description: "Premium KOHLER® LuxStone shower installations in Chandler, Arizona. Luxury finishes, durability, and professional installation. Free estimates available.",
};

export default function KohlerLuxStoneShowersPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Premium KOHLER® LuxStone Shower Installation"
          subtitle="KOHLER® LuxStone Showers"
          description="Experience luxury and durability with KOHLER® LuxStone shower installations. Premium materials, innovative design, and professional installation for the ultimate shower experience."
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "KOHLER® LuxStone Showers", url: `${siteConfig.url}/services/kohler-luxstone-showers` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                KOHLER® LuxStone Shower Installation in Chandler
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  KOHLER® LuxStone showers represent the pinnacle of shower luxury and innovation. These premium shower systems combine beautiful natural stone aesthetics with advanced composite materials that are non-porous, stain-resistant, and incredibly durable. Our certified installation ensures you get the full benefit of KOHLER®'s industry-leading design and engineering.
                </p>
                <p className="mb-6">
                  LuxStone shower walls are designed to look and feel like natural stone while providing superior performance and easy maintenance. With a variety of colors and textures available, we can create a shower that perfectly matches your design vision while delivering decades of reliable performance.
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
                Benefits of KOHLER® LuxStone Showers
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Luxury Aesthetics</h3>
                  <p className="text-muted-foreground">Beautiful natural stone appearance with consistent patterns and colors that won't fade or discolor over time.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Superior Durability</h3>
                  <p className="text-muted-foreground">Non-porous composite material resists stains, scratches, and damage while maintaining its beauty for decades.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Easy Maintenance</h3>
                  <p className="text-muted-foreground">Simple cleaning with everyday household cleaners - no special treatments or sealers required.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">KOHLER® Quality</h3>
                  <p className="text-muted-foreground">Backed by KOHLER®'s reputation for quality and innovation, with comprehensive warranties for peace of mind.</p>
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
                Why Choose Our KOHLER® LuxStone Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Certified KOHLER® Installers</h3>
                    <p className="text-muted-foreground">Our team is certified in KOHLER® LuxStone installation, ensuring proper techniques and warranty compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Complete Design Service</h3>
                    <p className="text-muted-foreground">We help you select the perfect LuxStone colors and patterns to match your bathroom design vision.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Precision Installation</h3>
                    <p className="text-muted-foreground">Meticulous installation ensures perfect fit, proper sealing, and long-lasting performance of your LuxStone shower.</p>
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
                  <h3 className="font-semibold text-foreground mb-3">What makes LuxStone different from natural stone?</h3>
                  <p className="text-muted-foreground">LuxStone provides the beauty of natural stone without the maintenance. It's non-porous, stain-resistant, and doesn't require sealing like natural stone.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">How long does LuxStone installation take?</h3>
                  <p className="text-muted-foreground">Most LuxStone shower installations can be completed in 1-2 days, depending on the size and complexity of your shower design.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What colors and patterns are available?</h3>
                  <p className="text-muted-foreground">KOHLER® LuxStone is available in multiple colors and stone patterns, from classic marble looks to contemporary concrete and natural stone textures.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Does LuxStone come with a warranty?</h3>
                  <p className="text-muted-foreground">Yes, KOHLER® LuxStone comes with a comprehensive warranty covering materials and manufacturing defects when professionally installed.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for Premium KOHLER® LuxStone?"
          description="Contact us today for a free consultation on your KOHLER® LuxStone shower installation."
        />
      </main>
      <Footer />
    </>
  );
}
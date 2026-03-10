import { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tub to Shower Conversion | Chandler Bathroom Remodeling",
  description: "Convert your old bathtub to a modern shower in Chandler, Arizona. Efficient conversion process with professional installation. Free estimates available.",
};

export default function TubToShowerConversionPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title="Efficient Tub to Shower Conversion"
          subtitle="Tub to Shower Conversion"
          description="Transform your unused bathtub into a functional, modern shower space. Our efficient conversion process maximizes your bathroom's functionality while enhancing its appeal."
          image="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp"
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: "Services", url: `${siteConfig.url}/services` },
            { name: "Tub to Shower Conversion", url: `${siteConfig.url}/services/tub-to-shower-conversion` },
          ]}
        />

        {/* Service Description */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 text-foreground">
                Professional Tub to Shower Conversion in Chandler
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  If your bathtub sits unused while you prefer showering, a tub to shower conversion is the perfect solution. Our conversion process transforms your existing bathtub space into a modern, functional shower that better suits your lifestyle. This renovation maximizes space efficiency while creating a more accessible and contemporary bathroom.
                </p>
                <p className="mb-6">
                  We handle every aspect of the conversion, from removing your old tub and updating plumbing to installing new shower systems, waterproofing, and finishing work. The result is a beautiful, functional shower that enhances your daily routine and increases your home's value.
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
                Benefits of Tub to Shower Conversion
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Increased Functionality</h3>
                  <p className="text-muted-foreground">Convert unused tub space into a functional shower that better matches your daily bathing preferences.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Enhanced Accessibility</h3>
                  <p className="text-muted-foreground">Showers are easier to access than tubs, making your bathroom safer and more convenient for all users.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Modern Aesthetics</h3>
                  <p className="text-muted-foreground">Update your bathroom with contemporary shower designs that enhance your home's overall appeal.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">Cost-Effective Update</h3>
                  <p className="text-muted-foreground">Conversion is more affordable than full bathroom remodeling while delivering significant improvement in functionality.</p>
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
                Why Choose Our Conversion Services
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Complete Conversion Service</h3>
                    <p className="text-muted-foreground">We handle every aspect from tub removal to final shower installation, ensuring a seamless conversion process.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Minimal Disruption</h3>
                    <p className="text-muted-foreground">Our efficient process minimizes disruption to your daily routine while delivering professional results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-foreground font-semibold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Custom Design Options</h3>
                    <p className="text-muted-foreground">Choose from various shower styles, fixtures, and finishes to create the perfect shower for your needs.</p>
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
                  <h3 className="font-semibold text-foreground mb-3">How long does a tub to shower conversion take?</h3>
                  <p className="text-muted-foreground">Most conversions can be completed in 2-4 days, depending on the complexity of the design and any necessary plumbing modifications.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Will conversion affect my home's resale value?</h3>
                  <p className="text-muted-foreground">Shower conversions typically maintain or increase home value, especially when professionally installed with quality materials and modern design.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">Can you make the shower accessible?</h3>
                  <p className="text-muted-foreground">Yes, we can incorporate accessibility features like grab bars, built-in seating, and low-threshold entry during the conversion process.</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-3">What happens to the existing plumbing?</h3>
                  <p className="text-muted-foreground">We modify existing plumbing as needed to accommodate the new shower configuration while ensuring optimal water pressure and drainage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready to Convert Your Tub to a Shower?"
          description="Contact us today for a free consultation on your tub to shower conversion project."
        />
      </main>
      <Footer />
    </>
  );
}
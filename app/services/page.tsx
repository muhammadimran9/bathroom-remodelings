import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { bathroomServices } from "@/lib/bathroom-services";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Bathroom Remodel Services Chandler AZ | All",
  description: "Complete bathroom remodel services Chandler AZ. Bathroom installation services, bathroom repair services, bathroom upgrade cost. Free estimates!",
  keywords: ["bathroom remodel services chandler az", "bathroom installation services chandler az", "bathroom repair services chandler az", "bathroom upgrade cost chandler az", "bathroom redesign services chandler az", "bathroom remodeling services near me in chandler az", "professional bathroom remodel services chandler az"],
  openGraph: {
    title: "Bathroom Remodel Services Chandler AZ | All",
    description: "Complete bathroom remodel services Chandler AZ. Professional bathroom installation services!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodel Services Chandler AZ",
    description: "Complete bathroom remodel services Chandler AZ. Free estimates!",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Our Services
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6 text-foreground text-balance">
                Bathroom Remodel Services Chandler AZ
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Complete bathroom remodel services from licensed bathroom remodeling contractors in Chandler AZ. 
                Professional bathroom installation services, bathroom repair services, bathroom upgrade solutions, 
                and bathroom redesign services. Affordable bathroom remodeling services near me with free estimates.
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bathroomServices.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="group block bg-card border border-border rounded-xl p-8 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>
                  <h2 className="font-serif text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Main Bathroom Remodeling CTA */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Ready to Transform Your Bathroom?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation estimate for your bathroom remodeling project. 
              Our experts will help you design the perfect bathroom for your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/bathroom-remodeling">Learn About Full Remodels</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

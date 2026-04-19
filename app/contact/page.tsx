import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import ContactSection from "@/components/home/contact-section"
import { GoogleMap } from "@/components/google-map"
import { siteConfig } from "@/lib/site-config"
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react"
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Bathroom Remodel Quote Chandler AZ | Free Est",
  description: "Get a free bathroom remodel estimate in Chandler, AZ. Hire bathroom remodeler today! Affordable bathroom remodeling, fast quotes. Call now!",
  openGraph: {
    title: "Bathroom Remodel Quote Chandler AZ | Free Estimate",
    description: "Get a free bathroom remodel estimate in Chandler, AZ. Affordable bathroom remodeling!",
    url: `${siteConfig.url}/contact`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Contact ARZ Home Remodeling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodel Quote Chandler AZ | Free Estimate",
    description: "Get free bathroom remodel estimate in Chandler, AZ. Affordable pricing, fast quotes!",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
}

const contactFaqs = [
  {
    question: "How do I schedule a free home remodeling consultation in Chandler?",
    answer: "You can schedule a free consultation by calling us at (480) 555-0123, filling out our online contact form, or emailing us at info@arzhomeremodeling.com. We typically respond within 24 hours and can schedule consultations within the same week."
  },
  {
    question: "What should I expect during the free consultation?",
    answer: "During your free in-home consultation, our design expert will assess your space, discuss your vision and needs, take measurements, answer questions, and provide a detailed estimate with transparent pricing. The consultation typically takes 45-60 minutes."
  },
  {
    question: "How quickly can you start my remodeling project?",
    answer: "Project start times vary based on our schedule and your availability. Many projects can begin within 1-3 weeks of signing the contract. We'll provide specific timing during your consultation and work to accommodate your schedule."
  },
  {
    question: "Do you offer emergency repair services in Chandler?",
    answer: "While we specialize in home remodeling, we can address urgent issues like water damage or plumbing problems. Contact us immediately for emergency situations, and we'll assess how we can help or refer you to appropriate emergency services."
  }
];

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: siteConfig.url },
          { name: "Contact Us", url: `${siteConfig.url}/contact` }
        ]} 
      />
      <FAQSchema faqs={contactFaqs} />
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 lg:pt-48 pb-24 md:pb-32 bg-secondary">
          <div className="container mx-auto px-4 mt-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Get In Touch
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Get Free Bathroom Remodel Quote Chandler AZ
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ready to hire a bathroom remodeler in Chandler? Contact our licensed bathroom contractors for a free 
                bathroom remodel estimate. Affordable bathroom remodeling with flexible financing options available.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 -mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                <a 
                  href={`tel:${siteConfig.phone}`} 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Email</h3>
                <a 
                  href={`mailto:${siteConfig.email}`} 
                  className="text-muted-foreground hover:text-primary transition-colors block text-sm leading-snug"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground">
                  {siteConfig.address.city}, {siteConfig.address.state}
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground text-sm">
                  Mon-Fri: {siteConfig.hours.weekdays}<br />
                  Sat: {siteConfig.hours.saturday}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactSection />

        {/* Testimonials Section */}
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center mb-16">
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                What Customers Say
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                Trusted by Chandler Homeowners
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  project: "Master Bathroom Remodel",
                  text: "Chandler Bathroom Remodeling transformed our outdated bathroom into a luxury spa-like retreat. The craftsmanship is exceptional!",
                  rating: 5
                },
                {
                  name: "Mike Davis",
                  project: "Walk-in Shower Installation",
                  text: "Professional, punctual, and the quality of work exceeded all expectations. Highly recommend to anyone in Chandler!",
                  rating: 5
                },
                {
                  name: "Jennifer Martinez",
                  project: "Bathroom Vanity Upgrade",
                  text: "Best decision we made for our home. The team was respectful, clean, and the final result is stunning.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic mb-6">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div>
                    <p className="font-serif font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-primary">
                      {testimonial.project}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust & Credentials */}
        <section className="py-16 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Licensed & Bonded", value: "✓" },
                { label: "Fully Insured", value: "✓" },
                { label: "15+ Years", value: "Experienced" },
                { label: "500+ Projects", value: "Completed" }
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-2xl font-bold text-primary mb-2">{item.value}</p>
                  <p className="text-sm text-background/80">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-sm font-medium tracking-widest text-primary uppercase">
                  Find Us
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-serif font-semibold text-foreground text-balance">
                  Visit Our Showroom
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Located in the heart of Chandler, Arizona. Stop by to see our latest bathroom remodeling projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">{siteConfig.address.full}</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Phone</h3>
                  <a href={`tel:${siteConfig.phone}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {siteConfig.phone}
                  </a>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Fri: {siteConfig.hours.weekdays}<br />
                    Sat: {siteConfig.hours.saturday}
                  </p>
                </div>
              </div>

              <GoogleMap 
                lat={siteConfig.address.coordinates.lat}
                lng={siteConfig.address.coordinates.lng}
                zoom={15}
                title={siteConfig.name}
                address={siteConfig.address.full}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

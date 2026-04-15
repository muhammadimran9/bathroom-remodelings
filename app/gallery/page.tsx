import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"
import GalleryClient from "@/components/home/gallery-client"

export const metadata: Metadata = {
  title: "Bathroom Remodel Gallery | Chandler AZ",
  description: "View before & after photos of Chandler bathroom remodels: showers, vanities, master baths. See our expert transformations. Contact for your project!",
  keywords: ["bathroom gallery chandler", "bathroom remodel photos", "before after bathroom", "shower remodel gallery", "vanity installation photos"],
  authors: [{ name: "Airforshare.online" }],
  publisher: "Airforshare.online",
  openGraph: {
    title: "Bathroom Remodel Gallery | Chandler AZ",
    description: "View before & after photos of Chandler bathroom remodels: showers, vanities, master baths. See our expert transformations. Contact for your project!",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://airforshare.online'}/gallery`,
    type: "website",
    locale: "en_US",
    siteName: "Airforshare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodel Gallery | Chandler AZ",
    description: "View before & after photos of Chandler bathroom remodels: showers, vanities, master baths. See our expert transformations. Contact for your project!",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://airforshare.online'}/gallery`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

const categories = [
  { value: "all", label: "All Projects" },
  { value: "bathroom", label: "Bathroom" },
  { value: "shower", label: "Shower" },
  { value: "vanity", label: "Vanity" },
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-secondary">
          <div className="container mx-auto px-4">
            <div
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-sm font-medium tracking-widest text-primary uppercase">
                Our Work
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-foreground text-balance">
                Project Gallery
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Browse our portfolio of completed bathroom remodeling projects. 
                Each transformation showcases our commitment to quality and craftsmanship.
              </p>
            </div>
          </div>
        </section>

        <GalleryClient categories={categories} />
      </main>
      <Footer />
    </>
  )
}

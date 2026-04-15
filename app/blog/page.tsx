import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"
import BlogClient from "@/components/home/blog-client"

export const metadata: Metadata = {
  title: "Bathroom Remodel Blog | Chandler AZ Tips",
  description: "Expert tips on bathroom design, costs, trends from Chandler remodelers. Modern ideas, materials, inspiration for your renovation. Free quote today!",
  keywords: ["bathroom remodel blog", "bathroom design tips", "chandler bathroom ideas", "remodel inspiration", "bathroom trends"],
  authors: [{ name: "Airforshare.online" }],
  publisher: "Airforshare.online",
  openGraph: {
    title: "Bathroom Remodel Blog | Chandler AZ Tips",
    description: "Expert tips on bathroom design, costs, trends from Chandler remodelers. Modern ideas, materials, inspiration for your renovation. Free quote today!",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://airforshare.online'}/blog`,
    type: "website",
    locale: "en_US",
    siteName: "Airforshare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodel Blog | Chandler AZ Tips",
    description: "Expert tips on bathroom design, costs, trends from Chandler remodelers. Modern ideas, materials, inspiration for your renovation. Free quote today!",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://airforshare.online'}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <BlogClient />
      </main>
      <Footer />
    </>
  )
}

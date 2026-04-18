import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"
import BlogContent from "./blog-content"

export const metadata: Metadata = {
  title: "Bathroom Remodeling Blog - Tips & Ideas",
  description: "Expert bathroom remodeling tips, design trends, and ideas from Chandler, Arizona's top contractors. Learn about costs and materials.",
  openGraph: {
    title: "Bathroom Remodeling Blog - Tips & Ideas",
    description: "Discover expert bathroom remodeling tips and design inspiration from Chandler's experienced contractors.",
    url: `${siteConfig.url}/blog`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Blog - Tips & Ideas",
    description: "Expert bathroom remodeling tips and design ideas from Chandler's top contractors.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export default function BlogPage() {
  return <BlogContent />
}


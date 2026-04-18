import { Metadata } from "next"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Project Gallery – Bathroom Remodeling | ARZ Home Remodeling",
  description: "View our completed bathroom remodeling projects in Chandler, AZ. Before and after photos showcasing our craftsmanship and design expertise.",
  openGraph: {
    title: "Project Gallery – Bathroom Remodeling | ARZ Home Remodeling",
    description: "View our completed bathroom remodeling projects in Chandler, AZ with before and after photos.",
    url: `${siteConfig.url}/gallery`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "ARZ Home Remodeling - Project Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery – Bathroom Remodeling | ARZ Home Remodeling",
    description: "View our completed bathroom remodeling projects in Chandler, AZ.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/gallery`,
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

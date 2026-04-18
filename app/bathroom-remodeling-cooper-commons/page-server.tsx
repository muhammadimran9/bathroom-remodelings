import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import CooperCommonsContent from "./cooper-commons-content";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Cooper Commons Chandler",
  description: "Professional bathroom remodeling in Cooper Commons, Chandler. Expert contractors serving this prestigious neighborhood with quality renovations.",
  keywords: ["bathroom remodeling cooper commons", "bathroom contractors chandler", "remodeling near me"],
  openGraph: {
    title: "Bathroom Remodeling Cooper Commons Chandler",
    description: "Professional bathroom remodeling in Cooper Commons with expert contractors.",
    url: `${siteConfig.url}/bathroom-remodeling-cooper-commons`,
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bathroom Remodeling Cooper Commons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Cooper Commons Chandler",
    description: "Professional bathroom remodeling in Cooper Commons.",
    images: [`${siteConfig.url}/og-image.jpg`],
  },
  alternates: {
    canonical: `${siteConfig.url}/bathroom-remodeling-cooper-commons`,
  },
};

export default function CooperCommonsPage() {
  return <CooperCommonsContent />;
}

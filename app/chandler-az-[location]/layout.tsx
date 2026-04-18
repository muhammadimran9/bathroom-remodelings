import { Metadata, ResolvingMetadata } from "next";
import { findLocationBySlug, getRelatedLocations } from "@/lib/chandler-locations";
import { generateLocationMetadata, validateMetadata } from "@/lib/generate-location-metadata";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ location: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { location } = await params;
  const locationData = findLocationBySlug(location);

  if (!locationData) {
    return notFound();
  }

  const metadata = generateLocationMetadata(location, siteConfig.url);
  if (!metadata) {
    return notFound();
  }

  // Validate metadata compliance
  const validation = validateMetadata(metadata);
  if (!validation.valid) {
    console.warn(`Metadata validation failed for ${location}:`, validation.errors);
  }

  const displayName =
    locationData.type === "zip"
      ? `Chandler, AZ ${locationData.zipData.zip}`
      : locationData.neighborhood
        ? locationData.neighborhood.name
        : "Chandler, AZ";

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url,
      type: "website",
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Bathroom Remodeling in ${displayName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
    alternates: {
      canonical: metadata.canonical,
    },
  };
}

export default function LocationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

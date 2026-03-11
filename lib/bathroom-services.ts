import { ShowerHead, Bath, Lightbulb, LucideIcon, Droplets, Sparkles, ArrowUpDown, Accessibility } from "lucide-react";

export type BathroomService = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const bathroomServices: BathroomService[] = [
  {
    name: "Shower Remodeling",
    href: "/shower-remodeling",
    description:
      "Complete shower remodeling services with modern fixtures, premium materials, and expert craftsmanship.",
    icon: ShowerHead,
  },
  {
    name: "Bathtub Remodeling",
    href: "/bathtub-remodeling",
    description:
      "Professional bathtub remodeling and replacement services for ultimate comfort and relaxation.",
    icon: Bath,
  },
  {
    name: "Bathroom Vanity Installation",
    href: "/bathroom-vanity-installation",
    description:
      "Expert bathroom vanity installation services with custom designs and premium materials.",
    icon: Sparkles,
  },
  {
    name: "Bathroom Flooring Installation",
    href: "/bathroom-flooring-installation",
    description:
      "Professional bathroom flooring installation with durable, water-resistant materials.",
    icon: ArrowUpDown,
  },
  {
    name: "Bathroom Lighting Installation",
    href: "/bathroom-lighting-installation",
    description:
      "Modern bathroom lighting installation services for enhanced ambiance and functionality.",
    icon: Lightbulb,
  },
  {
    name: "Bathroom Tile Installation",
    href: "/bathroom-tile-installation",
    description:
      "Expert bathroom tile installation with premium materials and precision craftsmanship.",
    icon: Droplets,
  },
  {
    name: "Bathroom Accessibility Remodeling",
    href: "/bathroom-accessibility-remodeling",
    description:
      "ADA-compliant bathroom accessibility remodeling for seniors and individuals with mobility needs.",
    icon: Accessibility,
  },
  {
    name: "Small Bathroom Remodeling",
    href: "/small-bathroom-remodeling",
    description:
      "Maximize your small bathroom space with our expert small bathroom remodeling services.",
    icon: Bath,
  },
];

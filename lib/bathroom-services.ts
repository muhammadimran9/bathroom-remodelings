import { ShowerHead, Bath, Grid3X3, LucideIcon, Droplets, Sparkles, ArrowUpDown } from "lucide-react";

export type BathroomService = {
  name: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export const bathroomServices: BathroomService[] = [
  {
    name: "Bathtubs",
    href: "/services/bathtubs",
    description:
      "Premium bathtub installation and replacement services for ultimate comfort and relaxation.",
    icon: Bath,
  },
  {
    name: "Shower Systems",
    href: "/services/shower-systems",
    description:
      "Complete shower system installations with modern fixtures and premium materials.",
    icon: ShowerHead,
  },
  {
    name: "Walk-In Showers",
    href: "/services/walk-in-showers",
    description:
      "Accessible walk-in shower installations for safety, comfort, and modern design.",
    icon: Droplets,
  },
  {
    name: "Walk-In Tubs",
    href: "/services/walk-in-tubs",
    description:
      "Safe and accessible walk-in tub installations for enhanced bathing independence.",
    icon: Bath,
  },
  {
    name: "KOHLER® LuxStone Showers",
    href: "/services/kohler-luxstone-showers",
    description:
      "Premium KOHLER® LuxStone shower installations with luxury finishes and durability.",
    icon: Sparkles,
  },
  {
    name: "Tub to Shower Conversion",
    href: "/services/tub-to-shower-conversion",
    description:
      "Convert your old bathtub to a modern, functional shower space efficiently.",
    icon: ArrowUpDown,
  },
  {
    name: "KOHLER® Walk-In Bath",
    href: "/services/kohler-walk-in-bath",
    description:
      "Premium KOHLER® walk-in bath solutions combining safety with luxury bathing.",
    icon: Grid3X3,
  },
];

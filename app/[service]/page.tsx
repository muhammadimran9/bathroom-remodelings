import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Bath,
  Droplets,
  Hammer,
  HandCoins,
  HardHat,
  Layout,
  Paintbrush,
  PhoneCall,
  Ruler,
  ShieldCheck,
  ShowerHead,
  Sparkles,
  Timer,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ServiceHero from "@/components/services/service-hero";
import ServiceCTA from "@/components/services/service-cta";
import ServiceProcess from "@/components/services/service-process";
import IssuesSolved from "@/components/services/issues-solved";
import Benefits from "@/components/services/benefits";
import Tips from "@/components/services/tips";
import Testimonials from "@/components/home/testimonials";
import ContactSection from "@/components/home/contact-section";
import { GoogleMap } from "@/components/services/google-map";
import { bathroomServices } from "@/lib/bathroom-services";
import { siteConfig } from "@/lib/site-config";

type ServiceDetail = {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
  process: {
    title: string;
    subtitle: string;
    description: string;
    steps: {
      number: string;
      icon: LucideIcon;
      title: string;
      description: string;
    }[];
  };
  issues: {
    problem: string;
    solution: string;
  }[];
  benefits: {
    icon: LucideIcon;
    title: string;
    description: string;
  }[];
  tips: string[];
  ctas: {
    midTitle: string;
    midDescription: string;
    finalTitle: string;
    finalDescription: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

const serviceMap = bathroomServices.reduce<Record<string, (typeof bathroomServices)[number]>>(
  (acc, service) => {
    const slug = service.href.replace("/", "");
    acc[slug] = service;
    return acc;
  },
  {}
);

const serviceContent: Record<string, ServiceDetail> = {
  "shower-remodeling": {
    hero: {
      title: "Shower Remodeling in Chandler, Arizona",
      subtitle: "Custom Shower Renovations in Chandler AZ",
      description:
        "Upgrade to a watertight, spa-inspired shower with premium tilework, glass, and fixtures tailored to your Chandler home.",
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    process: {
      title: "Shower Remodel Process",
      subtitle: "Our Process",
      description:
        "A streamlined, mess-managed shower remodel built for Chandler homeowners who want a faster, cleaner upgrade.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Consultation & Measurements",
          description: "We review goals, measure your shower footprint, and plan waterproofing details.",
        },
        {
          number: "02",
          icon: Ruler,
          title: "Design & Selections",
          description: "Tile, glass, fixtures, and drainage layout tailored to your style and daily routine.",
        },
        {
          number: "03",
          icon: Hammer,
          title: "Demo & Prep",
          description: "Clean demolition, substrate repair, and moisture barrier installation for durability.",
        },
        {
          number: "04",
          icon: ShowerHead,
          title: "Tile & Fixture Install",
          description: "Precision tile setting, niche detailing, and valve/fixture installation for a spa feel.",
        },
        {
          number: "05",
          icon: ShieldCheck,
          title: "Inspection & Walkthrough",
          description: "Sealing, testing, and a final walkthrough to confirm drainage, fit, and finish.",
        },
      ],
    },
    issues: [
      {
        problem: "Outdated shower surrounds that leak or collect mold.",
        solution: "Fully waterproofed systems with modern tile and sealed glass to stop leaks and mildew.",
      },
      {
        problem: "Cracked grout lines and failing caulk at corners.",
        solution: "New substrates, proper expansion joints, and premium sealants for long-term protection.",
      },
      {
        problem: "Cramped layouts with poor storage for toiletries.",
        solution: "Built-in niches, benches, and smarter layout options that open up the shower footprint.",
      },
      {
        problem: "Poor drainage and standing water on the shower floor.",
        solution: "Re-sloped pans and upgraded drains that keep water moving and surfaces safer.",
      },
      {
        problem: "Dated hardware that clashes with the rest of the bathroom.",
        solution: "Coordinated fixture packages in finishes that match your vanity, lighting, and trim.",
      },
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Spa-Level Look",
        description: "Frameless glass, premium tile, and clean lines create a relaxing Chandler retreat.",
      },
      {
        icon: ShieldCheck,
        title: "Leak Protection",
        description: "Moisture barriers and sealed corners protect walls and subflooring from damage.",
      },
      {
        icon: Droplets,
        title: "Better Drainage",
        description: "Proper slopes and upgraded drains reduce standing water and keep grout cleaner.",
      },
      {
        icon: TrendingUp,
        title: "Higher Home Value",
        description: "A modern shower is a top buyer priority in Chandler's competitive market.",
      },
      {
        icon: Timer,
        title: "Faster Mornings",
        description: "Organized niches and improved lighting streamline daily routines.",
      },
    ],
    tips: [
      "Squeegee glass after each use to reduce water spots and mineral buildup.",
      "Use pH-neutral cleaners on natural stone and grout-safe products on tile.",
      "Run the exhaust fan for 20 minutes after showers to prevent humidity and mildew.",
      "Check caulk annually at corners and niches to maintain a watertight seal.",
      "Choose slip-resistant shower floors if you have kids, seniors, or mobility needs.",
    ],
    ctas: {
      midTitle: "Ready for a Chandler shower remodel that stays watertight?",
      midDescription:
        "Get a custom shower plan, tile selections, and a clean installation schedule tailored to your home.",
      finalTitle: "Need fast shower remodeling in Chandler, AZ?",
      finalDescription: "Call now for a same-week consultation and clear pricing on your new shower.",
    },
    seo: {
      title: "Shower Remodeling in Chandler AZ | Custom Shower Renovations",
      description:
        "Shower remodeling in Chandler, Arizona. Waterproof installations, custom tile, glass enclosures, niches, and premium fixtures. Call for a free shower remodel estimate.",
    },
  },
  "bathtub-installation": {
    hero: {
      title: "Bathtub Installation in Chandler, Arizona",
      subtitle: "Comfort-First Bathtub Installers in Chandler AZ",
      description:
        "Install a new bathtub with proper leveling, plumbing connections, and finished trim so your Chandler bathroom feels complete.",
      image:
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    process: {
      title: "Bathtub Installation Process",
      subtitle: "Our Process",
      description: "Precise planning and careful finishing so your new tub looks great and drains perfectly.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Consult & Measure",
          description: "Confirm tub size, clearance, and venting requirements for your Chandler home.",
        },
        {
          number: "02",
          icon: Bath,
          title: "Tub Selection",
          description: "Select alcove or freestanding tubs, drain orientation, and coordinated trim.",
        },
        {
          number: "03",
          icon: Wrench,
          title: "Plumbing Prep",
          description: "Set the drain, trap, and supply lines to manufacturer specs for leak-free use.",
        },
        {
          number: "04",
          icon: Hammer,
          title: "Set & Level",
          description: "Secure and level the tub, foam-support if required, and verify slope to drain.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Finish & Seal",
          description: "Install surround finishes, trim, and waterproof caulk for a clean, polished look.",
        },
      ],
    },
    issues: [
      {
        problem: "Old tubs that are stained, chipped, or creaking under weight.",
        solution: "New, properly supported tubs with solid subfloor prep and quiet, rigid installs.",
      },
      {
        problem: "Improperly leveled tubs causing slow drainage or pooling water.",
        solution: "Laser leveling and corrected slope so water drains quickly without lingering puddles.",
      },
      {
        problem: "Limited soaking depth or uncomfortable layouts.",
        solution: "Sized tubs with ergonomic depth, back support, and faucet placement for comfort.",
      },
      {
        problem: "Mismatched fixtures and surrounds after a DIY install.",
        solution: "Coordinated trim kits, overflow covers, and surround finishes that match your design.",
      },
      {
        problem: "Risk of leaks at the tub apron or surround seams.",
        solution: "Continuous waterproofing, sealed seams, and tested connections before finishing.",
      },
    ],
    benefits: [
      {
        icon: Bath,
        title: "Comfortable Soaks",
        description: "Ergonomic tub selections tailored to how you relax and bathe.",
      },
      {
        icon: ShieldCheck,
        title: "Leak-Safe Setup",
        description: "Proper drains, traps, and seals keep moisture away from framing.",
      },
      {
        icon: TrendingUp,
        title: "Resale Appeal",
        description: "Fresh tubs with coordinated trim help listings stand out in Chandler.",
      },
      {
        icon: Timer,
        title: "Quick Installs",
        description: "Efficient scheduling minimizes downtime so your bath is back in service fast.",
      },
      {
        icon: Sparkles,
        title: "Clean Finishes",
        description: "Trim, caulk, and surrounds are detailed for a showroom-ready look.",
      },
    ],
    tips: [
      "Use non-abrasive cleaners to protect enamel and acrylic finishes.",
      "Inspect caulk lines quarterly; reapply at the apron and corners as needed.",
      "Add a slip-resistant mat or textured base if seniors or kids use the tub.",
      "Run warm water before filling to preheat the tub surface for longer heat retention.",
      "Pair your tub with a WaterSense faucet to reduce water use without losing flow.",
    ],
    ctas: {
      midTitle: "Want a perfectly level bathtub installation in Chandler?",
      midDescription: "Schedule a free estimate for tub selection, plumbing prep, and clean finishing.",
      finalTitle: "Need bathtub installation in Chandler, AZ?",
      finalDescription: "Call now for fast scheduling and a polished install that's ready to use.",
    },
    seo: {
      title: "Bathtub Installation in Chandler AZ | Professional Tub Installers",
      description:
        "Bathtub installation in Chandler, Arizona. Level installs, proper drains, waterproof sealing, and coordinated trim. Get a free bathtub installation estimate today.",
    },
  },
  "bathtub-replacement": {
    hero: {
      title: "Bathtub Replacement in Chandler, Arizona",
      subtitle: "Replace Your Bathtub in Chandler AZ",
      description:
        "Swap outdated tubs for modern, comfortable replacements with clean removal, plumbing updates, and fresh finishes.",
      image:
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    process: {
      title: "Bathtub Replacement Process",
      subtitle: "Our Process",
      description: "A careful removal-and-install approach that protects finishes and keeps your project on schedule.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Site Review",
          description: "We inspect access paths, plumbing, and venting to plan a clean removal.",
        },
        {
          number: "02",
          icon: Hammer,
          title: "Removal & Disposal",
          description: "Careful demo of the old tub and debris haul-away without damaging nearby finishes.",
        },
        {
          number: "03",
          icon: Wrench,
          title: "Rough-In Adjustments",
          description: "Update drains, supply lines, and blocking to fit the new tub perfectly.",
        },
        {
          number: "04",
          icon: Bath,
          title: "Set New Tub",
          description: "Level, secure, and test the new bathtub with proper support and sealing.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Trim & Finish",
          description: "Refinish surrounds, replace caulk, and clean the space for immediate use.",
        },
      ],
    },
    issues: [
      {
        problem: "Chipped, stained tubs that hurt your bathroom's look.",
        solution: "New acrylic, steel, or cast tubs with clean lines and updated finishes.",
      },
      {
        problem: "Tubs that flex, creak, or feel unstable.",
        solution: "Proper subfloor reinforcement and foam/ledger support to stop movement.",
      },
      {
        problem: "Leaks at old overflow gaskets or failing drains.",
        solution: "New gaskets, drains, and traps tested under load before we close the wall.",
      },
      {
        problem: "Awkward heights that make entry difficult.",
        solution: "Lower-threshold replacements or walk-in conversions for safer access.",
      },
      {
        problem: "Mismatched fixtures after swapping tubs.",
        solution: "Coordinated faucets, spouts, and trim that match your current style.",
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "Reliable Plumbing",
        description: "Fresh drains and seals reduce the risk of hidden leaks and damage.",
      },
      {
        icon: TrendingUp,
        title: "Value Boost",
        description: "A clean, modern tub improves listing photos and buyer impressions.",
      },
      {
        icon: Sparkles,
        title: "Modern Aesthetics",
        description: "Updated silhouettes and finishes match today's Chandler bathroom styles.",
      },
      {
        icon: Timer,
        title: "Quick Turnaround",
        description: "Efficient removal and install keep downtime low so you can keep routines.",
      },
      {
        icon: Droplets,
        title: "Cleaner Surrounds",
        description: "Fresh caulk and sealed seams make maintenance easier and resist mildew.",
      },
    ],
    tips: [
      "If you're planning tile updates, replace the tub first to avoid re-cutting tile.",
      "Upgrade the drain assembly during replacement to prevent future leaks.",
      "Consider a handheld shower for easier cleaning and rinsing the tub walls.",
      "Inspect caulk at the apron and corners every six months for wear.",
      "Add a slip-resistant base treatment if the bathroom is used by kids or seniors.",
    ],
    ctas: {
      midTitle: "Replacing a worn tub in Chandler?",
      midDescription: "Get clean removal, updated plumbing, and a leveled install without the mess.",
      finalTitle: "Need bathtub replacement in Chandler, AZ?",
      finalDescription: "Call now for a fast quote and professional tub replacement scheduling.",
    },
    seo: {
      title: "Bathtub Replacement in Chandler AZ | Modern Tub Upgrades",
      description:
        "Bathtub replacement in Chandler, Arizona. Clean removal, updated plumbing, level installs, and fresh finishes. Contact us for a fast bathtub replacement quote.",
    },
  },
  "walk-in-shower-installation": {
    hero: {
      title: "Walk-in Shower Installation in Chandler, Arizona",
      subtitle: "Accessible Walk-In Showers in Chandler AZ",
      description:
        "Create an open, safer walk-in shower with slip-resistant materials, glass, and storage tailored to your Chandler home.",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    process: {
      title: "Walk-in Shower Installation Process",
      subtitle: "Our Process",
      description: "Accessibility-focused planning with finishes that still feel luxe and easy to maintain.",
      steps: [
        {
          number: "01",
          icon: PhoneCall,
          title: "Accessibility Review",
          description: "We assess clearances, thresholds, and grab bar locations for safe entry.",
        },
        {
          number: "02",
          icon: Layout,
          title: "Layout & Glass Plan",
          description: "Design open sightlines, glass sizing, and storage niches for daily use.",
        },
        {
          number: "03",
          icon: ShieldCheck,
          title: "Waterproofing",
          description: "Install pan, membrane, and backer systems to protect framing long-term.",
        },
        {
          number: "04",
          icon: ShowerHead,
          title: "Tile & Fixture Install",
          description: "Set slip-resistant floors, tile walls, and accessible fixture heights.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Testing & Handoff",
          description: "Drainage, glass alignment, and safety checks before your walkthrough.",
        },
      ],
    },
    issues: [
      {
        problem: "High tub walls that are difficult or unsafe to step over.",
        solution: "Low-threshold or curbless walk-in showers with grab bars and stable footing.",
      },
      {
        problem: "Dark, enclosed showers that feel cramped.",
        solution: "Frameless glass, bright tile selections, and better lighting for an open feel.",
      },
      {
        problem: "Slippery floors and no seating options.",
        solution: "Slip-resistant tile, built-in benches, and adjustable handheld showerheads.",
      },
      {
        problem: "Water escaping onto the bathroom floor.",
        solution: "Proper slope, linear drains, and glass placement to keep water where it belongs.",
      },
      {
        problem: "Insufficient storage for shampoo and bathing essentials.",
        solution: "Custom niches placed at comfortable heights to keep items organized.",
      },
    ],
    benefits: [
      {
        icon: ShieldCheck,
        title: "Safer Entry",
        description: "Low or curbless thresholds reduce trip hazards for every family member.",
      },
      {
        icon: Layout,
        title: "Open Layout",
        description: "Glass and thoughtful tile choices make the bathroom feel larger.",
      },
      {
        icon: Sparkles,
        title: "Modern Style",
        description: "Minimal hardware, clean lines, and premium fixtures elevate the look.",
      },
      {
        icon: TrendingUp,
        title: "Home Value",
        description: "Accessible showers are highly requested by Chandler buyers and renters.",
      },
      {
        icon: Droplets,
        title: "Easy Cleaning",
        description: "Smooth tile layouts and quality drains make upkeep simpler.",
      },
    ],
    tips: [
      "Choose slip-resistant floor tile (DCOF > 0.42) for better traction when wet.",
      "Add blocking in the walls now for future grab bars, even if you don't install them today.",
      "Keep glass simpler to clean—fewer metal channels mean fewer places for buildup.",
      "Consider a handheld shower at a lower height for rinsing and seated use.",
      "Use a quality squeegee daily to maintain glass clarity in Arizona's hard water.",
    ],
    ctas: {
      midTitle: "Want an accessible walk-in shower in Chandler?",
      midDescription: "We'll design, waterproof, and install a safer, open shower that fits your space.",
      finalTitle: "Need walk-in shower installation in Chandler, AZ?",
      finalDescription: "Call today for a fast walkthrough and tailored walk-in shower estimate.",
    },
    seo: {
      title: "Walk-in Shower Installation Chandler AZ | Accessible Shower Pros",
      description:
        "Walk-in shower installation in Chandler, Arizona. Curbless and low-threshold showers, slip-resistant tile, glass enclosures, and waterproofing. Schedule a walk-in shower estimate.",
    },
  },
  "bathroom-tile-installation": {
    hero: {
      title: "Bathroom Tile Installation in Chandler, Arizona",
      subtitle: "Expert Bathroom Tile Installers in Chandler AZ",
      description:
        "Precision tile installation for shower walls, floors, and backsplashes that stay aligned, sealed, and beautiful.",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    process: {
      title: "Bathroom Tile Installation Process",
      subtitle: "Our Process",
      description: "Surface prep, waterproofing, and crisp layout lines for tile that stays flat and durable.",
      steps: [
        {
          number: "01",
          icon: Ruler,
          title: "Layout & Design",
          description: "We plan patterns, grout lines, and transitions that align with fixtures and niches.",
        },
        {
          number: "02",
          icon: HandCoins,
          title: "Surface Prep",
          description: "Backer board, leveling, and crack isolation to keep tile stable over time.",
        },
        {
          number: "03",
          icon: ShieldCheck,
          title: "Waterproofing",
          description: "Membranes and seams sealed in wet zones to prevent moisture intrusion.",
        },
        {
          number: "04",
          icon: Paintbrush,
          title: "Setting & Cuts",
          description: "Clean cuts, consistent spacing, and aligned edges around valves and corners.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Grout & Seal",
          description: "Proper cure times, grout sealing, and a full cleanup before handoff.",
        },
      ],
    },
    issues: [
      {
        problem: "Cracked or hollow tiles due to poor substrate prep.",
        solution: "Leveling, crack isolation, and proper thinset coverage for long-lasting adhesion.",
      },
      {
        problem: "Water intrusion behind shower walls.",
        solution: "Full waterproofing membranes and sealed penetrations around valves and niches.",
      },
      {
        problem: "Uneven grout lines and lippage that catch your eye.",
        solution: "Dialed-in layout, spacers, and leveling systems for flat, even planes.",
      },
      {
        problem: "Stained or crumbling grout in wet areas.",
        solution: "Quality grout, proper cure, and sealing to resist moisture and discoloration.",
      },
      {
        problem: "Tiles that clash with existing fixtures and cabinets.",
        solution: "Coordinated material selections that match faucets, hardware, and countertops.",
      },
    ],
    benefits: [
      {
        icon: Sparkles,
        title: "Crisp Lines",
        description: "Aligned patterns, straight grout joints, and clean cuts elevate any bathroom.",
      },
      {
        icon: ShieldCheck,
        title: "Moisture Defense",
        description: "Waterproof assemblies keep walls and subfloors safe from damage.",
      },
      {
        icon: TrendingUp,
        title: "Investment Value",
        description: "Quality tile work impresses buyers and lowers long-term maintenance.",
      },
      {
        icon: Droplets,
        title: "Easy Cleaning",
        description: "Sealed grout and smooth transitions simplify weekly cleaning.",
      },
      {
        icon: Layout,
        title: "Custom Layouts",
        description: "Feature walls, borders, and niches tailored to your design vision.",
      },
    ],
    tips: [
      "Choose porcelain or ceramic for showers; natural stone needs more sealing and care.",
      "Use lighter grout in small bathrooms to keep the space feeling open.",
      "Seal grout annually in wet zones to keep moisture and stains out.",
      "Ventilate during showers to reduce humidity that can discolor grout over time.",
      "Keep a few spare tiles after install for future repairs or remodels.",
    ],
    ctas: {
      midTitle: "Want flawless bathroom tile installation in Chandler?",
      midDescription: "Book a layout consult, material guidance, and precise tile setting for your space.",
      finalTitle: "Need bathroom tile installers in Chandler, AZ?",
      finalDescription: "Call now for a tile installation estimate with waterproofing and cleanup included.",
    },
    seo: {
      title: "Bathroom Tile Installation Chandler AZ | Waterproof Tile Experts",
      description:
        "Bathroom tile installation in Chandler, Arizona. Layout planning, waterproofing, flat installs, and sealed grout for showers, floors, and backsplashes. Get a tile quote today.",
    },
  },
  "bathroom-vanity-installation": {
    hero: {
      title: "Bathroom Vanity Installation in Chandler, Arizona",
      subtitle: "Custom Vanity Installation in Chandler AZ",
      description:
        "Install a vanity that improves storage, workflow, and style with aligned plumbing, countertops, and lighting.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop&fm=webp",
    },
    process: {
      title: "Bathroom Vanity Installation Process",
      subtitle: "Our Process",
      description: "Sized, leveled, and connected vanities that make your Chandler bathroom feel organized.",
      steps: [
        {
          number: "01",
          icon: Ruler,
          title: "Measure & Plan",
          description: "Confirm clearances, plumbing locations, and backsplash heights for a perfect fit.",
        },
        {
          number: "02",
          icon: Layout,
          title: "Select Vanity",
          description: "Choose single or double vanities, storage options, and countertop materials.",
        },
        {
          number: "03",
          icon: HardHat,
          title: "Prep & Blocking",
          description: "Adjust plumbing stubs, add blocking, and level the wall area before install.",
        },
        {
          number: "04",
          icon: Hammer,
          title: "Set & Level",
          description: "Secure the cabinet, shim for level, and verify drawer/door alignment.",
        },
        {
          number: "05",
          icon: Sparkles,
          title: "Top, Sink & Finish",
          description: "Install countertop, sink, faucet, and caulk seams for a clean, ready-to-use vanity.",
        },
      ],
    },
    issues: [
      {
        problem: "Minimal storage leading to cluttered countertops.",
        solution: "Vanity layouts with drawers, organizers, and smart plumbing placement for storage.",
      },
      {
        problem: "Old vanities with peeling finishes or loose hardware.",
        solution: "New cabinets, hardware, and tops that match your bathroom palette and hold up to moisture.",
      },
      {
        problem: "Misaligned plumbing causing slow drains or leaks.",
        solution: "Reset traps, supply lines, and seals for reliable, drip-free operation.",
      },
      {
        problem: "Counter heights that feel uncomfortable for daily use.",
        solution: "Ergonomic height planning for brushing, grooming, and sharing the space.",
      },
      {
        problem: "Fixtures that don't match the rest of the bathroom.",
        solution: "Coordinated faucets, knobs, and mirrors for a cohesive Chandler bathroom look.",
      },
    ],
    benefits: [
      {
        icon: Layout,
        title: "Better Workflow",
        description: "Sized for your routine with organized storage where you need it most.",
      },
      {
        icon: Sparkles,
        title: "Polished Look",
        description: "Aligned tops, backsplash, and fixtures keep the vanity area seamless.",
      },
      {
        icon: ShieldCheck,
        title: "Durable Setup",
        description: "Proper sealing and moisture-resistant materials extend the vanity's life.",
      },
      {
        icon: TrendingUp,
        title: "Value Add",
        description: "Modern vanities attract Chandler buyers who want a move-in-ready bath.",
      },
      {
        icon: Timer,
        title: "Quicker Mornings",
        description: "Organized drawers and lighting alignment speed up daily routines.",
      },
    ],
    tips: [
      "Pick moisture-resistant cabinet materials or finishes for Arizona humidity swings.",
      "Add drawer organizers to keep grooming items tidy and easy to reach.",
      "Use a backsplash to protect walls from splashes and make cleaning easier.",
      "Choose a faucet with enough reach for the sink bowl to minimize splatter.",
      "Seal around the sink and backsplash annually to keep water out of the cabinet.",
    ],
    ctas: {
      midTitle: "Want a vanity install that fits your Chandler bathroom perfectly?",
      midDescription: "Schedule a consult for measurements, storage planning, and coordinated fixtures.",
      finalTitle: "Need bathroom vanity installation in Chandler, AZ?",
      finalDescription: "Call now for a precise vanity install with leveled tops and sealed plumbing.",
    },
    seo: {
      title: "Bathroom Vanity Installation Chandler AZ | Custom Vanity Pros",
      description:
        "Bathroom vanity installation in Chandler, Arizona. Measurements, leveling, countertop install, plumbing hook-ups, and storage planning. Get a vanity installation estimate today.",
    },
  },
};

export function generateStaticParams() {
  return Object.keys(serviceMap).map((slug) => ({ service: slug }));
}

export function generateMetadata({
  params,
}: {
  params: { service: string };
}): Metadata {
  const service = serviceMap[params.service];
  const content = serviceContent[params.service];

  if (!service || !content) return {};

  const title = content.seo.title;
  const description = content.seo.description;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${service.href}`,
    },
  };
}

const chandlerLocation = {
  lat: 33.3062,
  lng: -111.8413,
};

export default function BathroomServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = serviceMap[params.service];
  const content = serviceContent[params.service];

  if (!service || !content) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
          description={content.hero.description}
          image={content.hero.image}
          breadcrumbs={[
            { name: "Home", url: siteConfig.url },
            { name: service.name, url: `${siteConfig.url}${service.href}` },
          ]}
        />

        <ServiceProcess
          title={content.process.title}
          subtitle={content.process.subtitle}
          description={content.process.description}
          steps={content.process.steps}
        />

        <IssuesSolved
          title={`Issues We Solve with ${service.name}`}
          subtitle="Common Problems Fixed"
          description={`We address the most common ${service.name.toLowerCase()} challenges Chandler homeowners face.`}
          issues={content.issues}
        />

        <Benefits
          title={`Benefits of ${service.name} in Chandler`}
          subtitle="Why It Matters"
          benefits={content.benefits}
        />

        <Tips
          title={`${service.name} Tips & Maintenance`}
          subtitle="Keep It Looking New"
          description={`Simple, Chandler-friendly tips to keep your ${service.name.toLowerCase()} performing and looking its best.`}
          tips={content.tips}
        />

        <ServiceCTA title={content.ctas.midTitle} description={content.ctas.midDescription} />

        <Testimonials />

        <ContactSection />

        <section className="py-20 lg:py-32 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">Chandler, AZ</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 mb-4 text-foreground text-balance">
                Service Area Map for {service.name} in Chandler, Arizona
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                We serve homeowners across Chandler, Arizona with fast scheduling, reliable communication, and
                clean job sites. View our primary service area below and call if you need {service.name.toLowerCase()} nearby.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>• Chandler, AZ and nearby neighborhoods</li>
                <li>• Local crews familiar with East Valley homes</li>
                <li>• Same-week consultations when available</li>
              </ul>
            </div>
            <div>
              <GoogleMap
                lat={chandlerLocation.lat}
                lng={chandlerLocation.lng}
                zoom={12}
                title={`${service.name} in Chandler, AZ`}
                address="Chandler, Arizona"
              />
            </div>
          </div>
        </section>

        <ServiceCTA title={content.ctas.finalTitle} description={content.ctas.finalDescription} />
      </main>
      <Footer />
    </>
  );
}

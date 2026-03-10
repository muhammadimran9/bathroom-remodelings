export interface ServiceTestimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  content: string;
  service: string;
  serviceCategory: string;
  image: string;
  featured?: boolean;
}

// Homepage testimonials (general)
export const homepageTestimonials: ServiceTestimonial[] = [
  {
    id: "home-1",
    name: "Sarah Mitchell",
    location: "Chandler, AZ",
    rating: 5,
    content: "The team exceeded our expectations in every way. Our master bathroom went from dated and cramped to a spa-like retreat. The attention to detail was remarkable, and they finished on time and on budget.",
    service: "Bathroom Remodel",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "home-2",
    name: "Michael Thompson",
    location: "Sun Lakes, AZ",
    rating: 5,
    content: "From the initial consultation to the final walkthrough, the experience was seamless. They replaced our old bathtub with a sleek new install that instantly made the room feel cleaner, brighter, and easier to use.",
    service: "Bathtub Replacement",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "home-3",
    name: "Jennifer Garcia",
    location: "Mesa, AZ",
    rating: 5,
    content: "We converted our old tub to a beautiful walk-in shower, and I couldn't be happier. The frameless glass and rainfall showerhead make it feel like a luxury hotel. Highly recommend!",
    service: "Shower Conversion",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "home-4",
    name: "David Chen",
    location: "Tempe, AZ",
    rating: 5,
    content: "Professional from start to finish. The team communicated clearly throughout the project and delivered exactly what they promised. Our guest bathroom is now the highlight of our home!",
    service: "Full Bathroom Remodel",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
];

// Contact page testimonials (general)
export const contactTestimonials: ServiceTestimonial[] = [
  {
    id: "contact-1",
    name: "Lisa Rodriguez",
    location: "Chandler, AZ",
    rating: 5,
    content: "Outstanding customer service from start to finish. They were responsive, professional, and delivered exactly what they promised. Our bathroom renovation exceeded our expectations.",
    service: "Customer Service",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "contact-2",
    name: "Robert Chen",
    location: "Mesa, AZ",
    rating: 5,
    content: "The consultation process was thorough and informative. They helped us understand all our options and made great recommendations that fit our budget and timeline.",
    service: "Consultation",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "contact-3",
    name: "Amanda Wilson",
    location: "Tempe, AZ",
    rating: 5,
    content: "Communication was excellent throughout the entire project. They kept us informed every step of the way and were always available to answer our questions.",
    service: "Project Management",
    serviceCategory: "general",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2574&auto=format&fit=crop",
  },
];

export function getHomepageTestimonials(): ServiceTestimonial[] {
  return homepageTestimonials;
}

export function getContactTestimonials(): ServiceTestimonial[] {
  return contactTestimonials;
}
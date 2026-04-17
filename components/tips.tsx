"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Droplets, Palette, Shield } from "lucide-react";

const tips = [
  {
    icon: Lightbulb,
    title: "Lighting Matters",
    description: "Layer different types of lighting for the best ambiance and functionality."
  },
  {
    icon: Droplets,
    title: "Ventilation is Key",
    description: "Proper ventilation prevents moisture damage and maintains air quality."
  },
  {
    icon: Palette,
    title: "Choose Timeless Colors",
    description: "Neutral colors provide flexibility and won't go out of style quickly."
  },
  {
    icon: Shield,
    title: "Invest in Quality",
    description: "High-quality fixtures and materials save money in the long run."
  }
];

export default function Tips() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              Expert Tips
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional advice to help you make the best decisions for your bathroom remodel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <tip.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {tip.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
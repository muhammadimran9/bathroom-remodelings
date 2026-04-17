"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Heart, DollarSign, Clock } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased Home Value",
    description: "A quality bathroom remodel can increase your home's value by 10-20%."
  },
  {
    icon: Heart,
    title: "Enhanced Comfort",
    description: "Enjoy a more comfortable and functional space tailored to your needs."
  },
  {
    icon: DollarSign,
    title: "Energy Savings",
    description: "Modern fixtures and lighting can significantly reduce utility costs."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Better organization and layout save time in your daily routine."
  }
];

export default function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-foreground">
              Benefits of Remodeling
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover the many advantages of investing in a professional bathroom remodel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center bg-background rounded-xl p-6 border border-border"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Home, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Initial Consultation",
    description: "We discuss your vision, needs, and budget to create a customized plan."
  },
  {
    icon: Home,
    title: "Design & Planning",
    description: "Our team creates detailed designs and handles all permits and planning."
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Expert craftsmen bring your vision to life with quality materials."
  },
  {
    icon: CheckCircle,
    title: "Final Walkthrough",
    description: "We ensure everything meets our high standards and your expectations."
  }
];

export default function ServiceProcess() {
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
              Our Process
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We follow a proven process to ensure your bathroom remodel exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
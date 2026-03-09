"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";
import { bathroomServices } from "@/lib/bathroom-services";

export function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (wordCount < 20) {
      setError(`Message must be at least 20 words. Current: ${wordCount} words.`);
      return;
    }
    
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      zip: (form.elements.namedItem("zip") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      createdAt: new Date().toISOString(),
    };

    try {
      await addDoc(collection(db, "quotes"), data);
      alert("Quote request submitted successfully!");
      form.reset();
      setWordCount(0);
      setError("");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value.trim();
    const count = text ? text.split(/\s+/).filter(w => w).length : 0;
    setWordCount(count);
    if (count < 20) {
      setError(`Message must be at least 20 words. Current: ${count} words.`);
    } else {
      setError("");
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl shadow-lg p-6 lg:p-8">
      <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
        Get Free Quote
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        Fill out the form and we'll contact you within 24 hours
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          required
        />
        
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          required
        />
        
        <Input
          type="text"
          name="zip"
          placeholder="ZIP Code"
          required
        />
        
        <select
          name="service"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <option value="">Select Service</option>
          {bathroomServices.map((service) => (
            <option key={service.href} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        
        <div>
          <Textarea
            name="message"
            placeholder="Describe your project in detail (minimum 20 words required)"
            rows={4}
            className="resize-none"
            required
            onChange={handleMessageChange}
          />
          {error && (
            <p className="text-sm text-destructive mt-1">{error}</p>
          )}
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting || wordCount < 20}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isSubmitting ? "Sending..." : "Get Free Quote"}
        </Button>
      </form>
    </div>
  );
}

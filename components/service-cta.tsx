import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, PhoneIcon } from "lucide-react"

interface ServiceCTAProps {
  title: string
  description: string
}

export default function ServiceCTA({ title, description }: ServiceCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground text-balance">
            {title}
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80">
            {description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="tel:+1234567890">
                <PhoneIcon className="mr-2 h-4 w-4" />
                Call Us Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

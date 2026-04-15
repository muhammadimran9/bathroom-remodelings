import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceItem {
  id: string
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  image: string
  features: string[]
}

interface SubServicesProps {
  title: string
  subtitle: string
  description: string
  services: ServiceItem[]
}

export default function SubServices({ title, subtitle, description, services }: SubServicesProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {subtitle}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:grid-cols-2 md:[direction:rtl]" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium text-primary uppercase tracking-widest">
                      Service
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { ReactNode } from "react"

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

interface BenefitsProps {
  title: string
  subtitle: string
  benefits: BenefitItem[]
}

export default function Benefits({ title, subtitle, benefits }: BenefitsProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            {subtitle}
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors">
                <Icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

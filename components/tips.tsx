interface TipsProps {
  title: string
  subtitle: string
  description: string
  tips: string[]
}

export default function Tips({ title, subtitle, description, tips }: TipsProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
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

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
              <div className="flex-shrink-0">
                <span className="flex items-center justify-center h-8 w-8 rounded-md bg-primary text-primary-foreground font-semibold text-sm">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="text-foreground">{tip}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

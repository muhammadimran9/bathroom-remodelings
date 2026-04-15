interface IssueItem {
  problem: string
  solution: string
}

interface IssuesSolvedProps {
  title: string
  subtitle: string
  description: string
  issues: IssueItem[]
}

export default function IssuesSolved({ title, subtitle, description, issues }: IssuesSolvedProps) {
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {issues.map((issue, index) => (
            <div key={index} className="space-y-4">
              <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                <h3 className="font-semibold text-foreground flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  {issue.problem}
                </h3>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                <p className="text-foreground flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  {issue.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

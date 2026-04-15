import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Free In-Home Consultation",
    description: "We visit your home to understand your needs, discuss design ideas, and provide a transparent estimate.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our design team creates detailed plans and 3D renderings so you can visualize the final result.",
  },
  {
    number: "03",
    title: "Permit & Approval",
    description: "We handle all necessary permits and inspections to ensure your project meets local codes.",
  },
  {
    number: "04",
    title: "Construction Phase",
    description: "Our experienced team executes the renovation with minimal disruption to your daily life.",
  },
  {
    number: "05",
    title: "Quality Inspection",
    description: "We conduct a thorough walkthrough to ensure every detail meets our high standards.",
  },
  {
    number: "06",
    title: "Project Completion",
    description: "Your beautiful new bathroom is ready to enjoy with a warranty on our workmanship.",
  },
]

export default function ServiceProcess() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-sm font-medium tracking-widest text-primary uppercase">
            Our Process
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground text-balance">
            From Consultation to Completion
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a transparent, step-by-step process to bring your bathroom vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <Card key={step.number} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold text-primary/30 mb-2">
                      {step.number}
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

import { Card } from "@/components/ui/card"
import { Sparkles, Rocket, Shield, Code2, Globe, Layers } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Workflows",
    description:
      "Automate repetitive tasks and let AI handle the heavy lifting. Focus on building features, not managing infrastructure.",
  },
  {
    icon: Rocket,
    title: "Lightning Fast Deployment",
    description:
      "Deploy to production in seconds with our global edge network. Zero configuration, zero downtime, zero hassle.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Built-in DDoS protection, automatic SSL certificates, and compliance with SOC 2, GDPR, and HIPAA standards.",
  },
  {
    icon: Code2,
    title: "Developer Experience First",
    description: "Intuitive CLI, powerful APIs, and seamless integrations with your favorite tools and frameworks.",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Deliver content from the edge closest to your users. 99.99% uptime SLA across 300+ edge locations worldwide.",
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "From prototype to production at scale. Handle millions of requests without breaking a sweat.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Sparkles className="h-4 w-4" />
            Features
          </div>
          <h2 className="mb-4 text-4xl font-bold text-balance sm:text-5xl">Faster iteration. More innovation.</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            The platform for rapid progress. Let your team focus on shipping features instead of managing infrastructure
            with automated CI/CD and integrated collaboration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3 transition-transform group-hover:scale-110">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

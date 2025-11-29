import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Hobby",
    price: "$0",
    description: "Perfect for personal projects and experimentation",
    features: ["Up to 3 projects", "100GB bandwidth", "Community support", "Basic analytics", "SSL certificates"],
    cta: "Start for free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$20",
    description: "For professional developers and small teams",
    features: [
      "Unlimited projects",
      "1TB bandwidth",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Team collaboration",
      "AI-powered insights",
    ],
    cta: "Start 14-day trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Pro",
      "Unlimited bandwidth",
      "Dedicated support",
      "SLA guarantee",
      "Custom contracts",
      "Advanced security",
      "Audit logs",
      "SSO / SAML",
    ],
    cta: "Contact sales",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            Pricing
          </div>
          <h2 className="mb-4 text-4xl font-bold text-balance sm:text-5xl">Simple, transparent pricing</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Choose the perfect plan for your needs. Always know what you&apos;ll pay.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border bg-card p-8 ${
                plan.popular ? "border-accent shadow-xl shadow-accent/20 lg:scale-105" : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-muted-foreground"> /month</span>}
              </div>

              <Button
                className={`mb-8 w-full ${plan.popular ? "" : "variant-outline"}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

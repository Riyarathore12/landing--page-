import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow",
    content:
      "FlowSync has completely transformed how we ship products. What used to take weeks now takes days. The AI-powered workflows are a game-changer.",
    rating: 5,
    image: "/professional-woman-cto.png",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Engineer at DataScale",
    company: "DataScale",
    content:
      "The developer experience is phenomenal. We migrated our entire infrastructure in a weekend and haven't looked back. Best decision we've made.",
    rating: 5,
    image: "/professional-engineer.png",
  },
  {
    name: "Emily Watson",
    role: "Product Manager at CloudNine",
    company: "CloudNine",
    content:
      "Our deployment time went from 45 minutes to under 30 seconds. The team can iterate faster than ever, and our customers love the improved performance.",
    rating: 5,
    image: "/professional-woman-pm.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-sm text-accent">
            <Star className="h-4 w-4" fill="currentColor" />
            Testimonials
          </div>
          <h2 className="mb-4 text-4xl font-bold text-balance sm:text-5xl">Loved by developers worldwide</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Join thousands of teams who have accelerated their development workflow with FlowSync.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border bg-card p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-foreground leading-relaxed">&quot;{testimonial.content}&quot;</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

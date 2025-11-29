import { Card } from "@/components/ui/card"
import { TrendingUp, Clock, Target, Zap } from "lucide-react"

const stats = [
  {
    icon: Clock,
    value: "20 days",
    label: "saved on daily builds",
    company: "NETFLIX",
  },
  {
    icon: TrendingUp,
    value: "98%",
    label: "faster time to market",
    company: "TripAdvisor",
  },
  {
    icon: Target,
    value: "300%",
    label: "increase in performance",
    company: "box",
  },
  {
    icon: Zap,
    value: "6x faster",
    label: "to build + deploy",
    company: "ebay",
  },
]

export function StatsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border bg-card p-6 transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="mb-4 inline-flex rounded-lg bg-accent/10 p-3">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                <div className="mb-4 text-sm text-muted-foreground">{stat.label}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">
                  {stat.company}
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-muted-foreground">Now live with AI-powered workflows</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance sm:text-6xl lg:text-7xl">
            The complete platform to build the web.
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty sm:text-xl lg:text-2xl">
            Your team&apos;s toolkit to stop configuring and start innovating. Securely build, deploy, and scale the
            best web experiences with FlowSync.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full gap-2 sm:w-auto">
              Get a demo
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full gap-2 sm:w-auto bg-transparent">
              <Play className="h-4 w-4" />
              Watch video
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 border-t border-border pt-8">
            <p className="mb-6 text-sm text-muted-foreground">Trusted by industry leaders</p>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground">NETFLIX</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground">GitHub</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground">Notion</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-xl font-bold text-muted-foreground">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

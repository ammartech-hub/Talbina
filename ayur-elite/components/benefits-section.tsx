import {
  Ban,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Sparkles,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import { benefits, nutrition } from '@/lib/site-data'

const icons: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  zap: Zap,
  'heart-pulse': HeartPulse,
  leaf: Leaf,
  ban: Ban,
}

export function BenefitsSection() {
  return (
    <section id="benefits" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.25em] text-gold">
          WHY A BOWL OF TALBEENA
        </p>
        <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
          Fuel your body. Boost immunity. Stay active.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => {
            const Icon = icons[b.icon]
            return (
              <div
                key={b.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-colors hover:border-gold/60"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-forest group-hover:text-forest-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-medium text-primary">
                  {b.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 rounded-2xl bg-forest px-6 py-8 sm:px-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {nutrition.map((n) => (
              <div key={n.label}>
                <p className="font-serif text-4xl font-semibold text-forest-foreground sm:text-5xl">
                  {n.value}
                  <span className="ml-1 align-top text-lg text-gold">
                    {n.unit}
                  </span>
                </p>
                <p className="mt-1 text-xs font-medium tracking-[0.2em] text-forest-foreground/70">
                  {n.label.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-right text-xs text-muted-foreground">
          *Nutrition values per serving. Visuals are for illustrative purposes
          only.
        </p>
      </div>
    </section>
  )
}

import { Quote, Star } from 'lucide-react'
import { reviews } from '@/lib/site-data'

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-forest py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-[0.25em] text-gold">
          LOVED ACROSS INDIA
        </p>
        <h2 className="mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-forest-foreground sm:text-5xl">
          Thousands of families, one favourite bowl.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-forest-foreground/10 bg-forest-foreground/5 p-7"
            >
              <Quote className="size-7 text-gold" aria-hidden="true" />
              <div
                className="mt-4 flex gap-0.5 text-gold"
                aria-label="Rated 5 out of 5"
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-forest-foreground/90">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-gold/20 font-serif text-lg text-gold">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-medium text-forest-foreground">
                    {r.name}
                  </span>
                  <span className="block text-sm text-forest-foreground/60">
                    {r.city}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

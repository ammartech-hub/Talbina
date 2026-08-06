import { marqueeItems } from '@/lib/site-data'

export function MarqueeStrip() {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className="overflow-hidden border-y border-primary/40 bg-forest py-5">
      <div className="flex w-max animate-marquee items-center">
        {items.map((item, i) => (
          <div key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-serif text-2xl italic text-forest-foreground sm:text-3xl">
              {item}
            </span>
            <span className="text-gold" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

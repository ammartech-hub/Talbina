import Image from 'next/image'
import {
  Award,
  BadgeCheck,
  FlaskConical,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react'
import { certifications, whyChoose } from '@/lib/site-data'

const certIcons: Record<string, LucideIcon> = {
  'shield-check': ShieldCheck,
  award: Award,
  'badge-check': BadgeCheck,
  'flask-conical': FlaskConical,
}

export function WhyChooseSection() {
  return (
    <section id="why-us" className="scroll-mt-20 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-right sm:text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-gold">
            WHY CHOOSE AL KABEER
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            Nurturing health, every single day.
          </h2>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-3xl border border-border shadow-lg">
              <Image
                src="/products/banner-flavours.jpg"
                alt="Al Kabeer Talbeena three-flavour lineup with nutrition highlights"
                width={640}
                height={640}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {certifications.map((c) => {
                const Icon = certIcons[c.icon]
                return (
                  <div
                    key={c.label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                  >
                    <Icon
                      className="size-5 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span className="text-sm font-medium text-foreground/85">
                      {c.label}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <ol className="relative">
            {whyChoose.map((item, i) => (
              <li
                key={item.number}
                className={`flex gap-6 py-8 ${
                  i !== whyChoose.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="font-serif text-5xl font-semibold text-gold/40">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-serif text-2xl font-medium text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

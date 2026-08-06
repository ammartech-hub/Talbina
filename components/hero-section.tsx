import Image from 'next/image'
import { Clock, MessageCircle, ShoppingBag } from 'lucide-react'
import { WHATSAPP_ORDERS, whatsappLink } from '@/lib/site-data'

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 text-[0.7rem] font-medium tracking-[0.2em] text-forest">
            100% NATURAL • TRUSTED BY THOUSANDS OF FAMILIES
          </span>

          <h1 className="mt-6 text-balance font-serif text-5xl font-semibold leading-[1.05] text-primary sm:text-6xl lg:text-7xl">
            Goodness of <span className="italic text-gold">Wheat</span> &amp; Dry
            Fruits.
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            Al Kabeer Talbeena — a wholesome porridge of wheat and real dry
            fruits, ready in just 5 minutes. Three delicious flavours, one
            power-packed choice.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              Explore Flavours
            </a>
            <a
              href={whatsappLink(WHATSAPP_ORDERS, 'Hi! I would like to order Al Kabeer Talbeena.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Order on WhatsApp
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <Clock className="size-4 text-gold" aria-hidden="true" />
              Ready in 5 minutes
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
              No added sugar
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-gold" aria-hidden="true" />
              No preservatives
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-xl">
            <Image
              src="/products/banner-hero.jpg"
              alt="Three flavours of Al Kabeer Talbeena porridge boxes with bowls, dry fruits and a milk splash"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-lg">
            <span className="font-serif text-3xl font-semibold text-primary">
              ₹299
            </span>
            <span className="text-xs leading-tight text-muted-foreground">
              per box
              <br />3 flavours available
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

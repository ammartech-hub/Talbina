import Image from 'next/image'
import { Check, MessageCircle } from 'lucide-react'
import { products, WHATSAPP_ORDERS, whatsappLink } from '@/lib/site-data'

export function ProductsSection() {
  return (
    <section
      id="products"
      className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-[0.25em] text-gold">
            FEATURED PRODUCTS
          </p>
          <h2 className="mt-4 text-balance font-serif text-4xl font-semibold leading-tight text-primary sm:text-5xl">
            3 Delicious Flavours, <span className="italic text-gold">1</span>{' '}
            Power-Packed Choice
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.slug}
              className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={`${p.name} porridge box with a bowl, milk splash and dry fruits`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold">
                  {p.kicker.toUpperCase()}
                </p>
                <h3 className="mt-3 font-serif text-3xl font-medium text-primary">
                  {p.name}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {p.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-sm text-foreground/80"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-serif text-3xl font-semibold text-primary">
                    {p.price}
                  </span>
                  <a
                    href="#contact"
                    className="text-sm font-medium text-forest underline-offset-4 hover:underline"
                  >
                    View details
                  </a>
                </div>

                <a
                  href={whatsappLink(
                    WHATSAPP_ORDERS,
                    `Hi! I would like to order ${p.name} (${p.price}).`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Buy Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

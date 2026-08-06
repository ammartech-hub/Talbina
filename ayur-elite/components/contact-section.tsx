import { MessageCircle, Phone } from 'lucide-react'
import {
  WHATSAPP_ORDERS,
  WHATSAPP_SUPPORT,
  whatsappLink,
} from '@/lib/site-data'

const contacts = [
  {
    phone: WHATSAPP_ORDERS,
    display: '+91 8369100215',
    role: 'Orders & enquiries',
  },
  {
    phone: WHATSAPP_SUPPORT,
    display: '+91 9892440226',
    role: 'Customer support',
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-forest px-6 py-16 text-center sm:px-12 lg:py-20">
        <p className="text-sm font-semibold tracking-[0.25em] text-gold">
          GET IN TOUCH
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl text-balance font-serif text-4xl font-semibold leading-tight text-forest-foreground sm:text-5xl">
          Order your bowl on WhatsApp
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-forest-foreground/75">
          Message us to place an order or ask anything about Al Kabeer Talbeena.
          Our team is happy to help you pick the right flavour.
        </p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.phone}
              href={whatsappLink(c.phone, 'Hi! I would like to order Al Kabeer Talbeena.')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-forest-foreground/15 bg-forest-foreground/5 px-6 py-5 text-left transition-colors hover:border-gold/50"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold text-gold-foreground">
                <MessageCircle className="size-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-lg font-medium text-forest-foreground">
                  {c.display}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-forest-foreground/60">
                  <Phone className="size-3.5" aria-hidden="true" />
                  {c.role}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

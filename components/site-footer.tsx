import { MessageCircle } from 'lucide-react'
import {
  navLinks,
  WHATSAPP_ORDERS,
  WHATSAPP_SUPPORT,
  whatsappLink,
} from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest pt-16 pb-8">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none font-serif text-[22vw] italic leading-none text-forest-foreground/[0.04]"
      >
        Talbeena
      </span>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="font-serif text-3xl font-semibold text-forest-foreground">
              Al Kabeer
            </span>
            <p className="mt-1 text-xs font-medium tracking-[0.3em] text-gold">
              TALBEENA • FOOD PRODUCTS
            </p>
            <p className="mt-5 max-w-sm leading-relaxed text-forest-foreground/70">
              Goodness of wheat &amp; dry fruits, ready in 5 minutes. Trusted
              quality by Al Kabeer — nurturing health, every day.
            </p>
            <a
              href={whatsappLink(WHATSAPP_ORDERS, 'Hi! I would like to order Al Kabeer Talbeena.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Contact on WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold">
              EXPLORE
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-forest-foreground/75 transition-colors hover:text-forest-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold tracking-[0.25em] text-gold">
              REACH US
            </h3>
            <ul className="mt-5 space-y-3 text-forest-foreground/75">
              <li>WhatsApp: +91 8369100215</li>
              <li>Support: +91 9892440226</li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-forest-foreground/75">
              <a href="#" className="transition-colors hover:text-forest-foreground">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-forest-foreground">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-forest-foreground/10 pt-6 text-sm text-forest-foreground/60 sm:flex-row sm:items-center">
          <p>© 2026 Al Kabeer Food Products. All rights reserved.</p>
          <p>ISO • GMP • FSSAI Licensed • NABL Tested</p>
        </div>
      </div>
    </footer>
  )
}

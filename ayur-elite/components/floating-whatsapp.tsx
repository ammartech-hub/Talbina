import { MessageCircle } from 'lucide-react'
import { WHATSAPP_ORDERS, whatsappLink } from '@/lib/site-data'

export function FloatingWhatsapp() {
  return (
    <a
      href={whatsappLink(WHATSAPP_ORDERS, 'Hi! I would like to order Al Kabeer Talbeena.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </a>
  )
}

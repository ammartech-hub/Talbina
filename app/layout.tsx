import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: "Talbina | Healthy Wheat & Dry Fruits Breakfast | Al Kabeer",
  description:
    "Buy Talbina online. Healthy breakfast made with wheat and dry fruits. No added sugar. Ready in 5 minutes. Order Al Kabeer Talbina today.",
  keywords: [
    "Talbina",
    "Buy Talbina",
    "Talbina online",
    "Healthy breakfast",
    "Islamic food",
    "Wheat porridge",
    "Dry fruits",
    "Al Kabeer Talbina",
    "Healthy food India",
  ],
  verification: {
    google: "g8GaY2P-egWYz4-ey6ypvVEKit2XgXKHdu0XTKWU2AM",
  },
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1f3d24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${cormorant.variable} ${jost.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

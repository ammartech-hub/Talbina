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
  title:
    "Talbina | Healthy Wheat & Dry Fruits Breakfast | Al Kabeer | Nutritious Instant Breakfast Mix",

  description:
    "Buy Al Kabeer Talbina online. A healthy and nutritious breakfast made with premium barley and dry fruits. Rich in fiber, vitamins, and essential nutrients. No added sugar, easy to prepare in just 5 minutes. Perfect for kids, adults, seniors, and anyone looking for a wholesome breakfast. Order fresh Talbina online in India today.",

  keywords: [
    "Talbina",
    "Buy Talbina",
    "Talbina online",
    "Talbina India",
    "Al Kabeer Talbina",
    "Healthy breakfast",
    "Healthy breakfast mix",
    "Instant breakfast",
    "Nutritious breakfast",
    "High fiber breakfast",
    "Healthy food India",
    "Organic Talbina",
    "Wheat porridge",
    "Barley porridge",
    "Dry fruits breakfast",
    "No added sugar breakfast",
    "Natural breakfast",
    "Breakfast for kids",
    "Breakfast for adults",
    "Breakfast for seniors",
    "Healthy diet",
    "Balanced nutrition",
    "Islamic food",
    "Sunnah food",
    "Wholesome breakfast",
    "Energy breakfast",
    "Healthy lifestyle",
    "Online grocery India",
    "Premium Talbina",
    "Best Talbina brand",
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

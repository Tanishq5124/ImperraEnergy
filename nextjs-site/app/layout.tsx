import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://imperraenergy.co.in'),
  title: {
    default: 'Imperra Energy - Leading Solar EPC Company | 50+ MW Installed',
    template: '%s | Imperra Energy'
  },
  description: 'Fast-scaling solar EPC company in India. 50+ MW installed, targeting 500 MW in 3 years. Ground-mounted solar parks, industrial solar solutions. Contact: +91 93779 99900',
  keywords: [
    'solar EPC',
    'solar power company',
    'solar installation India',
    'industrial solar',
    'ground-mounted solar',
    'solar energy Gujarat',
    'Imperra Energy',
    'solar panels',
    'renewable energy',
    'commercial solar'
  ],
  authors: [{ name: 'Imperra Energy Pvt. Ltd.' }],
  creator: 'Imperra Energy Pvt. Ltd.',
  publisher: 'Imperra Energy Pvt. Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://imperraenergy.co.in',
    title: 'Imperra Energy - Leading Solar EPC Company | 50+ MW Installed',
    description: 'Fast-scaling solar EPC company with 50+ MW installed across India. Specializing in ground-mounted solar parks and industrial solar solutions.',
    siteName: 'Imperra Energy',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Imperra Energy - Solar EPC Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Imperra Energy - Solar EPC Company',
    description: '50+ MW installed | 500 MW target in 3 years | Industrial & Ground-mounted Solar Solutions',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

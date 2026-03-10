import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Expert Bathroom Remodelers – Chandler, AZ | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`
  },
  description: 'Expert Bathroom Remodelers – Chandler, AZ. Top-rated commercial bathroom remodel contractors near me in Chandler, AZ and 60625 IL. Get bathroom remodel financing near me, handicap bathroom remodel contractors near me, and free bathroom remodel for seniors near me.',
  keywords: ['expert bathroom remodelers chandler az', 'commercial bathroom remodel contractors near me', 'handicap bathroom remodel contractors near me', 'bathroom remodel financing near me', 'bathroom remodelers near me 60625 il', 'bathroom remodel jobs near me', 'bathroom remodel near me with financing', 'free bathroom remodel for seniors near me', 'bathroom remodel in a day near me', 'bathroom remodel with financing near me'],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `Expert Bathroom Remodelers – Chandler, AZ | ${siteConfig.name}`,
    description: 'Expert Bathroom Remodelers – Chandler, AZ. Top-rated commercial bathroom remodel contractors near me in Chandler, AZ. Bathroom remodel financing near me and handicap bathroom remodel contractors near me available.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Expert Bathroom Remodelers – Chandler, AZ | ${siteConfig.name}`,
    description: 'Expert bathroom remodeling services in Chandler, Arizona. Bathroom remodel financing near me available.',
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
}

export const viewport: Viewport = {
  themeColor: '#6BB3D9',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        {/* Preload critical fonts only */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
      <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
    </html>
  )
}

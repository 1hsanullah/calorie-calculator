import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
  description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
  keywords: 'calorie calculator, weight loss calculator, TDEE calculator, BMR calculator, macro calculator, diet planner',
  authors: [{ name: 'Ihsanullah' }],
  generator: 'Next.js',
  applicationName: 'Calorie Calculator',
  referrer: 'origin-when-cross-origin',
  creator: 'Ihsanullah',
  publisher: 'Ihsanullah',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.calorietest.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.calorietest.com',
    siteName: 'Calorie Calculator',
    title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
    description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals. Get personalized macronutrient recommendations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Calorie Calculator',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calorie Calculator | Calculate Your Daily Calorie Needs',
    description: 'Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification=YOUR_VERIFICATION_CODE', // Replace with your actual code when you have it
  },
  category: 'health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: 'light' }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* JSON-LD structured data for Google Search */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Calorie Calculator",
              "url": "https://www.calorietest.com",
              "description": "Free online calorie calculator to find your daily caloric needs and help reach weight loss or weight gain goals.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.calorietest.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "logo": "https://www.calorietest.com/favicon.svg"
            })
          }}
        />
        
        {/* Additional Organization structured data for Google Knowledge Graph */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.calorietest.com",
              "name": "Calorie Calculator",
              "logo": "https://www.calorietest.com/favicon.svg", 
              "image": "https://www.calorietest.com/favicon.svg",
              "sameAs": [
                "https://www.calorietest.com"
              ]
            })
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

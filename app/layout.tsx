import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calorie Calculator',
  description: 'Created By Ihsanullah',
  icons: {
    icon: [
      { url: '/Favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/favicon.png', sizes: '190x190', type: 'image/png' }
    ]
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

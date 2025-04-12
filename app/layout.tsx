import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Calorie Calculator',
  description: 'Created By Ihsanullah',
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

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'russia Government Whitepaper',
  description: 'russia Government',
  generator: 'russia Government',
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

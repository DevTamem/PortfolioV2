import type { Metadata } from 'next'
import { Inter, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tamem Al Tamsha - Software Engineering Student',
  description: 'Personal portfolio of a Software Engineering student passionate about building real-world applications.',
  keywords: ['portfolio', 'software engineer', 'developer', 'react', 'typescript', 'nodejs'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}

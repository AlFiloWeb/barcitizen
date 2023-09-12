import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const agencyGothicCTBold = localFont({
  src: '../public/fonts/412-font.otf',
  display: 'swap',
  variable: '--font-agencyGothicCT-bold',
})

export const metadata: Metadata = {
  title: 'Barcitizen Valencia',
  description: 'Web del evento barcitizen valencia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} ${agencyGothicCTBold.variable}`}>
        {children}
      </body>
    </html>
  )
}

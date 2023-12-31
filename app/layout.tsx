import './globals.css'
import { DM_Sans } from 'next/font/google'
import { Metadata } from "next"

const font = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Zanna Du',
  // description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${font.className}`}>{children}</body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { lora, jost } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'My App',
  description: 'My website description',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${jost.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
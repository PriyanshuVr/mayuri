import { Jost, Lora } from 'next/font/google'

export const jost = Jost({
  subsets: ['latin'],
  weight: ['400','500', '600', '700', '800'],
  variable: '--font-jost',
})

export const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})
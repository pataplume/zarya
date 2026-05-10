import { Lexend_Giga, Inter, JetBrains_Mono } from 'next/font/google'

export const lexendGiga = Lexend_Giga({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-lexend-giga',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  fallback: ['monospace'],
})

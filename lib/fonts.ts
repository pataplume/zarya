import { Plus_Jakarta_Sans, JetBrains_Mono, Syncopate } from 'next/font/google'

export const syncopate = Syncopate({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-syncopate',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plus-jakarta',
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

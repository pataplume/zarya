import type { Metadata } from 'next'
import { lexendGiga, inter, jetbrainsMono } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zarya — IA pour fiduciaires suisses',
  description:
    "L'intelligence artificielle qui s'installe dans votre cabinet sans bouleverser vos outils. Pour fiduciaires romandes équipées Microsoft 365 et Bexio, Topal ou Crésus.",
  metadataBase: new URL('https://zarya.condere.ch'),
  openGraph: {
    title: 'Zarya — IA pour fiduciaires suisses',
    description:
      'Tri des emails, classement des documents, pré-saisie comptable. Sans changer Bexio, Topal ou Crésus.',
    locale: 'fr_CH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zarya — IA pour fiduciaires suisses',
    description: "L'IA suisse pour les fiduciaires qui prennent leur métier au sérieux.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zarya',
  url: 'https://zarya.condere.ch',
  description:
    "SaaS modulaire d'IA pour fiduciaires suisses romandes. Tri d'emails, classement de documents, pré-saisie comptable.",
  areaServed: 'CH',
  knowsLanguage: ['fr', 'de', 'it', 'en'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@condere.ch',
    contactType: 'customer support',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${lexendGiga.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#contenu-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ink focus:text-paper focus:text-sm"
        >
          Aller au contenu principal
        </a>
        <main id="contenu-principal" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  )
}

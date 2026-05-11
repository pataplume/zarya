import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Zarya',
  robots: { index: true, follow: false },
}

export default function MentionsLegalesPage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-paper)',
        minHeight: '100vh',
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: '760px',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: 'clamp(5rem, 10vw, 9rem)',
          paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        }}
      >
        <Link
          href="/"
          className="font-body text-caption text-muted border-b border-stone-300 pb-px transition-colors duration-150 hover:text-ink hover:border-ink mb-12 inline-block"
        >
          ← Zarya
        </Link>

        <h1
          className="font-display font-[400] text-ink mb-12"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Mentions légales
        </h1>

        <div className="space-y-12 font-body text-body text-ink-2 leading-[1.6]">
          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Éditeur du site
            </h2>
            <p>Ce site est édité par Condere.</p>
            <p className="mt-2">1207 Genève, Suisse</p>
            <p className="mt-2">
              Contact :{' '}
              <a href="mailto:contact@condere.ch" className="border-b border-stone-300 pb-px hover:border-ink hover:text-ink transition-colors duration-150">
                contact@condere.ch
              </a>
            </p>
          </section>

          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Hébergeur
            </h2>
            <p>
              Les infrastructures applicatives sont hébergées sur des serveurs situés à Frankfurt,
              Allemagne (Union Européenne).
            </p>
          </section>

          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site — textes, graphiques, logos, images, icônes —
              est la propriété exclusive de Condere, sauf mention contraire. Toute reproduction,
              représentation, modification ou exploitation, partielle ou totale, est interdite sans
              autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Responsabilité
            </h2>
            <p>
              Les informations publiées sur ce site sont fournies à titre indicatif. Condere ne
              saurait être tenu responsable des erreurs ou omissions, ni des dommages directs ou
              indirects pouvant résulter de l&apos;utilisation de ces informations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

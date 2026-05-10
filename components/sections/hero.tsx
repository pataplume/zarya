import Image from 'next/image'
import { Eyebrow } from '@/components/typography/Eyebrow'

export function Hero() {
  return (
    <section
      id="hero"
      className="bg-paper"
      style={{ paddingTop: 'clamp(5rem, 10vw, 9rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: '1240px',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ─── Texte ─── */}
          <div className="lg:col-span-7">
            <Eyebrow>ZARYA — POUR LES FIDUCIAIRES SUISSES</Eyebrow>

            <h1
              className="font-display font-[400] text-ink mt-6 mb-6"
              style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
              }}
            >
              L&apos;intelligence artificielle pour les fiduciaires qui prennent leur métier au
              sérieux.
            </h1>

            <p
              className="font-body text-muted mb-10 max-w-[52ch]"
              style={{ fontSize: '1.25rem', lineHeight: 1.5 }}
            >
              Tri des emails, classement des documents, pré-saisie comptable. Sans changer Bexio,
              Topal ou Crésus. Sans envoyer vos données hors de Suisse.
            </p>

            <div className="flex items-center gap-6 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-ink text-paper border border-ink px-7 py-[0.875rem] font-display font-[500] text-[0.75rem] uppercase tracking-[0.08em] rounded-[4px] transition-colors duration-150 hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Demander un accès pilote
              </a>
              <a
                href="#modules"
                className="font-body text-ink-2 text-body border-b border-stone-300 pb-px transition-colors duration-150 hover:border-ink hover:text-ink"
              >
                Voir comment ça fonctionne
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-12 pt-8 border-t border-stone-200 flex items-center gap-4 flex-wrap">
              <span className="font-body text-caption text-muted">Hébergement Frankfurt</span>
              <span className="text-caption text-stone-300" aria-hidden="true">·</span>
              <span className="font-body text-caption text-muted">Conforme nLPD</span>
              <span className="text-caption text-stone-300" aria-hidden="true">·</span>
              <span className="font-body text-caption text-muted">Indépendant des éditeurs ERP</span>
            </div>
          </div>

          {/* ─── Image ─── */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <Image
              src="/zarya_header.png"
              alt="Interface Zarya montrant la classification automatique de documents dans un cabinet fiduciaire suisse"
              width={1774}
              height={887}
              className="w-full h-auto"
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

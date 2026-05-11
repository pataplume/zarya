import Image from 'next/image'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-end"
      style={{ minHeight: '100svh' }}
    >
      {/* Image plein écran */}
      <Image
        src="/zarya_header.png"
        alt="Interface Zarya montrant la classification automatique de documents dans un cabinet fiduciaire suisse"
        fill
        className="object-cover object-top"
        priority
        quality={90}
      />

      {/* Overlay gradient du bas */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(12,15,26,0.15) 0%, rgba(12,15,26,0.55) 50%, rgba(12,15,26,0.88) 100%)',
        }}
      />

      {/* Contenu en bas */}
      <div
        className="relative z-10"
        style={{
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingBottom: 'clamp(3rem, 7vw, 5rem)',
        }}
      >
        <div className="mx-auto w-full" style={{ maxWidth: '1240px' }}>
          <p
            className="font-display font-medium uppercase"
            style={{
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.55)',
              marginBottom: '1.5rem',
            }}
          >
            ZARYA
          </p>

          <h1
            className="font-display font-[400]"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              maxWidth: '20ch',
              marginBottom: '1.5rem',
            }}
          >
            L&apos;IA pour fiduciaires Suisses
          </h1>

          <p
            className="font-body"
            style={{
              fontSize: '1.25rem',
              lineHeight: 1.5,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '52ch',
              marginBottom: '2.5rem',
            }}
          >
            Communique avec Bexio, Crésus, Winbiz, Abacus, Odoo.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border px-7 font-display font-[500] uppercase rounded-[4px] transition-colors duration-150"
              style={{
                backgroundColor: '#FFFFFF',
                color: '#0C0F1A',
                borderColor: '#FFFFFF',
                paddingTop: '0.875rem',
                paddingBottom: '0.875rem',
                fontSize: '0.75rem',
                letterSpacing: '0.08em',
              }}
            >
              Demander un accès pilote
            </a>
            <a
              href="#modules"
              className="font-body transition-colors duration-150"
              style={{
                color: 'rgba(255,255,255,0.72)',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: '1px',
              }}
            >
              Voir comment ça fonctionne
            </a>
          </div>

          {/* Trust bar */}
          <div
            className="mt-12 pt-8 flex items-center gap-3 flex-wrap"
            style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
          >
            {[
              'Hébergé en Suisse et EU',
              'Conforme nLPD & RGPD',
              'IA Native',
            ].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-body" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)' }}>
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: 'rgba(255,255,255,0.2)' }} aria-hidden="true">—</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

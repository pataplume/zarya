export function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#F4F6FC',
        minHeight: '100svh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* ─── Top corners ─── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 5vw, 4rem)',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            color: '#050A30',
            opacity: 0.4,
          }}
        >
          ZARYA · CONDERE
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#050A30',
            opacity: 0.35,
          }}
        >
          STATUT · PILOTE OUVERT
        </span>
      </div>

      {/* ─── Main content ─── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: 'clamp(7rem, 14vw, 10rem)',
          paddingBottom: 'clamp(6rem, 12vw, 9rem)',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(4.5rem, 14vw, 13rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: '#050A30',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
          }}
        >
          ZARYA<span style={{ color: '#FF5B00' }}>.</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontSize: 'clamp(1rem, 1.75vw, 1.375rem)',
            lineHeight: 1.5,
            color: '#050A30',
            opacity: 0.65,
            maxWidth: '44ch',
            marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
          }}
        >
          L&apos;intelligence artificielle pour les fiduciaires suisses.
          <br />
          Compatible Bexio, Crésus, Winbiz, Abacus, Odoo.
        </p>

        <a
          href="#contact"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            backgroundColor: '#FF5B00',
            padding: '0.875rem 1.75rem',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          Demander un accès
        </a>
      </div>

      {/* ─── Bottom corners ─── */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 5vw, 4rem)',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#050A30',
            opacity: 0.35,
          }}
        >
          46°12′N · 6°09′E · GENÈVE
        </span>
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#050A30',
            opacity: 0.35,
            textAlign: 'right',
          }}
        >
          nLPD · RGPD · SUISSE &amp; EU
        </span>
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        backgroundColor: '#F2EFE9',
        minHeight: 'calc(100svh - 60px)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* ─── SVG watermark — orange Zarya logo ─── */}
      <svg
        className="hero-logo-reveal"
        viewBox="0 0 417 417"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'max(105vw, 105vh)',
          height: 'max(105vw, 105vh)',
          opacity: 0.10,
          pointerEvents: 'none',
          flexShrink: 0,
        }}
      >
        <rect x="62.5"   y="191.667" width="291.667" height="33.333"  fill="#FF5B00" />
        <rect x="62.5"   y="41.667"  width="33.333"  height="116.667" fill="#FF5B00" />
        <rect x="112.5"  y="41.667"  width="33.333"  height="116.667" fill="#FF5B00" />
        <rect x="62.5"   y="258.333" width="33.333"  height="116.667" fill="#FF5B00" />
        <rect x="112.5"  y="258.333" width="33.333"  height="116.667" fill="#FF5B00" />
        <rect x="270.833" y="41.667" width="33.333"  height="116.667" fill="#FF5B00" />
        <rect x="320.833" y="41.667" width="33.333"  height="116.667" fill="#FF5B00" />
        <rect x="270.833" y="258.333" width="33.333" height="116.667" fill="#FF5B00" />
        <rect x="320.833" y="258.333" width="33.333" height="116.667" fill="#FF5B00" />
        <path
          d="M241.667,162.5l0,91.667c0,2.3 -1.867,4.167 -4.167,4.167l-58.333,0c-2.3,0 -4.167,-1.867 -4.167,-4.167l0,-91.667c0,-2.3 1.867,-4.167 4.167,-4.167l58.333,0c2.3,0 4.167,1.867 4.167,4.167Z"
          fill="#FF5B00"
        />
      </svg>

      {/* ─── Top-left corner ─── */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(1.5rem, 3vw, 2rem)',
          left: 'clamp(1.5rem, 5vw, 4rem)',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '0.6rem',
            letterSpacing: '0.16em',
            color: '#0D2C22',
            opacity: 0.4,
          }}
        >
          ZARYA · V.01 — PILOTE
        </span>
      </div>

      {/* ─── Top-right corner ─── */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(1.5rem, 3vw, 2rem)',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          pointerEvents: 'none',
          textAlign: 'right',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#0D2C22',
            opacity: 0.35,
          }}
        >
          46°12′N · 6°09′E · GENÈVE
        </span>
      </div>

      {/* ─── Main content (bottom-anchored) ─── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1240px',
          margin: '0 auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: 'clamp(7rem, 14vw, 10rem)',
          paddingBottom: 'clamp(5rem, 10vw, 7rem)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#0D2C22',
            opacity: 0.5,
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
          }}
        >
          IA POUR FIDUCIAIRES SUISSES
        </p>

        {/* ZARYA. — Syncopate, entirely orange, revealed from bottom */}
        <h1
          className="hero-title-reveal"
          style={{
            fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(3rem, 13.5vw, 18rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            color: '#FF5B00',
            marginBottom: 'clamp(2rem, 4vw, 3.5rem)',
            textTransform: 'uppercase',
          }}
        >
          ZARYA<span style={{ color: '#1A2BD4' }}>.</span>
        </h1>

        {/* Subtitle + CTA row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontSize: 'clamp(0.9375rem, 1.4vw, 1.1875rem)',
              lineHeight: 1.55,
              color: '#0D2C22',
              opacity: 0.65,
              maxWidth: '40ch',
              margin: 0,
            }}
          >
            L&apos;intelligence artificielle pour les fiduciaires suisses.
            <br />
            Compatible Bexio, Winbiz, Odoo et bien d&apos;autres.
          </p>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#F2EFE9',
              backgroundColor: '#FF5B00',
              padding: '0.875rem 1.75rem',
              borderRadius: '4px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            Demander un accès
          </a>
        </div>
      </div>

      {/* ─── Bottom-left corner — blinking dot + status ─── */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 3vw, 2rem)',
          left: 'clamp(1.5rem, 5vw, 4rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          pointerEvents: 'none',
        }}
      >
        <div className="hero-blink-dot" />
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#0D2C22',
            opacity: 0.45,
          }}
        >
          STATUT : ACTIF · PILOTE OUVERT
        </span>
      </div>

      {/* ─── Bottom-right corner ─── */}
      <div
        style={{
          position: 'absolute',
          bottom: 'clamp(1.5rem, 3vw, 2rem)',
          right: 'clamp(1.5rem, 5vw, 4rem)',
          pointerEvents: 'none',
          textAlign: 'right',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: '#0D2C22',
            opacity: 0.35,
          }}
        >
          nLPD · RGPD · SUISSE &amp; EU
        </span>
      </div>
    </section>
  )
}

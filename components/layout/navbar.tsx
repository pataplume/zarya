export function Navbar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#F2EFE9',
        borderBottom: '1px solid rgba(13, 44, 34, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingLeft: 'clamp(1.25rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.25rem, 5vw, 4rem)',
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        {/* ─── Logo ─── */}
        <a
          href="/"
          aria-label="Zarya — accueil"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 417 417"
            fill="#FF5B00"
            aria-hidden="true"
            style={{ flexShrink: 0 }}
          >
            <rect x="62.5"    y="191.667" width="291.667" height="33.333" />
            <rect x="62.5"    y="41.667"  width="33.333"  height="116.667" />
            <rect x="112.5"   y="41.667"  width="33.333"  height="116.667" />
            <rect x="62.5"    y="258.333" width="33.333"  height="116.667" />
            <rect x="112.5"   y="258.333" width="33.333"  height="116.667" />
            <rect x="270.833" y="41.667"  width="33.333"  height="116.667" />
            <rect x="320.833" y="41.667"  width="33.333"  height="116.667" />
            <rect x="270.833" y="258.333" width="33.333"  height="116.667" />
            <rect x="320.833" y="258.333" width="33.333"  height="116.667" />
            <path d="M241.667,162.5l0,91.667c0,2.3 -1.867,4.167 -4.167,4.167l-58.333,0c-2.3,0 -4.167,-1.867 -4.167,-4.167l0,-91.667c0,-2.3 1.867,-4.167 4.167,-4.167l58.333,0c2.3,0 4.167,1.867 4.167,4.167Z" />
          </svg>
          <span
            style={{
              fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '0.6875rem',
              letterSpacing: '0.16em',
              color: '#0D2C22',
              textTransform: 'uppercase',
            }}
          >
            ZARYA
          </span>
        </a>

        {/* ─── Nav liens — cachés sur mobile ─── */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.25rem, 2.5vw, 2.25rem)',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            {[
              { href: '#modules',  label: 'Modules' },
              { href: '#securite', label: 'Sécurité' },
              { href: '#faq',      label: 'FAQ' },
              { href: '#contact',  label: 'Contact' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="nav-link"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ─── CTA ─── */}
        <a
          href="#contact"
          className="nav-cta"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '0.6875rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FFFFFF',
            backgroundColor: '#1A2BD4',
            border: '1px solid #1A2BD4',
            padding: '0.5rem 1rem',
            textDecoration: 'none',
            borderRadius: '2px',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          {/* Texte court sur mobile, long sur desktop */}
          <span className="md:hidden">Accès pilote →</span>
          <span className="hidden md:inline">DEMANDER UN ACCÈS →</span>
        </a>
      </div>
    </header>
  )
}

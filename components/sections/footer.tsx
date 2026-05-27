import { Fragment } from 'react'

const sectionLabel = {
  fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
  fontWeight: 700,
  fontSize: '0.625rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase' as const,
  color: '#FF5B00',
  marginBottom: '1.5rem',
  display: 'block',
}

const linkBase = {
  fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
  fontSize: '0.9375rem',
  textDecoration: 'none',
  display: 'block',
  lineHeight: 1,
}

const dtStyle = {
  color: 'rgba(255,255,255,0.36)',
  letterSpacing: '0.08em',
  whiteSpace: 'nowrap' as const,
}

const ddStyle = {
  color: 'rgba(255,255,255,0.70)',
  letterSpacing: '0.04em',
  margin: 0,
}

const metaRows: [string, string][] = [
  ['COORDONNÉES', '46.20740° N, 6.15591° E'],
  ['SITE',        'GENÈVE / SUISSE'],
  ['JURIDICTION', 'CH · EU'],
  ['PROTOCOLE',   'V.01 — PILOTE'],
  ['DERNIÈRE MAJ','27.05.2026'],
]

const navLinks = [
  { href: '#modules',  label: 'Modules' },
  { href: '#securite', label: 'Sécurité' },
  { href: '#faq',      label: 'FAQ' },
  { href: '#contact',  label: 'Contact' },
]

const externalLinks = [
  { href: 'https://condere.ch/', label: 'Condere ↗' },
  { href: 'https://www.linkedin.com/company/condere-ch', label: 'LinkedIn ↗' },
]

export function Footer() {
  return (
    <footer
      className="dark-section"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div
        style={{
          maxWidth: '1240px',
          margin: '0 auto',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: 'clamp(3.5rem, 7vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)',
        }}
      >
        {/* ─── 3-column grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 lg:gap-20 mb-16">

          {/* ── 01. ÉTYMOLOGIE ── */}
          <div>
            <span style={sectionLabel}>01. ÉTYMOLOGIE</span>
            <p
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: '1.0625rem',
                color: '#FFFFFF',
                marginBottom: '0.875rem',
                lineHeight: 1.35,
              }}
            >
              Zarya, de « Заря » — l&apos;aube
            </p>
            <p
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                color: 'rgba(255,255,255,0.65)',
                marginBottom: '1.5rem',
                maxWidth: '36ch',
              }}
            >
              Nom du premier module de la Station Spatiale Internationale (ISS),
              Zarya symbolise le point de départ, la connexion entre systèmes et
              l&apos;infrastructure sur laquelle tout le reste se construit.
            </p>
            <p
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontStyle: 'italic',
                fontSize: '0.8125rem',
                lineHeight: 1.55,
                color: 'rgba(255,255,255,0.38)',
              }}
            >
              — « lumière de l&apos;aube », « commencement »
            </p>
          </div>

          {/* ── 02. SYSTÈME ── */}
          <div>
            <span style={sectionLabel}>02. SYSTÈME</span>
            <dl
              style={{
                fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                fontSize: '0.6875rem',
                lineHeight: 1,
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                rowGap: '0.875rem',
                columnGap: '1.25rem',
              }}
            >
              {metaRows.map(([k, v]) => (
                <Fragment key={k}>
                  <dt style={dtStyle}>{k}</dt>
                  <dd style={ddStyle}>{v}</dd>
                </Fragment>
              ))}
              <Fragment key="statut">
                <dt style={dtStyle}>STATUT</dt>
                <dd
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#FF5B00',
                    letterSpacing: '0.06em',
                    margin: 0,
                  }}
                >
                  <span className="hero-blink-dot" />
                  ACTIF
                </dd>
              </Fragment>
            </dl>
          </div>

          {/* ── 03. NAVIGATION ── */}
          <div>
            <span style={sectionLabel}>03. NAVIGATION</span>
            <nav aria-label="Navigation Zarya">
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                }}
              >
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="footer-link" style={linkBase}>
                      {item.label}
                    </a>
                  </li>
                ))}
                {/* Séparateur */}
                <li
                  aria-hidden="true"
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.09)',
                    marginTop: '0.25rem',
                    paddingTop: '0.25rem',
                  }}
                />
                {externalLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link"
                      style={linkBase}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* ─── Sous-footer ─── */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            paddingTop: '1.75rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.75rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              fontSize: '0.625rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.28)',
            }}
          >
            © 2026 ZARYA BY CONDERE — TOUS DROITS RÉSERVÉS
          </p>
          <p
            style={{
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              fontSize: '0.625rem',
              letterSpacing: '0.08em',
              color: 'rgba(255,255,255,0.28)',
            }}
          >
            nLPD · RGPD · FRANÇAIS (SUISSE)
          </p>
        </div>
      </div>
    </footer>
  )
}

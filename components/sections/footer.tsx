import Link from 'next/link'

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: 'var(--color-paper-2)',
        borderTop: '1px solid var(--color-stone-200)',
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: '1240px',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: '4rem',
          paddingBottom: '4rem',
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Colonne 1 — Identité */}
          <div>
            <p
              className="font-display font-[500] text-ink"
              style={{ fontSize: '1.25rem', letterSpacing: '-0.01em' }}
            >
              Zarya
            </p>
            <p className="font-body text-body text-ink-2 mt-3 mb-2">
              Construit en Suisse romande.
            </p>
            <p className="font-code text-caption text-muted" style={{ fontFeatureSettings: '"tnum"' }}>
              v0.1 — pilote
            </p>
          </div>

          {/* Colonne 2 — Pages */}
          <div>
            <p className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] mb-4">
              Pages
            </p>
            <nav aria-label="Pages légales">
              <ul className="space-y-2">
                {[
                  { href: '/mentions-legales', label: 'Mentions légales' },
                  { href: '/confidentialite', label: 'Politique de confidentialité' },
                  { href: '/confidentialite#sous-traitants', label: 'Sous-traitants' },
                  { href: 'mailto:contact@condere.ch', label: 'Contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-body text-ink-2 border-b border-transparent transition-colors duration-150 hover:text-ink hover:border-stone-300 pb-px"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <p className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] mb-4">
              Contact
            </p>
            <a
              href="mailto:contact@condere.ch"
              className="font-body text-body text-ink-2 border-b border-stone-300 pb-px transition-colors duration-150 hover:text-ink hover:border-ink"
            >
              contact@condere.ch
            </a>
            <p className="font-body text-caption text-muted mt-4">
              LinkedIn — à venir
            </p>
          </div>
        </div>

        {/* Sous-footer */}
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8"
          style={{ borderTop: '1px solid var(--color-stone-200)' }}
        >
          <p className="font-body text-caption text-muted">
            &copy; 2026 Zarya. Tous droits réservés.
          </p>
          <p className="font-body text-caption text-muted">
            Français (Suisse)
          </p>
        </div>
      </div>
    </footer>
  )
}

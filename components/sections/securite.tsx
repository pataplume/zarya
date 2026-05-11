import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const guarantees = [
  {
    label: 'HÉBERGEMENT',
    items: [
      'Données stockées à Frankfurt (UE).',
      'Sauvegardes chiffrées, région séparée.',
    ],
  },
  {
    label: 'INFÉRENCE IA',
    items: [
      'Modèles IA exécutés sur serveurs sécurisés en Allemagne.',
      'Aucun stockage post-traitement (Zero Data Retention).',
    ],
  },
  {
    label: 'CONFORMITÉ',
    items: [
      'Conforme nLPD suisse et RGPD européen.',
      'Registre des sous-traitants public, DPA disponible.',
    ],
  },
  {
    label: 'ACCÈS',
    items: [
      'Authentification multi-facteurs.',
      'Audit complet de chaque action.',
      'Suppression intégrale à la résiliation.',
    ],
  },
]

export function Securite() {
  return (
    <section
      id="securite"
      style={{
        backgroundColor: 'var(--color-paper)',
        paddingTop: 'clamp(5rem, 10vw, 9rem)',
        paddingBottom: 'clamp(5rem, 10vw, 9rem)',
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: '1240px',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
        }}
      >
        <RevealSection>
          <Eyebrow className="mb-8">─── 03 / SÉCURITÉ</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* ─── Texte intro ─── */}
            <div className="lg:col-span-5">
              <h2
                className="font-display font-[400] text-ink mb-6"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                Vos données restent en Europe.
              </h2>
              <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[52ch]">
                Nous traitons des données fiduciaires. C&apos;est-à-dire : des données financières,
                juridiques, parfois sensibles, presque toujours confidentielles. Nous prenons cela
                au sérieux.
              </p>
            </div>

            {/* ─── Garanties ─── */}
            <div className="lg:col-span-7">
              <dl className="space-y-6">
                {guarantees.map((g) => (
                  <div
                    key={g.label}
                    className="grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-2 sm:gap-8 pt-6 border-t border-stone-200 first:border-t-0 first:pt-0"
                  >
                    <dt className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] pt-px min-w-[9rem]">
                      {g.label}
                    </dt>
                    <dd>
                      {g.items.map((item) => (
                        <p key={item} className="font-body text-body text-ink-2 leading-[1.6]">
                          {item}
                        </p>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

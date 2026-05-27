import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const modules = [
  {
    roman: 'I.',
    num: '01',
    name: 'Zarya Doc',
    tagline: 'Gestion documentaire automatisée',
    description:
      "Centralisez et traitez automatiquement tous vos documents entrants. Grâce à l'OCR, au classement intelligent et au rattachement automatique, chaque pièce est correctement organisée dès sa réception.",
  },
  {
    roman: 'II.',
    num: '02',
    name: 'Zarya CRM',
    tagline: 'Vue à 360° sur chaque client',
    description:
      "Votre centre de vérité pour chaque client. Accédez à une vue complète : informations clés, services, documents attendus, statuts et niveau de risque. Tout est structuré pour piloter vos dossiers avec clarté.",
  },
  {
    roman: 'III.',
    num: '03',
    name: 'Zarya Calendar',
    tagline: 'Échéances et relances automatiques',
    description:
      "Ne manquez plus aucune échéance. Le module génère automatiquement vos rappels, emails et relances, tout en assurant un suivi clair des actions à mener. Vous gardez le contrôle sur vos délais.",
  },
  {
    roman: 'IV.',
    num: '04',
    name: 'Zarya Facture',
    tagline: 'Traitement des factures de bout en bout',
    description:
      "Automatisez le traitement de vos factures de bout en bout. Extraction des données, validation et export vers vos outils de paiement ou de comptabilité : tout est conçu pour accélérer et sécuriser vos flux.",
  },
  {
    roman: 'V.',
    num: '05',
    name: 'Zarya Salaire',
    tagline: 'Gestion des salaires simplifiée',
    description:
      "Simplifiez la gestion des salaires avec un cycle de validation clair et structuré. Centralisez les informations, validez chaque étape et exportez facilement vers vos logiciels de paie.",
  },
  {
    roman: 'VI.',
    num: '06',
    name: 'Zarya Timesheet',
    tagline: 'Suivi du temps par mission',
    description:
      "Suivez précisément le temps passé par client et par mission. Visualisez votre charge de travail, optimisez votre rentabilité et assurez un suivi transparent de vos prestations.",
  },
  {
    roman: 'VII.',
    num: '07',
    name: 'Zarya Search',
    tagline: 'Recherche intelligente en langage naturel',
    description:
      "Accédez instantanément à l'information dont vous avez besoin. Interrogez vos documents et votre CRM en langage naturel, avec des réponses fiables et toujours sourcées.",
  },
]

export function Modules() {
  return (
    <section
      id="modules"
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
          <Eyebrow className="mb-8">─── 02 / MODULES</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 mb-12">
            <h2
              className="font-display font-bold text-ink"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
              }}
            >
              Les outils dont vous avez besoin, réunis en modules simples et parfaitement intégrés.
            </h2>
            <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[52ch] lg:pt-2 lg:pl-8">
              Chaque module fonctionne indépendamment. Vous gardez vos outils existants. Zarya
              travaille en arrière-plan.
            </p>
          </div>
        </RevealSection>

        {/* ─── 7 modules en grille ─── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: 'var(--color-stone-200)' }}
        >
          {modules.slice(0, 6).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 60}>
              <article
                className="module-card h-full"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  border: '1px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Status + numéro */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {mod.roman}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      paddingTop: '0.25rem',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                        flexShrink: 0,
                        display: 'inline-block',
                      }}
                    />
                    PILOTE
                  </span>
                </div>

                {/* Nom + tagline */}
                <h3
                  className="font-display font-bold text-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.25, marginBottom: '0.375rem' }}
                >
                  {mod.name}
                </h3>
                <p
                  className="font-body text-muted"
                  style={{ fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.875rem' }}
                >
                  {mod.tagline}
                </p>

                {/* Description */}
                <p
                  className="font-body text-ink-2"
                  style={{ fontSize: '0.875rem', lineHeight: 1.65, flex: 1 }}
                >
                  {mod.description}
                </p>

                {/* Flèche */}
                <p
                  className="text-muted"
                  style={{ fontSize: '1rem', marginTop: '1.25rem' }}
                >
                  →
                </p>
              </article>
            </RevealSection>
          ))}
        </div>

        {/* Module VII — centré */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-px"
          style={{ backgroundColor: 'var(--color-stone-200)' }}
        >
          <div style={{ backgroundColor: 'var(--color-paper)' }} aria-hidden="true" />
          {modules.slice(6).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 60}>
              <article
                className="module-card h-full"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  border: '1px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: 'clamp(2rem, 4vw, 3rem)',
                      lineHeight: 1,
                      letterSpacing: '-0.02em',
                      color: 'var(--color-accent)',
                    }}
                  >
                    {mod.roman}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                      fontSize: '0.5625rem',
                      letterSpacing: '0.12em',
                      color: 'var(--color-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      paddingTop: '0.25rem',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-accent)',
                        flexShrink: 0,
                        display: 'inline-block',
                      }}
                    />
                    PILOTE
                  </span>
                </div>
                <h3
                  className="font-display font-bold text-ink"
                  style={{ fontSize: '1.125rem', lineHeight: 1.25, marginBottom: '0.375rem' }}
                >
                  {mod.name}
                </h3>
                <p
                  className="font-body text-muted"
                  style={{ fontSize: '0.8125rem', fontWeight: 500, marginBottom: '0.875rem' }}
                >
                  {mod.tagline}
                </p>
                <p
                  className="font-body text-ink-2"
                  style={{ fontSize: '0.875rem', lineHeight: 1.65, flex: 1 }}
                >
                  {mod.description}
                </p>
                <p className="text-muted" style={{ fontSize: '1rem', marginTop: '1.25rem' }}>→</p>
              </article>
            </RevealSection>
          ))}
          <div style={{ backgroundColor: 'var(--color-paper)' }} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

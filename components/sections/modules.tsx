import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

type Module = {
  roman: string
  num: string
  name: string
  tagline: string
  description: string
  /** Module pas encore disponible dans le produit — badge « À venir » */
  upcoming?: boolean
}

const modules: Module[] = [
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
    upcoming: true,
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

function ModuleCard({ mod }: { mod: typeof modules[number] }) {
  return (
    <article
      className="module-card h-full"
      style={{
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '320px',
      }}
    >
      {/* Numéro romain + badge statut */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '1.125rem',
        }}
      >
        <span
          className="module-numeral"
          style={{
            fontFamily: 'var(--font-syncopate), system-ui, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            lineHeight: 1,
            letterSpacing: '-0.02em',
          }}
        >
          {mod.roman}
        </span>

        {mod.upcoming ? (
          <span
            className="module-badge-soon"
            style={{
              fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
              fontSize: '0.5625rem',
              letterSpacing: '0.12em',
              padding: '0.3rem 0.65rem',
              borderRadius: '999px',
              whiteSpace: 'nowrap',
              marginTop: '0.15rem',
            }}
          >
            À VENIR
          </span>
        ) : (
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              paddingTop: '0.3rem',
            }}
          >
            <span
              className="module-status-dot"
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
            <span
              className="module-status-text"
              style={{
                fontFamily: 'var(--font-jetbrains-mono), ui-monospace, monospace',
                fontSize: '0.5625rem',
                letterSpacing: '0.12em',
              }}
            >
              PILOTE
            </span>
          </span>
        )}
      </div>

      {/* Nom du module */}
      <h3
        className="module-title"
        style={{
          fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
          fontWeight: 700,
          fontSize: '1.125rem',
          lineHeight: 1.25,
          marginBottom: '0.375rem',
        }}
      >
        {mod.name}
      </h3>

      {/* Tagline */}
      <p
        className="module-tagline"
        style={{
          fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
          fontSize: '0.8125rem',
          fontWeight: 500,
          marginBottom: '0.875rem',
        }}
      >
        {mod.tagline}
      </p>

      {/* Description */}
      <p
        className="module-desc"
        style={{
          fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
          fontSize: '0.875rem',
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {mod.description}
      </p>

      {/* Flèche */}
      <p className="module-arrow" style={{ fontSize: '1rem', marginTop: '1.25rem' }}>
        →
      </p>
    </article>
  )
}

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
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', lineHeight: 1.15, letterSpacing: '-0.01em' }}
            >
              Les outils dont vous avez besoin, réunis en modules simples et parfaitement intégrés.
            </h2>
            <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[52ch] lg:pt-2 lg:pl-8">
              Chaque module fonctionne indépendamment. Vous gardez vos outils existants. Zarya
              travaille en arrière-plan.
            </p>
          </div>
        </RevealSection>

        {/* ─── Grille 3 colonnes — séparateur beige entre cartes vertes ─── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: '#F2EFE9' }}
        >
          {modules.slice(0, 6).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 50}>
              <ModuleCard mod={mod} />
            </RevealSection>
          ))}
        </div>

        {/* ─── Module VII — centré ─── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-px"
          style={{ backgroundColor: '#F2EFE9' }}
        >
          <div style={{ backgroundColor: '#F2EFE9', minHeight: '8px' }} aria-hidden="true" />
          {modules.slice(6).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 50}>
              <ModuleCard mod={mod} />
            </RevealSection>
          ))}
          <div style={{ backgroundColor: '#F2EFE9', minHeight: '8px' }} aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

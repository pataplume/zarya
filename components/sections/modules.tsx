import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const modules = [
  {
    num: '01',
    name: 'Zarya Doc',
    tagline: 'Gestion documentaire automatisée',
    description:
      "Centralisez et traitez automatiquement tous vos documents entrants. Grâce à l'OCR, au classement intelligent et au rattachement automatique, chaque pièce est correctement organisée dès sa réception. Vous gagnez en fiabilité, en traçabilité et en temps dès le premier contact.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Zarya CRM',
    tagline: 'Vue à 360° sur chaque client',
    description:
      "Votre centre de vérité pour chaque client. Accédez à une vue complète : informations clés, services, documents attendus, statuts et niveau de risque. Tout est structuré pour piloter vos dossiers avec clarté et précision.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Zarya Calendar',
    tagline: 'Échéances et relances automatiques',
    description:
      "Ne manquez plus aucune échéance. Le module génère automatiquement vos rappels, emails et relances, tout en assurant un suivi clair des actions à mener. Vous gardez le contrôle sur vos délais, sans effort.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Zarya Facture',
    tagline: 'Traitement des factures de bout en bout',
    description:
      "Automatisez le traitement de vos factures de bout en bout. Extraction des données, validation et export vers vos outils de paiement ou de comptabilité : tout est conçu pour accélérer et sécuriser vos flux financiers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Zarya Salaire',
    tagline: 'Gestion des salaires simplifiée',
    description:
      "Simplifiez la gestion des salaires avec un cycle de validation clair et structuré. Centralisez les informations, validez chaque étape et exportez facilement vers vos logiciels de paie, en toute conformité.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    num: '06',
    name: 'Zarya Timesheet',
    tagline: 'Suivi du temps par mission',
    description:
      "Suivez précisément le temps passé par client et par mission. Visualisez votre charge de travail, optimisez votre rentabilité et assurez un suivi transparent de vos prestations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    num: '07',
    name: 'Zarya Search',
    tagline: 'Recherche intelligente en langage naturel',
    description:
      "Accédez instantanément à l'information dont vous avez besoin. Grâce à une recherche intelligente, interrogez vos documents et votre CRM en langage naturel, avec des réponses fiables et toujours sourcées.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
]

export function Modules() {
  return (
    <section
      id="modules"
      className="dark-section"
      style={{
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {modules.slice(0, 6).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 60}>
              <article className="module-card bg-paper p-8 h-full">
                <div className="text-muted mb-4">{mod.icon}</div>
                <p className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] mb-3">
                  MODULE {mod.num}
                </p>
                <h3
                  className="font-display font-bold text-ink mb-3"
                  style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
                >
                  {mod.name}
                </h3>
                <p className="font-body text-caption text-muted mb-3 font-[500]">{mod.tagline}</p>
                <p className="font-body text-caption text-ink-2 leading-[1.6]">{mod.description}</p>
              </article>
            </RevealSection>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 mt-px">
          <div className="hidden lg:block bg-paper-2" aria-hidden="true" />
          {modules.slice(6).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 60}>
              <article className="module-card bg-paper p-8 h-full">
                <div className="text-muted mb-4">{mod.icon}</div>
                <p className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] mb-3">
                  MODULE {mod.num}
                </p>
                <h3
                  className="font-display font-bold text-ink mb-3"
                  style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
                >
                  {mod.name}
                </h3>
                <p className="font-body text-caption text-muted mb-3 font-[500]">{mod.tagline}</p>
                <p className="font-body text-caption text-ink-2 leading-[1.6]">{mod.description}</p>
              </article>
            </RevealSection>
          ))}
          <div className="hidden lg:block bg-paper-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

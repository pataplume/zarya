import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const modules = [
  {
    num: '01',
    name: 'Zarya Boîte',
    tagline: "Tri intelligent et brouillons d'emails",
    description:
      "Vos messages entrants sont classés par priorité, par mandat, par nature. Les réponses récurrentes sont préparées en brouillon dans votre Outlook. Vous validez, vous envoyez.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Zarya Classeur',
    tagline: 'Classement automatique des documents',
    description:
      "Chaque scan d'imprimante, chaque pièce jointe est extraite, classée et rangée dans le bon dossier SharePoint. Plus de «Scan-2026-04-12».",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Zarya Saisie',
    tagline: 'Pré-saisie comptable',
    description:
      "Les factures fournisseurs sont lues, ventilées sur le bon compte, avec la TVA appropriée. Vous validez d'un clic. Tout part dans Bexio, Topal ou Crésus.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </svg>
    ),
  },
  {
    num: '04',
    name: 'Zarya Mandat',
    tagline: 'Mémoire vive de vos dossiers',
    description:
      "Posez une question en langue naturelle sur n'importe quel mandat. Zarya cherche dans les documents, retrouve les réponses, cite ses sources.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    num: '05',
    name: 'Zarya Réunion',
    tagline: 'Briefs et résumés intelligents',
    description:
      "Avant chaque rendez-vous client, un brief d'une page. Après, un résumé structuré et les actions à mener. Tout dans votre Outlook.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
]

const upcoming = [
  {
    name: 'Zarya Banque',
    tagline: 'Rapprochement bancaire augmenté',
    description:
      'Réconciliation automatique des relevés bancaires avec vos écritures. Détection des anomalies, suggestions de correspondances, gain de temps en fin de mois.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
  },
  {
    name: 'Zarya Veille',
    tagline: 'Veille fiscale et réglementaire',
    description:
      'Suivi automatique des publications ESTV, OFAS et Swissdec. Alertes ciblées par mandat, résumés lisibles sans jargon administratif.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    name: 'Zarya Bouclement',
    tagline: 'Bouclement annuel guidé',
    description:
      'Checklist dynamique de clôture adaptée à chaque mandat. Détection des provisions manquantes, des comptes suspects, des documents à relancer.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    name: 'Zarya Dialogue',
    tagline: 'Chatbot client externe',
    description:
      "Interface de self-service pour vos clients : FAQ, demandes de documents, suivi de dossier. Vos collaborateurs reçoivent moins d'interruptions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
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
              className="font-display font-[400] text-ink"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
              }}
            >
              Vous activez ce dont vous avez besoin.
            </h2>
            <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[52ch] lg:pt-2 lg:pl-8">
              Chaque module fonctionne indépendamment. Vous gardez vos outils existants. Zarya
              travaille en arrière-plan.
            </p>
          </div>
        </RevealSection>

        {/* ─── Modules actifs ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200">
          {modules.slice(0, 3).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 60}>
              <article
                className="module-card bg-paper p-8 h-full"
              >
                <div className="text-muted mb-4">{mod.icon}</div>
                <p className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] mb-3">
                  MODULE {mod.num}
                </p>
                <h3
                  className="font-display font-[400] text-ink mb-3"
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
          {modules.slice(3).map((mod, i) => (
            <RevealSection key={mod.num} delay={i * 60}>
              <article
                className="module-card bg-paper p-8 h-full"
              >
                <div className="text-muted mb-4">{mod.icon}</div>
                <p className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.14em] mb-3">
                  MODULE {mod.num}
                </p>
                <h3
                  className="font-display font-[400] text-ink mb-3"
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

        {/* ─── Modules à venir ─── */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}>
          <p
            className="font-display font-[500] uppercase tracking-[0.14em] mb-8"
            style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}
          >
            À VENIR
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200" style={{ opacity: 0.55 }}>
            {upcoming.map((mod, i) => (
              <RevealSection key={mod.name} delay={i * 60}>
                <article className="bg-paper p-8 h-full">
                  <div className="text-muted mb-4">{mod.icon}</div>
                  <h3
                    className="font-display font-[400] text-ink mb-2"
                    style={{ fontSize: '1rem', lineHeight: 1.3 }}
                  >
                    {mod.name}
                  </h3>
                  <p className="font-body text-caption text-muted mb-3 font-[500]">{mod.tagline}</p>
                  <p className="font-body text-caption text-ink-2 leading-[1.6]">{mod.description}</p>
                </article>
              </RevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

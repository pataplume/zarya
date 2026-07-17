import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales — Zarya',
  robots: { index: true, follow: false },
}

const sousTraitants = [
  {
    nom: 'Supabase',
    fonction: 'Base de données & stockage de documents',
    localisation: 'Zurich, Suisse',
  },
  {
    nom: 'Vercel',
    fonction: 'Hébergement applicatif',
    localisation: 'Frankfurt, UE',
  },
  {
    nom: 'Infomaniak AI Services',
    fonction: 'Traitement IA',
    localisation: 'Suisse',
  },
  {
    nom: 'Microsoft',
    fonction: 'Messagerie du cabinet (Microsoft 365)',
    localisation: 'Selon le tenant du cabinet',
  },
  {
    nom: 'Zefix / SECO',
    fonction: 'Consultation du registre du commerce',
    localisation: 'Suisse',
  },
  {
    nom: 'Sentry — Functional Software, Inc.',
    fonction: "Suivi d'erreurs applicatives (données techniques uniquement)",
    localisation: 'Région UE (de.sentry.io)',
  },
]

export default function MentionsLegalesPage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-paper)',
        minHeight: '100vh',
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: '760px',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: 'clamp(5rem, 10vw, 9rem)',
          paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        }}
      >
        <Link
          href="/"
          className="font-body text-caption text-muted border-b border-stone-300 pb-px transition-colors duration-150 hover:text-ink hover:border-ink mb-12 inline-block"
        >
          ← Zarya
        </Link>

        <h1
          className="font-display font-[400] text-ink mb-12"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Mentions légales
        </h1>

        <div className="space-y-12 font-body text-body text-ink-2 leading-[1.6]">
          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Éditeur du site
            </h2>
            <p>
              Ce site et le service Zarya sont édités par Condere
              {/* TODO founder : remplacer par la raison sociale exacte et le siège social */}
              {' '}[À COMPLÉTER : raison sociale et siège].
            </p>
            <p className="mt-2">1207 Genève, Suisse</p>
            <p className="mt-2">
              Contact :{' '}
              <a href="mailto:contact@condere.ch" className="border-b border-stone-300 pb-px hover:border-ink hover:text-ink transition-colors duration-150">
                contact@condere.ch
              </a>
            </p>
          </section>

          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Hébergement
            </h2>
            <p>
              Les données du service sont hébergées en Suisse : base de données et stockage de
              documents chez Supabase, région de Zurich (Suisse), chiffrés au repos. La couche
              applicative est servie par Vercel depuis Frankfurt (Allemagne, Union européenne).
              Le traitement IA est opéré par Infomaniak AI Services, en Suisse.
            </p>
          </section>

          <section id="sous-traitants">
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Registre des sous-traitants
            </h2>
            <p className="mb-6">
              Les sous-traitants suivants interviennent dans la fourniture du service Zarya. Chacun
              est soumis à des garanties contractuelles (DPA) conformes au RGPD et à la nLPD suisse.
              Le DPA de Zarya est disponible sur demande à{' '}
              <a
                href="mailto:contact@condere.ch"
                className="border-b border-stone-300 pb-px hover:border-ink hover:text-ink transition-colors duration-150"
              >
                contact@condere.ch
              </a>
              .
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-stone-200)' }}>
                    {['Sous-traitant', 'Fonction', 'Localisation'].map((h) => (
                      <th
                        key={h}
                        className="font-display font-[500] text-muted text-[0.7rem] uppercase tracking-[0.12em] pb-3 pr-6"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sousTraitants.map((s) => (
                    <tr key={s.nom} style={{ borderBottom: '1px solid var(--color-stone-100)' }}>
                      <td className="py-3 pr-6 text-ink align-top">{s.nom}</td>
                      <td className="py-3 pr-6 text-ink-2 align-top">{s.fonction}</td>
                      <td className="py-3 font-code text-caption text-ink-2 align-top">
                        {s.localisation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              La supervision des tâches planifiées (healthchecks.io) et les notifications
              d&apos;exploitation (ntfy) ne traitent aucune donnée personnelle — uniquement des
              signaux techniques anonymes.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu de ce site — textes, graphiques, logos, images, icônes —
              est la propriété exclusive de Condere, sauf mention contraire. Toute reproduction,
              représentation, modification ou exploitation, partielle ou totale, est interdite sans
              autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2
              className="font-display font-[400] text-ink mb-4"
              style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
            >
              Responsabilité
            </h2>
            <p>
              Les informations publiées sur ce site sont fournies à titre indicatif. Condere ne
              saurait être tenu responsable des erreurs ou omissions, ni des dommages directs ou
              indirects pouvant résulter de l&apos;utilisation de ces informations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

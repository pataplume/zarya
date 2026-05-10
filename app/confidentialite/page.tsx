import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Zarya',
  robots: { index: true, follow: false },
}

const sousTraitants = [
  { nom: 'Anthropic via AWS Bedrock', fonction: 'Inférence LLM', localisation: 'Frankfurt DE' },
  { nom: 'AWS', fonction: 'Hébergement + backups', localisation: 'Frankfurt DE' },
  { nom: 'Vercel', fonction: 'Hébergement frontend', localisation: 'Edge global, primaire EU' },
  { nom: 'Resend', fonction: 'Emails transactionnels', localisation: 'EU' },
]

export default function ConfidentialitePage() {
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
          Politique de confidentialité
        </h1>

        <div className="space-y-12 font-body text-body text-ink-2 leading-[1.6]">
          <section>
            <h2 className="font-display font-[400] text-ink mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.3 }}>
              Données collectées
            </h2>
            <p>Dans le cadre du formulaire de demande d&apos;accès pilote, nous collectons :</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc list-outside">
              <li>Adresse email professionnelle</li>
              <li>Nom du cabinet</li>
              <li>Nombre de collaborateurs (optionnel)</li>
              <li>Logiciel comptable utilisé (optionnel)</li>
            </ul>
            <p className="mt-4">
              Aucun cookie de traçage, aucune donnée de navigation ne sont collectés.
            </p>
          </section>

          <section>
            <h2 className="font-display font-[400] text-ink mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.3 }}>
              Finalités du traitement
            </h2>
            <p>
              Les données collectées via le formulaire sont utilisées exclusivement pour vous
              recontacter dans le cadre du programme pilote Zarya et pour qualifier votre demande.
              Elles ne sont ni revendues, ni transmises à des tiers à des fins commerciales.
            </p>
          </section>

          <section id="sous-traitants">
            <h2 className="font-display font-[400] text-ink mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.3 }}>
              Sous-traitants
            </h2>
            <p className="mb-6">
              Les données peuvent transiter par les sous-processeurs suivants, soumis à des
              garanties contractuelles (DPA) conformes au RGPD et à la nLPD suisse.
            </p>
            <div className="overflow-x-auto">
              <table
                className="w-full text-left"
                style={{ borderCollapse: 'collapse' }}
              >
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-stone-200)' }}>
                    {['Sous-processeur', 'Fonction', 'Localisation'].map((h) => (
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
                    <tr
                      key={s.nom}
                      style={{ borderBottom: '1px solid var(--color-stone-100)' }}
                    >
                      <td className="py-3 pr-6 text-ink">{s.nom}</td>
                      <td className="py-3 pr-6 text-ink-2">{s.fonction}</td>
                      <td className="py-3 font-code text-caption text-ink-2" style={{ fontFeatureSettings: '"tnum"' }}>
                        {s.localisation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="font-display font-[400] text-ink mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.3 }}>
              Durée de conservation
            </h2>
            <p>
              Les données du formulaire pilote sont conservées pendant la durée du programme pilote
              et 12 mois après sa clôture, sauf demande de suppression anticipée.
            </p>
          </section>

          <section>
            <h2 className="font-display font-[400] text-ink mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.3 }}>
              Droits des personnes
            </h2>
            <p>Conformément à la nLPD suisse et au RGPD européen, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-1 pl-4 list-disc list-outside">
              <li>Droit d&apos;accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (suppression)</li>
              <li>Droit à la portabilité</li>
              <li>Droit d&apos;opposition au traitement</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à{' '}
              <a
                href="mailto:contact@condere.ch"
                className="border-b border-stone-300 pb-px hover:border-ink hover:text-ink transition-colors duration-150"
              >
                contact@condere.ch
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-display font-[400] text-ink mb-4" style={{ fontSize: '1.125rem', lineHeight: 1.3 }}>
              Contact DPO
            </h2>
            <p>
              Pour toute question relative à la protection de vos données personnelles :{' '}
              <a
                href="mailto:contact@condere.ch"
                className="border-b border-stone-300 pb-px hover:border-ink hover:text-ink transition-colors duration-150"
              >
                contact@condere.ch
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

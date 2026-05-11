import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const etapes = [
  {
    num: '01.',
    titre: 'Premier contact',
    texte:
      'Vous prenez 30 minutes avec nous. Nous regardons votre organisation, vos outils, vos volumes. Si Zarya peut vous apporter quelque chose, on continue.',
  },
  {
    num: '02.',
    titre: 'Mise en place',
    texte:
      'Nous configurons Zarya sur votre tenant Microsoft 365 et votre logiciel comptable. Comptez 2 à 4 heures réparties sur deux semaines. Aucun changement chez vous.',
  },
  {
    num: '03.',
    titre: 'Six mois en conditions réelles',
    texte:
      "Vous utilisez Zarya gratuitement pendant six mois. En échange, vous nous donnez votre feedback toutes les semaines. Au terme, vous décidez : continuer avec l'un de nos abonnements dès CHF 199/mois, ou nous quitter sans frais.",
  },
]

export function Pilote() {
  return (
    <section
      id="pilote"
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
          <Eyebrow className="mb-8">─── 04 / LE PILOTE</Eyebrow>

          <h2
            className="font-display font-[400] text-ink mb-12"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
            }}
          >
            Trois cabinets pilotes. Six mois. Sans engagement.
          </h2>

          {/* ─── Étapes ─── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200">
            {etapes.map((e, i) => (
              <RevealSection key={e.num} delay={i * 80}>
                <div className="bg-paper p-8 h-full">
                  <p
                    className="font-code font-[300] text-ink-2 mb-6"
                    style={{ fontSize: '3.5rem', lineHeight: 1, fontFeatureSettings: '"tnum"' }}
                  >
                    {e.num}
                  </p>
                  <h3
                    className="font-display font-[400] text-ink mb-4"
                    style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
                  >
                    {e.titre}
                  </h3>
                  <p className="font-body text-body text-ink-2 leading-[1.6]">{e.texte}</p>
                </div>
              </RevealSection>
            ))}
          </div>

          {/* ─── Critères ─── */}
          <div className="mt-12 pt-8 border-t border-stone-200 max-w-[62ch]">
            <p className="font-body text-body text-ink-2 leading-[1.6]">
              Nous cherchons trois fiduciaires entre 5 et 30 collaborateurs, déjà équipées
              Microsoft 365 et Bexio, Winbiz ou Crésus. Une au minimum bilingue français-allemand.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

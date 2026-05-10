import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const questions = [
  {
    q: "Zarya remplace-t-il Bexio ou Topal ?",
    r: "Non. Zarya s'installe en couche au-dessus. Vous gardez votre logiciel comptable, vos comptes, votre méthode. Zarya pré-saisit les écritures et vous les pousse dans votre outil habituel après validation.",
  },
  {
    q: "Que se passe-t-il si l'IA se trompe ?",
    r: "Chaque écriture est validée par un humain avant d'être poussée dans votre comptabilité. Aucune action irréversible n'est exécutée sans approbation. Quand Zarya n'est pas sûr, il escalade.",
  },
  {
    q: "Qui voit nos données ?",
    r: "Vous, vos collaborateurs, et personne d'autre. Pas Anthropic (accord Zero Data Retention signé), pas nous au-delà de l'opérationnel strict, pas d'éditeur tiers. Liste complète des sous-traitants publiée dans nos mentions légales.",
  },
  {
    q: "Et si on n'est pas sur Microsoft 365 ?",
    r: "Pour le moment, Zarya est conçu pour Microsoft 365. Si vous êtes sur Google Workspace ou autre chose, parlons-en — nous évaluons certains cas au cas par cas.",
  },
  {
    q: "Est-ce que ça marche en allemand ?",
    r: "Oui. Le français est notre langue source, mais Claude (le modèle utilisé) est nativement multilingue. L'allemand est utilisable dès le pilote.",
  },
  {
    q: "Vous êtes combien dans l'équipe ?",
    r: "Deux fondateurs, basés en Suisse romande, accompagnés d'un advisor expert-comptable. Nous travaillons à temps plein sur Zarya. C'est délibérément petit : nous voulons rester proches de chaque pilote.",
  },
  {
    q: "Quel est le prix après le pilote ?",
    r: "Entre 199 et 399 CHF par mois selon les modules activés et la taille du cabinet. Au-delà des quotas inclus, 0,10 CHF par document supplémentaire. Pas de frais d'installation, pas d'engagement annuel, résiliation au mois.",
  },
  {
    q: "Que veut dire « Zarya » ?",
    r: "« Aurore » en racine slave. Le moment où la nuit cède sans que la lumière s'impose.",
  },
]

export function Faq() {
  return (
    <section
      id="faq"
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
          <Eyebrow className="mb-8">─── 05 / QUESTIONS</Eyebrow>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <h2
                className="font-display font-[400] text-ink"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                Ce qu&apos;on nous demande le plus souvent.
              </h2>
            </div>

            <div className="lg:col-span-8">
              <dl className="space-y-0">
                {questions.map((item, i) => (
                  <div
                    key={i}
                    className="pt-6 pb-6 border-b border-stone-200 first:border-t first:border-stone-200"
                  >
                    <dt
                      className="font-display font-[400] text-ink mb-3"
                      style={{ fontSize: '1.125rem', lineHeight: 1.3 }}
                    >
                      {item.q}
                    </dt>
                    <dd className="font-body text-body text-ink-2 leading-[1.6]">{item.r}</dd>
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

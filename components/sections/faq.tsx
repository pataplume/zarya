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
    r: "Vous et vos collaborateurs uniquement. Ni Condere ni les sociétés tierces (traitement IA, hébergement) n'ont accès à vos données. Liste complète des sous-traitants publiée dans nos mentions légales.",
  },
  {
    q: "Et si on n'est pas sur Microsoft 365 ?",
    r: "Pour le moment, Zarya est conçu pour Microsoft 365. Si vous êtes sur Google Workspace ou autre chose, parlons-en — nous évaluons certains cas au cas par cas.",
  },
  {
    q: "Est-ce que ça marche en allemand ?",
    r: "Oui. Le français est notre langue source, mais les IA sont nativement multilingues et s'adapteront à la langue de l'utilisateur·rice. L'allemand est utilisable dès le pilote.",
  },
  {
    q: "Vous êtes combien dans l'équipe ?",
    r: "Nous sommes deux, basés à Genève, avec une approche IA Native, le standard du futur pour toute entreprise en croissance.",
  },
  {
    q: "Quel est le prix après le pilote ?",
    r: "Dès CHF 199/mois pour un module et des prix dégressifs à chaque module supplémentaire.",
  },
  {
    q: "Que veut dire « Zarya » ?",
    r: "\"Aurore\" — et c'est aussi le nom du premier module de la Station spatiale internationale, symbole de la réussite d'un défi à la frontière de l'univers et de collaboration entre les peuples.",
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

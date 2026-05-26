import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

export function Explicatif() {
  return (
    <section
      id="explicatif"
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* ─── Texte principal ─── */}
            <div className="lg:col-span-7">
              <Eyebrow className="mb-8">─── 01 / PLATEFORME</Eyebrow>

              <h2
                className="font-display font-[400] text-ink mb-4"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                Le logiciel pour les fiduciaires suisses.
              </h2>

              <p
                className="font-body text-ink-2 mb-8"
                style={{ fontSize: '1.125rem', lineHeight: 1.4 }}
              >
                Automatisez votre fiduciaire et concentrez-vous enfin sur ce qui compte vraiment.
              </p>

              <div className="space-y-5">
                <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[60ch]">
                  Conçu pour les fiduciaires exigeantes, notre logiciel allie automatisation,
                  précision et fluidité pour vous offrir une maîtrise totale de votre activité.
                  En centralisant vos processus et en simplifiant vos échanges, il vous libère
                  de l&apos;opérationnel pour vous concentrer sur le conseil et la valeur ajoutée.
                </p>
                <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[60ch]">
                  Zarya est une plateforme modulaire, avec dashboards dédiés aux fiduciaires et
                  à leurs clients, intégrant un onboarding fluide pour une collaboration simple
                  dès le premier jour.
                </p>
              </div>
            </div>

            {/* ─── Statistique ─── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="border-l-[1px] border-stone-200 pl-8 lg:pl-12">
                <p
                  className="font-code font-[300] text-ink"
                  style={{
                    fontSize: 'clamp(3rem, 4vw, 4.5rem)',
                    fontFeatureSettings: '"tnum"',
                    lineHeight: 1,
                  }}
                >
                  ~ 12 h
                </p>
                <p className="font-body text-body text-ink-2 mt-3">/ semaine</p>
                <p className="font-body text-body text-ink-2">gagnées par collaborateur</p>
                <p className="font-body text-body text-ink-2">sur les tâches documentaires</p>
              </div>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

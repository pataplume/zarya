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
          <Eyebrow className="mb-8">─── 01 / PLATEFORME</Eyebrow>

          {/* Title row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <h2
              className="lg:col-span-7 font-display font-[400] text-ink"
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
              }}
            >
              Le logiciel pour les fiduciaires suisses.
            </h2>
            <p
              className="lg:col-span-5 font-body text-ink-2 leading-[1.6] lg:pt-2"
              style={{ fontSize: '1.125rem' }}
            >
              Automatisez votre fiduciaire et concentrez-vous enfin sur ce qui compte vraiment.
            </p>
          </div>

          {/* Body text — 2-column at desktop */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
            style={{
              borderTop: '1px solid var(--color-stone-200)',
              paddingTop: '2.5rem',
            }}
          >
            <p className="font-body text-ink-2 text-body leading-[1.7] max-w-[60ch]">
              Conçu pour les fiduciaires exigeantes, Zarya allie automatisation, précision et
              fluidité pour vous offrir une maîtrise totale de votre activité. En centralisant
              vos processus et en simplifiant vos échanges, il vous libère de l&apos;opérationnel
              pour vous concentrer sur le conseil et la valeur ajoutée.
            </p>
            <p className="font-body text-ink-2 text-body leading-[1.7] max-w-[60ch]">
              Zarya est une plateforme modulaire avec dashboards dédiés aux fiduciaires et à
              leurs clients, intégrant un onboarding fluide pour une collaboration simple dès le
              premier jour. Compatible Microsoft 365, Bexio, Crésus, Winbiz, Abacus et Odoo —
              sans migration, sans friction.
            </p>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

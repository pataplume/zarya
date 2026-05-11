import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

export function Promesse() {
  return (
    <section
      id="promesse"
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
              <Eyebrow className="mb-8">─── 01 / LA PROMESSE</Eyebrow>

              <h2
                className="font-display font-[400] text-ink mb-8"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                Vous n&apos;embauchez pas pour saisir des factures.
              </h2>

              <div className="space-y-5">
                <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[60ch]">
                  Une fiduciaire romande de 12 collaborateurs traite en moyenne{' '}
                  <span className="font-code text-ink" style={{ fontFeatureSettings: '"tnum"' }}>
                    4&apos;200
                  </span>{' '}
                  documents par mois. La majorité — factures fournisseurs, scans d&apos;imprimante,
                  certificats AVS — passe par les mêmes mains, suit les mêmes règles, finit dans les
                  mêmes dossiers.
                </p>
                <p className="font-body text-ink-2 text-body leading-[1.6] max-w-[60ch]">
                  Zarya s&apos;occupe de cette part répétitive. Vos collaborateurs valident,
                  corrigent, escaladent les cas qui le méritent. Le travail à faible valeur passe en
                  arrière-plan. Le travail de conseil, de relation, de jugement reprend la place
                  qu&apos;il n&apos;aurait jamais dû quitter.
                </p>
              </div>
            </div>

            {/* ─── Statistique ─── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="border-l-[1px] border-stone-200 pl-8 lg:pl-12">
                <p
                  className="font-code font-[300] text-ink"
                  style={{ fontSize: 'clamp(3rem, 4vw, 4.5rem)', fontFeatureSettings: '"tnum"', lineHeight: 1 }}
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

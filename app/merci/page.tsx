import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Merci — Zarya',
  description: 'Votre demande a bien été reçue. Nous vous recontactons sous 48 heures.',
  robots: { index: false, follow: false },
}

const CALENDLY_URL = 'https://calendar.app.google/cLYsTginjTn5Qox19'

export default function MerciPage() {
  return (
    <div
      style={{
        backgroundColor: 'var(--color-paper)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: '640px',
          paddingLeft: 'clamp(1.5rem, 5vw, 4rem)',
          paddingRight: 'clamp(1.5rem, 5vw, 4rem)',
          paddingTop: 'clamp(5rem, 10vw, 9rem)',
          paddingBottom: 'clamp(5rem, 10vw, 9rem)',
        }}
      >
        <p className="font-display font-[500] text-muted text-[0.75rem] uppercase tracking-[0.14em] mb-8">
          MERCI
        </p>

        <h1
          className="font-display font-[400] text-ink mb-6"
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 3rem)',
            lineHeight: 1.15,
            letterSpacing: '-0.01em',
          }}
        >
          Nous avons bien reçu votre demande.
        </h1>

        <div className="space-y-4 mb-12">
          <p className="font-body text-body text-ink-2 leading-[1.6]">
            Nous regarderons votre profil dans les 48 heures. Si Zarya semble pertinent pour vous,
            nous vous proposerons un créneau de 30 minutes pour en discuter.
          </p>
          <p className="font-body text-body text-ink-2 leading-[1.6]">
            Vous pouvez aussi choisir directement un créneau ci-dessous.
          </p>
        </div>

        <div className="mb-12">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-ink text-paper border border-ink px-7 py-[0.875rem] font-display font-[500] text-[0.75rem] uppercase tracking-[0.08em] rounded-[4px] transition-colors duration-150 hover:bg-paper hover:text-ink focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            Choisir un créneau
          </a>
          <p className="font-body text-caption text-muted mt-3">
            S&apos;ouvre dans Google Calendar
          </p>
        </div>

        <div
          className="pt-8"
          style={{ borderTop: '1px solid var(--color-stone-200)' }}
        >
          <Link
            href="/"
            className="font-body text-body text-ink-2 border-b border-stone-300 pb-px transition-colors duration-150 hover:text-ink hover:border-ink"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}

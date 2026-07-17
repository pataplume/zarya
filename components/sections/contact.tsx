'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { Eyebrow } from '@/components/typography/Eyebrow'
import { RevealSection } from '@/components/RevealSection'

const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.fr', 'yahoo.co.uk',
  'hotmail.com', 'hotmail.fr', 'outlook.com', 'live.com', 'live.fr',
  'icloud.com', 'me.com', 'mac.com', 'protonmail.com', 'proton.me',
  'gmx.com', 'gmx.de', 'gmx.ch', 'gmx.net', 'free.fr', 'orange.fr',
  'laposte.net', 'sfr.fr', 'wanadoo.fr', 'bluewin.ch', 'sunrise.ch',
  'aol.com', 'yandex.com', 'mail.com', 'inbox.com',
])

const schema = z.object({
  email: z
    .string()
    .min(1, "L'email est requis.")
    .email("Format d'email invalide.")
    .refine((val) => {
      const domain = val.split('@')[1]?.toLowerCase()
      return domain ? !FREE_EMAIL_DOMAINS.has(domain) : true
    }, "Merci d'utiliser votre email professionnel."),
  cabinet: z.string().min(2, 'Le nom du cabinet est requis.').max(100),
  collaborateurs: z.string().optional(),
  logiciel: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export function Contact() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    try {
      const res = await fetch('/api/pilot-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.message || 'Une erreur est survenue.')
      }
      router.push('/merci')
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Une erreur est survenue.')
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
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
            {/* ─── Intro ─── */}
            <div className="lg:col-span-5">
              <Eyebrow className="mb-8">─── 05 / DEMANDER UN ACCÈS</Eyebrow>
              <h2
                className="font-display font-bold text-ink mb-6"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                Trois places. Six mois. Sans engagement.
              </h2>
              <p className="font-body text-body text-ink-2 leading-[1.6] max-w-[48ch]">
                Laissez-nous votre email et le nom de votre cabinet. Nous vous proposons un créneau
                de 30 minutes dans les jours qui viennent.
              </p>
            </div>

            {/* ─── Formulaire ─── */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="space-y-6"
                aria-label="Formulaire de demande d'accès pilote"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-display font-[500] text-ink text-[0.7rem] uppercase tracking-[0.1em] mb-2"
                  >
                    Email professionnel
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...register('email')}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={!!errors.email}
                    className="w-full bg-paper border border-stone-300 px-4 py-3 font-body text-body text-ink placeholder:text-stone-400 focus:outline-none focus:border-ink transition-colors duration-150 rounded-[4px]"
                    placeholder="prenom.nom@cabinet.ch"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-2 font-body text-caption text-danger" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Cabinet */}
                <div>
                  <label
                    htmlFor="cabinet"
                    className="block font-display font-[500] text-ink text-[0.7rem] uppercase tracking-[0.1em] mb-2"
                  >
                    Nom du cabinet
                  </label>
                  <input
                    id="cabinet"
                    type="text"
                    autoComplete="organization"
                    {...register('cabinet')}
                    aria-describedby={errors.cabinet ? 'cabinet-error' : undefined}
                    aria-invalid={!!errors.cabinet}
                    className="w-full bg-paper border border-stone-300 px-4 py-3 font-body text-body text-ink placeholder:text-stone-400 focus:outline-none focus:border-ink transition-colors duration-150 rounded-[4px]"
                    placeholder="Fiduciaire Dupont & Associés SA"
                  />
                  {errors.cabinet && (
                    <p id="cabinet-error" className="mt-2 font-body text-caption text-danger" role="alert">
                      {errors.cabinet.message}
                    </p>
                  )}
                </div>

                {/* Collaborateurs + Logiciel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="collaborateurs"
                      className="block font-display font-[500] text-ink text-[0.7rem] uppercase tracking-[0.1em] mb-2"
                    >
                      Collaborateurs{' '}
                      <span className="text-muted normal-case tracking-normal font-body font-[400]">
                        (optionnel)
                      </span>
                    </label>
                    <select
                      id="collaborateurs"
                      {...register('collaborateurs')}
                      className="w-full bg-paper border border-stone-300 px-4 py-3 font-body text-body text-ink focus:outline-none focus:border-ink transition-colors duration-150 rounded-[4px] appearance-none cursor-pointer"
                    >
                      <option value="">—</option>
                      <option value="1-5">1 – 5</option>
                      <option value="6-15">6 – 15</option>
                      <option value="16-30">16 – 30</option>
                      <option value="30+">30+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="logiciel"
                      className="block font-display font-[500] text-ink text-[0.7rem] uppercase tracking-[0.1em] mb-2"
                    >
                      Logiciel comptable{' '}
                      <span className="text-muted normal-case tracking-normal font-body font-[400]">
                        (optionnel)
                      </span>
                    </label>
                    <select
                      id="logiciel"
                      {...register('logiciel')}
                      className="w-full bg-paper border border-stone-300 px-4 py-3 font-body text-body text-ink focus:outline-none focus:border-ink transition-colors duration-150 rounded-[4px] appearance-none cursor-pointer"
                    >
                      <option value="">—</option>
                      <option value="bexio">Bexio</option>
                      <option value="winbiz">Winbiz</option>
                      <option value="cresus">Crésus</option>
                      <option value="abacus">Abacus</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                </div>

                {/* Erreur globale */}
                {submitError && (
                  <p className="font-body text-caption text-danger" role="alert">
                    {submitError}
                  </p>
                )}

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center text-white border border-[#1A2BD4] px-7 py-[0.875rem] font-display font-[700] text-[0.75rem] uppercase tracking-[0.08em] rounded-[4px] transition-colors duration-150 hover:bg-[#0D2C22] hover:border-[#0D2C22] focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#1A2BD4' }}
                  >
                    {isSubmitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
                  </button>
                </div>

                {/* Mention RGPD */}
                <p className="font-body text-caption text-muted leading-[1.5] max-w-[52ch]">
                  Vos données sont stockées en Suisse (Zurich) et utilisées uniquement pour vous recontacter
                  au sujet du pilote. Vous pouvez demander leur suppression à tout moment.
                </p>
              </form>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  )
}

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  cabinet: z.string().min(2).max(100),
  collaborateurs: z.string().optional(),
  logiciel: z.string().optional(),
})

export async function POST(req: NextRequest) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ message: 'Corps de requête invalide.' }, { status: 400 })
  }

  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ message: 'Données invalides.', errors: parsed.error.flatten() }, { status: 422 })
  }

  const data = parsed.data

  // ─── Supabase ───────────────────────────────────────────────────
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (supabaseUrl && supabaseKey) {
    try {
      const res = await fetch(`${supabaseUrl}/rest/v1/pilot_signups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          email: data.email,
          cabinet: data.cabinet,
          collaborateurs: data.collaborateurs ?? null,
          logiciel: data.logiciel ?? null,
          created_at: new Date().toISOString(),
        }),
      })
      if (!res.ok) {
        console.error('[pilot-signup] Supabase error:', await res.text())
      }
    } catch (err) {
      console.error('[pilot-signup] Supabase fetch failed:', err)
    }
  }

  // ─── Resend ─────────────────────────────────────────────────────
  const resendKey = process.env.RESEND_API_KEY
  const notifyEmail = process.env.NOTIFY_EMAIL ?? 'contact@condere.ch'

  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: 'Zarya <noreply@condere.ch>',
          to: [notifyEmail],
          subject: `Nouvelle demande pilote — ${data.cabinet}`,
          html: `
            <p><strong>Cabinet :</strong> ${data.cabinet}</p>
            <p><strong>Email :</strong> ${data.email}</p>
            <p><strong>Collaborateurs :</strong> ${data.collaborateurs ?? '—'}</p>
            <p><strong>Logiciel :</strong> ${data.logiciel ?? '—'}</p>
            <p><strong>Date :</strong> ${new Date().toLocaleString('fr-CH', { timeZone: 'Europe/Zurich' })}</p>
          `,
        }),
      })
      if (!res.ok) {
        console.error('[pilot-signup] Resend error:', await res.text())
      }
    } catch (err) {
      console.error('[pilot-signup] Resend fetch failed:', err)
    }
  }

  // Fallback log si rien de configuré
  if (!supabaseUrl && !resendKey) {
    console.log('[pilot-signup] Nouvelle demande (aucun backend configuré) :', data)
  }

  return NextResponse.json({ ok: true }, { status: 200 })
}

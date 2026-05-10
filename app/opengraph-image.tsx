import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Zarya — IA pour fiduciaires suisses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#FAFAF7',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            fontSize: '11px',
            letterSpacing: '0.14em',
            color: '#6B6B66',
            textTransform: 'uppercase',
            marginBottom: '32px',
          }}
        >
          ZARYA — POUR LES FIDUCIAIRES SUISSES
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 400,
            color: '#1A1A1A',
            lineHeight: 1,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}
        >
          Zarya
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: '28px',
            color: '#3A3A3A',
            lineHeight: 1.4,
            maxWidth: '680px',
          }}
        >
          {"L'intelligence artificielle pour les fiduciaires qui prennent leur métier au sérieux."}
        </div>

        {/* Trust bar */}
        <div
          style={{
            marginTop: '56px',
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            paddingTop: '32px',
            borderTop: '1px solid #E5E2D8',
          }}
        >
          {['Hébergement Frankfurt', '·', 'Conforme nLPD', '·', 'zarya.condere.ch'].map(
            (item, i) => (
              <div
                key={i}
                style={{
                  fontSize: '13px',
                  color: item === '·' ? '#D4D0C2' : '#6B6B66',
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  )
}

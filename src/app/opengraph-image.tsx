import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AUREN — Essentials, considered.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, #2a2520 0%, #4a3d34 30%, #6b5b4d 60%, #8a7565 100%)',
          color: '#F4EFE7',
          fontFamily: 'Georgia, serif',
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.8,
            marginBottom: 32,
          }}
        >
          Spring / Summer 2026
        </div>
        <div
          style={{
            fontSize: 140,
            fontWeight: 300,
            letterSpacing: '0.2em',
            marginBottom: 40,
          }}
        >
          AUREN
        </div>
        <div
          style={{
            fontSize: 36,
            fontStyle: 'italic',
            opacity: 0.85,
            fontWeight: 300,
          }}
        >
          Essentials, considered.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

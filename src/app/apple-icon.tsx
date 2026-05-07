import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 90,
          background: '#F4EFE7',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1C1815',
          fontFamily: 'Georgia, serif',
          fontWeight: 300,
          letterSpacing: '0.05em',
        }}
      >
        A
      </div>
    ),
    {
      ...size,
    }
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eeccouncil.org'),
  title: {
    default: 'Echoes of Earth Council | Environmental & Humanitarian Movement',
    template: '%s | EEC',
  },
  description: 'Empowering Humanity. Protecting Nature. Shaping Tomorrow. A global movement building sustainable communities through education, environmental action, and collective impact.',
  keywords: ['environment', 'sustainability', 'humanitarian', 'education', 'climate action', 'community development', 'environmental protection'],
  authors: [{ name: 'Echoes of Earth Council' }],
  creator: 'Echoes of Earth Council',
  publisher: 'Echoes of Earth Council',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Echoes of Earth Council',
    title: 'Echoes of Earth Council',
    description: 'A global movement building sustainable communities through education, environmental action, and collective impact.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Echoes of Earth Council',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Echoes of Earth Council',
    description: 'A global movement building sustainable communities through education, environmental action, and collective impact.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

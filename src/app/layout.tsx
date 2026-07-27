import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vittorio92.github.io'),
  title: 'Vittorio Gallicchio | Software Engineer & Cybersecurity Portfolio',
  description: 'Portfolio personale di Vittorio Gallicchio (Vittorio92). Software Engineer laureato UNICAL e specializzando in Cybersecurity.',
  keywords: ['Vittorio Gallicchio', 'Vittorio', 'Vittorio92', 'Portfolio', 'Cybersecurity', 'Ingegneria Informatica', 'UNICAL', 'Next.js', 'React', 'GitHub Pages'],
  authors: [{ name: 'Vittorio Gallicchio' }],
  openGraph: {
    title: 'Vittorio Gallicchio | Software Engineer & Cybersecurity Portfolio',
    description: 'Esplora i progetti GitHub ed il CV di Vittorio Gallicchio.',
    url: 'https://vittorio92.github.io',
    siteName: 'Vittorio Gallicchio Portfolio',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Vittorio Gallicchio Software Engineer',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={`${outfit.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="bg-ambient-grid" />
        <div className="grid-overlay" />
        <main style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </main>
      </body>
    </html>
  );
}

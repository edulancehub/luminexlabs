import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import Scene3DWrapper from '@/components/Scene3DWrapper';

export const metadata = {
  title: 'LuminexLabs — AI-Driven Software Solutions | Web & App Development',
  description: 'LuminexLabs — Your trusted AI-driven software partner. We build intelligent websites, mobile apps, RAG pipelines, AI chatbots, and automation systems. Best web development and app development company in Bangladesh (BD) and globally. AI solutions, machine learning, cyber security, and digital transformation.',
  keywords: 'web development in bd, app development in bd, ai in bd, web development in bangladesh, app development bangladesh, AI software company, ai driven website, ai driven app, luminexlabs, RAG solutions, n8n automation, langchain, cyber security, ai chatbot development, machine learning, best software company in bangladesh, dhaka web development, app development dhaka, ai company bangladesh, digital transformation bd, software agency bangladesh, web design bd, mobile app bd, artificial intelligence bangladesh',
  authors: [{ name: 'LuminexLabs' }],
  creator: 'LuminexLabs',
  publisher: 'LuminexLabs',
  metadataBase: new URL('https://luminexlabs.io'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  other: {
    'theme-color': '#e8734a',
    'msapplication-TileColor': '#e8734a',
  },
  openGraph: {
    title: 'LuminexLabs — AI-Driven Software Solutions',
    description: 'Build intelligent software with LuminexLabs — AI websites ($300), smart apps ($500), RAG, automation, and cyber security. Best web & app development in Bangladesh.',
    url: 'https://luminexlabs.io',
    siteName: 'LuminexLabs',
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'LuminexLabs Logo' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuminexLabs — AI-Driven Software Solutions',
    description: 'Build intelligent software with LuminexLabs — AI websites, smart apps, RAG, automation, and cyber security.',
    images: ['/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'LuminexLabs',
  url: 'https://luminexlabs.io',
  logo: 'https://luminexlabs.io/icon-512.png',
  description: 'AI-driven software company specializing in web development, app development, RAG, AI chatbots, automation, and cyber security.',
  foundingDate: '2024',
  areaServed: [
    { '@type': 'Country', name: 'Saudi Arabia' },
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Bangladesh' },
  ],
  sameAs: [],
  offers: [
    { '@type': 'Offer', name: 'AI-Driven Website', price: '300', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'AI-Driven App', price: '500', priceCurrency: 'USD' },
  ],
  knowsAbout: [
    'Artificial Intelligence', 'Web Development', 'App Development', 'RAG',
    'Machine Learning', 'Cyber Security', 'LangChain', 'n8n Automation',
    'AI Chatbots', 'Digital Transformation', 'Software Development Bangladesh'
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#e8734a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Scene3DWrapper />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}

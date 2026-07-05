import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  //Basics
    title: {
      default: 'PaxonFlow | Workflow Automation for Insurance & SMBs',
      template: '%s | PaxonFlow',
    },
    description:
      'PaxonFlow builds workflow automation for insurance agencies and small businesses. Lead capture, client onboarding, CRM setup, and retention systems. US and UK market.',
    keywords: [
      'workflow automation',
      'insurance agency automation',
      'small business automation',
      'n8n automation agency',
      'lead capture automation',
      'client onboarding automation',
      'CRM automation UK',
      'business process automation',
    ],
  
    // Open Graph (LinkedIn, Facebook previews)
    openGraph: {
      type: 'website',
      url: 'https://paxonflow.dev',
      title: 'PaxonFlow | Workflow Automation for Insurance & SMBs',
      description:
        'We build automation systems for insurance agencies and small businesses. Lead capture, onboarding, CRM, and retention — all connected.',
      siteName: 'PaxonFlow',
      images: [
        {
          url: 'https://paxonflow.dev/og-image.png',
          width: 1200,
          height: 630,
          alt: 'PaxonFlow - Workflow Automation Agency',
        },
      ],
    },
  
    // Twitter / X card
    twitter: {
      card: 'summary_large_image',
      title: 'PaxonFlow | Workflow Automation for Insurance & SMBs',
      description:
        'We build automation systems for insurance agencies and SMBs.',
      images: ['https://paxonflow.dev/og-image.png'],
    },
  
    // Canonical URL
    alternates: {
      canonical: 'https://paxonflow.dev',
    },
  
    // Indexing
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

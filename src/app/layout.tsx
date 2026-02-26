
'use client';

import type {Metadata} from 'next';
import './globals.css';
import '@/i18n/config';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=PT+Sans:wght@400;700&family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
        <title>She is Fit | Find Your Balance</title>
      </head>
      <body className="font-body antialiased bg-background">
        <I18nextProvider i18n={i18n}>
          {children}
        </I18nextProvider>
      </body>
    </html>
  );
}

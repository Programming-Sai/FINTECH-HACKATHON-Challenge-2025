import './globals.css';
import { Inter } from 'next/font/google';
import './../public/themes/theme-base.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Paynari - Payment Processing PWA',
  description: 'Create beautiful branded payment experiences for your business',
  manifest: '/manifest.json',
  themeColor: '#3B82F6',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Paynari',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({ children }) {
  // const saved = localStorage.getItem('theme');
  // if (saved) loadTheme(saved);
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Paynari" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
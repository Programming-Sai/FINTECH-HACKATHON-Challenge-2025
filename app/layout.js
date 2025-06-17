import './globals.css';
import { Inter } from 'next/font/google';
import './../public/themes/theme-base.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Paynari - Payment Processing PWA',
  description: 'Create beautiful branded payment experiences for your business',
  manifest: '/manifest.json',
  themeColor: '#1E40AF',
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
      <head />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
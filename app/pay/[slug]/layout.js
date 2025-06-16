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

export default function PayLayout({ children }) {
  return (
    <html lang="en">
      <head>
       <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Paynari" />
        <meta name="theme-color" content="#4F46E5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function () {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

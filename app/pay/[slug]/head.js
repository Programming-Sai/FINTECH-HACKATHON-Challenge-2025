// app/pay/[slug]/head.js
export default function Head() {
  return (
    <>
      {/* this will be injected into the document <head> */}
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon-192.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Paynari" />
      <meta name="theme-color" content="#1E40AF" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js');
              });
            }
          `,
        }}
      />
    </>
  );
}

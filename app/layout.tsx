import './globals.css';
import React from "react";
import Script from "next/script";

export const metadata = {
  title: '에버타임',
  description: '에버랜드 대기시간 실시간 확인 서비스',
  icons: {
    icon: '/icons/ferris-wheel.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const token = process.env.NEXT_PUBLIC_CLOUDFLARE_TOKEN;

  return (
    <html lang="ko">
    <body>

      {/* Cloudflare Web Analytics */}
      {token && (
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={`{"token": "${token}"}`}
          strategy="afterInteractive"
        />
      )}
      {/* End Cloudflare Web Analytics */}

      {children}
    </body>
    </html>
  );
}
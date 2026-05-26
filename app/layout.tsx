import './globals.css';
import React from "react";

export const metadata = {
  title: '에버타임',
  description: '에버랜드 대기시간 실시간 확인 서비스',
  icons: {
    icon: '/icons/tree.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
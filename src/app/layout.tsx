import './globals.css';
import React from 'react';
import Layout from '@/components/layout/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

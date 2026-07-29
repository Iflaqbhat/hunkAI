import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'hunkAI',
  description: 'AI pull request review for every code hunk, not just the diff.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
              try {
                const saved = localStorage.getItem('hunk-theme');
                document.documentElement.dataset.theme = saved || 'light';
              } catch (error) {
                document.documentElement.dataset.theme = 'dark';
              }
            })();`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

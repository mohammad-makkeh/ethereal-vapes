import Navbar from 'components/layout/navbar';
import { GeistSans } from 'geist/font/sans';
import { CookiesProvider } from 'next-client-cookies/server';
import { ReactNode } from 'react';
import './globals.css';


export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="relative bg-neutral-50 text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
          <CookiesProvider>
            <Navbar />
            <main>{children}</main>
          </CookiesProvider>
      </body>
    </html>
  );
}

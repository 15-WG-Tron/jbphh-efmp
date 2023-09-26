import '../styles/globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import AppProvider from '../components/AppProvider';
import { Navbar } from '@/components/Navbar/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: `Cyber 'Ohana`,
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const errorPage = children?.props?.childProp?.segment.includes('not-found');

  return (
    <html lang="en" className="bg-base-100 ">
      {errorPage === false ? (
        <body className={`${inter.className} w-full`}>
          <AppProvider>
            <Navbar>
              {children}
              <Footer />
            </Navbar>
          </AppProvider>
        </body>
      ) : (
        <body>{children}</body>
      )}
    </html>
  );
}

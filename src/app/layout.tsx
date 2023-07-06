import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';
import AppProvider from '../components/AppProvider';
import { Navbar } from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next app',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <AppProvider>
        <body className='container'>
          <Navbar />
          {children}
        </body>
      </AppProvider>
    </html>
  );
}

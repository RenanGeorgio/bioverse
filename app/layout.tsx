import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
//import { Geist, Geist_Mono } from 'next/font/google';
import { AppProvider } from '@/contexts';
import { getURL } from '@/utils/helpers';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import './globals.css';


//const geistSans = Geist({
const geistSans = {
  variable: "--font-geist-sans",
  subsets: ["latin"],
}
//});

//const geistMono = Geist_Mono({
const geistMono = {
  variable: "--font-geist-mono",
  subsets: ["latin"],
}
//});

const title = "Bioverse App";
const description = "Teste de adminisao";

export const metadata: Metadata = {
  metadataBase: new URL(getURL()),
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description
  }
};

export default async function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <AppProvider>
        <Navbar />
        <main
            id="skip"
            className="min-h-[calc(100dvh-4rem)] md:min-h[calc(100dvh-5rem)]"
          >
          {children}
        </main>
        <Footer />
      </AppProvider>
      </body>
    </html>
  );
}
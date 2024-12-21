import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google'
import { Roboto } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700'], 
  variable: '--font-montserrat',
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', 
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto', 
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body className="bg-rmax-gradient min-h-screen">
        {children}
      </body>
    </html>
  );
}
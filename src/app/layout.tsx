import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/app/shared/components/layout/Header';
import RootLayoutProvider from '@/app/shared/components/provider/RootLayoutProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayoutProvider>
          <div className="max-w-[600px] min-h-screen m-auto max-sm:w-[90%]">
            <Header />
            {children}
          </div>
        </RootLayoutProvider>
      </body>
    </html>
  );
}

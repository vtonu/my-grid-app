import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Table Example',
  description: 'PTP FiveM Server Grid Table Example',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url('./background.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        {children}
      </body>
    </html>
  );
}

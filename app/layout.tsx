import type { Metadata } from "next";
import { Poppins, Freckle_Face } from "next/font/google";
import "./globals.css";

// Configure Poppins with all needed weights
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Configure Freckle Face
const freckleFace = Freckle_Face({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-freckle',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Your Portfolio | Anass Kalkhi",
  description: "Full Stack Developer Portfolio showcasing projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${freckleFace.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-poppins antialiased">
        {children}
      </body>
    </html>
  );
}

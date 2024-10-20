import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppHeader from "@/components/layout/appHeader";
import AppFooter from "@/components/layout/appFooter";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My-Ecurrency",
  description: "My ecurrency app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppHeader />
        <main>
          {children}
        </main>

        <AppFooter />
      </body>
    </html>
  );
}

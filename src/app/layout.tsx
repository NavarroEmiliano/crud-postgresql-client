import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="container">
          <SessionAuthProvider>
            <NavBar />
            {children}
          </SessionAuthProvider>
        </main>
      </body>
    </html>
  );
}

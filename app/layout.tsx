import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./common/navbar";
import Footer from "./common/footer";


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
  title: "Travel web application",
  description: "Enjoy your movement with travel-wix",
  icons: {icon: "/camp.svg"}
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
        <Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

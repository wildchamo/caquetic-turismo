import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yakú Map",
  description: "Caquetá en la era digital",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
      
        {children}

        <Footer />
      </body>
    </html>
  );
}

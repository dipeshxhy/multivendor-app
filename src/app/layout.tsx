import type { Metadata } from "next";
import {  Barlow } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import { ClerkProvider } from "@clerk/nextjs";

const barlowFont = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});



export const metadata: Metadata = {
  title: "ShopSphere: Your Marketplace",
  description: "Discover amazing products from various vendors at ShopSphere.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      
      <body className={` ${barlowFont.variable} antialiased`}>
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        >
        {children}
        
      </ThemeProvider>
        </body>
    </html>
    </ClerkProvider>
  );
}

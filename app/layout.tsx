import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/*
   layout.tsx
   ----------
   This is the root layout for the entire Next.js app.

   Purpose:
   - Loads the global CSS file.
   - Sets default page metadata for the portfolio.
   - Wraps every page in the same HTML/body structure.
   - Loads the main font used across the site.

   Note:
   The portfolio design plan mentioned Inter as the main fallback font.
   We are using the official Google font loader here so the site has a clean,
   professional default typeface without needing to manually add font files.
*/

/*
   Main portfolio font
   -------------------
   Inter is used for body text, navigation, buttons, labels, and project copy.
   Later, if you add Satoshi, we can use it for larger headings and keep Inter
   for the rest of the interface.
*/
const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
   display: "swap",
});

/*
   Metadata
   --------
   This controls the browser tab title, description, and browser tab icon.

   Important:
   Your favicon/logo file should be placed here:

   app/icon.png

   Next.js serves app/icon.png from:

   /icon.png
*/
export const metadata: Metadata = {
   title: "Isaiah Brown | Software Developer & UX-Focused Builder",
   description: "A one-page software and UX portfolio featuring responsive web projects, AI-assisted workspace design, and product-focused frontend development by Isaiah Brown.",
   icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/icon.png",
   },
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
         <body className="flex min-h-full flex-col antialiased">{children}</body>
      </html>
   );
}

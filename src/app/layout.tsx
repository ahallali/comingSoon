import type { Metadata } from "next";
import { Inter, Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

// Primary font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Heading font
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

// Accent font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Something amazing is in the works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

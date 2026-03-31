import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clear Point Window Cleaning | Pinellas & Pasco County, FL",
  description:
    "5-star rated window cleaning, gutter cleaning, pressure washing, paver sealing, and solar panel cleaning serving Pinellas and Pasco County, Florida. Same-day quotes. Call (980) 435-3637.",
  keywords:
    "window cleaning Clearwater, window cleaning Tampa, gutter cleaning Pinellas, pressure washing Pasco County, solar panel cleaning Florida",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}

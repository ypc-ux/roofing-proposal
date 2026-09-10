import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mr. Roofing & Contracting — Guaranteed Roofing Leads",
  description: "20 booked appointments in 30 days. Pre-qualified, pre-educated homeowners ready to buy. Pay only for results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

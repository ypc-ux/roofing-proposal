import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <style>{`
          body { margin: 0 !important; padding: 0 !important; width: 100% !important; display: flex !important; justify-content: center !important; }
          main { margin-left: auto !important; margin-right: auto !important; max-width: 72rem !important; width: 100% !important; padding: 0 1.5rem !important; display: block !important; float: none !important; text-align: center !important; }
          main section { text-align: center !important; }
          main section table { text-align: left !important; margin-left: auto !important; margin-right: auto !important; }
          main section .grid { text-align: left !important; }
        `}</style>
      </head>
      <body>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="relative z-10 w-full flex justify-center">{children}</div>
      </body>
    </html>
  );
}

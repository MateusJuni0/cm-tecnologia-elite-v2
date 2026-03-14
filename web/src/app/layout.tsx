import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMTecnologia | Automação e Marketing Digital",
  description: "Transformamos processos manuais em máquinas de crescimento autónomas. Automação n8n, marketing digital, geração de leads e desenvolvimento de produtos.",
  openGraph: {
    title: "CMTecnologia | Automação e Marketing Digital",
    description: "Da geração de leads ao marketing digital — a CMTecnologia transforma processos manuais em máquinas de crescimento autónomas.",
    url: "https://cmtecnologia.pt",
    siteName: "CMTecnologia",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CMTecnologia" }],
    locale: "pt_PT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMTecnologia | Automação e Marketing Digital",
    description: "Transformamos processos manuais em máquinas de crescimento autónomas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ background: "#0A0E1A", color: "#FFFFFF" }}>
        {children}
      </body>
    </html>
  );
}

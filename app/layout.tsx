import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galang Krisnanto — Software Engineer",
  description:
    "Software Engineer with 4+ years experience in Java, Spring Boot, and microservices architecture. Currently at PT Bank Sinarmas Indonesia.",
  openGraph: {
    title: "Galang Krisnanto — Software Engineer",
    description:
      "Software Engineer specializing in Java, Spring Boot, and microservices architecture.",
    type: "website",
    locale: "en_US",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://galangkrisnanto.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}

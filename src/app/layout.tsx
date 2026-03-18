import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Velada del Año VI",
  description:
    "Mini web informativa del evento de boxeo y streaming de Ibai Llanos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black relative min-h-screen`}
      >
        {/* Fondo animado */}

        <main className="w-full flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}

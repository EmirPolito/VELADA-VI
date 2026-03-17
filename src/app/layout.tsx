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
  description: "Mini web informativa del evento de boxeo y streaming de Ibai Llanos.",
};

import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black relative min-h-screen`}>
        {/* Fondo animado tipo "streaming" */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-black via-zinc-900 to-purple-900 animate-gradient-x" />
        {/* Barra de navegación superior */}
        <header className="w-full px-4 py-3 flex items-center justify-between bg-zinc-950/80 backdrop-blur-md shadow-lg sticky top-0 z-20">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-purple-400 drop-shadow">La Velada VI</Link>
          <nav className="flex gap-4 text-base font-semibold">
            <Link href="/combates" className="hover:text-purple-300 transition">Combates</Link>
            <Link href="/stream" className="hover:text-indigo-300 transition">Stream</Link>
            <Link href="/evento" className="hover:text-red-300 transition">Evento</Link>
          </nav>
        </header>
        <main className="w-full flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
        <footer className="w-full text-center py-4 text-zinc-400 text-xs bg-zinc-950/60 mt-8">
          © 2026 La Velada del Año VI — Mini web demo
        </footer>
      </body>
    </html>
  );
}

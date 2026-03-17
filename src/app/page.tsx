
"use client";
import HeroSection from "../components/HeroSection";
import CombatesSection, { Fighter, Fight } from "../components/CombatesSection";
import EventoInfoSection from "../components/EventoInfoSection";
import CountdownSection from "../components/CountdownSection";
import CTASection from "../components/CTASection";

// Datos de ejemplo (puedes reemplazar imágenes y nombres reales)
const fighters: Fighter[] = [
  {
    name: "Ibai Llanos",
    alias: "El Jefe",
    country: "España",
    image: "/peleadores/ibai.jpg",
  },
  {
    name: "Rivers",
    alias: "La Reina",
    country: "México",
    image: "/peleadores/rivers.jpg",
  },
  {
    name: "Coscu",
    alias: "El Rey",
    country: "Argentina",
    image: "/peleadores/coscu.jpg",
  },
  {
    name: "Germán Garmendia",
    alias: "El Fenómeno",
    country: "Chile",
    image: "/peleadores/german.jpg",
  },
];

const fights: Fight[] = [
  { blue: fighters[0], red: fighters[1] },
  { blue: fighters[2], red: fighters[3] },
];

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <HeroSection />
      <CombatesSection fights={fights} />
      <EventoInfoSection />
      <CountdownSection />
      <CTASection />
    </main>
  );
}

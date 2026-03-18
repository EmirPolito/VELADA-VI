"use client";

import Header from "@/components/header";
import HeroSection from "../components/HeroSection";
// import CombatesPage from "../components/conbates";


export default function Home() {
  const navLinks = [
          { label: "INICIO",   href: "/" },
          { label: "PELEAS",   href: "/peleas" },
          { label: "ENTRADAS", href: "/entradas" },
          { label: "NOTICIAS", href: "/noticias" },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Header logoText="" navLinks={navLinks} />
      <HeroSection />
         {/* <CombatesPage />; */}

    </main>
  );
}
"use client";

import Header from "@/components/header";
import HeroSection from "../components/HeroSection";
// import CombatesPage from "../components/conbates";


export default function Home() {
  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "COMBATES", href: "/combates" },
    { label: "STREAM", href: "/stream" },
    { label: "INFO", href: "/info" },
  ];

  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
      <Header logoText="" navLinks={navLinks} />
      <HeroSection />
         {/* <CombatesPage />; */}

    </main>
  );
}
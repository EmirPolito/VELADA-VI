"use client";
import Header from "@/components/header";
import CombatesPage from "@/components/conbates";

export default function Combates() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-black">
            <Header
              logoText=""
              navLinks={[
                { label: "INICIO",   href: "/" },
                { label: "COMBATES",   href: "/combates" },
                { label: "ENTRADAS", href: "/entradas" },
                { label: "NOTICIAS", href: "/noticias" },
              ]}
            />
      <CombatesPage />
    </main>
  );
}

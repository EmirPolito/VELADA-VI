"use client";

import Header from "@/components/header";
import CombatesPage from "@/components/ui/minimalist-hero";

export default function Page() {
  return (
    <>
      <Header
        logoText=""
        navLinks={[
          { label: "INICIO",   href: "/" },
          { label: "PELEAS",   href: "/peleas" },
          { label: "ENTRADAS", href: "/entradas" },
          { label: "NOTICIAS", href: "/noticias" },
        ]}
      />
      <CombatesPage />
    </>
  );
}
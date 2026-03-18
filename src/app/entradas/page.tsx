"use client";

import Header from "@/components/header";
import EntradasPage from "@/components/entradas";

export default function Entradas() {
  return (
    <>
      <Header
        logoText=""
        navLinks={[
          { label: "INICIO",   href: "/" },
          { label: "PELEAS",   href: "/combates" },
          { label: "ENTRADAS", href: "/entradas" },
          { label: "NOTICIAS", href: "/noticias" },
        ]}
      />
      <EntradasPage />
    </>
  );
}
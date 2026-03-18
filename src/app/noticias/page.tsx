"use client";

import Header from "@/components/header";
import NoticiasPage from "@/components/noticias";

export default function Noticias() {
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
      <NoticiasPage />
    </>
  );
}
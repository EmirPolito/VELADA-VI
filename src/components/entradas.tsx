"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";

// ─── Noise ────────────────────────────────────────────────────────────────────
const Noise = ({ opacity = 0.02 }: { opacity?: number }) => (
  <div
    className="pointer-events-none absolute inset-0 z-0"
    style={{
      opacity,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      backgroundRepeat: "repeat",
      backgroundSize: "128px 128px",
    }}
  />
);

// ─── Divider ──────────────────────────────────────────────────────────────────
const Divider = ({ label }: { label: string }) => (
  <div className="flex items-center gap-6 mb-14">
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-yellow-400/50" />
    <span
      className="text-yellow-400 text-[10px] tracking-[0.5em] uppercase font-black whitespace-nowrap"
      style={{ fontFamily: "'Arial Black', sans-serif" }}
    >
      {label}
    </span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-400/30 to-yellow-400/50" />
  </div>
);

// ─── DATA (REAL / NO INVENTADA) ───────────────────────────────────────────────
const EVENT = {
  date: "Por confirmar",
  venue: "Por confirmar",
  city: "Por confirmar",
  doors: "Por confirmar",
  start: "Por confirmar",
  ticketUrl: "https://www.ticketmaster.es",
};

const TIERS = [
  {
    label: "GENERAL",
    price: "Por confirmar",
    highlight: false,
    tag: null,
    perks: [
      "Acceso zona general",
      "Pantallas gigantes",
      "Zona de food trucks",
      "Acceso estándar",
    ],
  },
  {
    label: "VIP",
    price: "Por confirmar",
    highlight: true,
    tag: "SUJETO A DISPONIBILIDAD",
    perks: [
      "Zona preferente",
      "Asiento numerado",
      "Acceso anticipado",
      "Servicios exclusivos",
    ],
  },
  {
    label: "PLATINUM",
    price: "Por confirmar",
    highlight: false,
    tag: "LIMITADO",
    perks: [
      "Zona cercana al ring",
      "Experiencia premium",
      "Beneficios exclusivos",
      "Acceso especial",
    ],
  },
];

const FAQS = [
  {
    q: "¿Dónde puedo comprar las entradas?",
    a: "Las entradas estarán disponibles únicamente en la plataforma oficial cuando se anuncien.",
  },
  {
    q: "¿Cuándo salen a la venta?",
    a: "La fecha de venta aún no ha sido confirmada oficialmente.",
  },
  {
    q: "¿A qué hora abren las puertas?",
    a: "El horario de apertura será anunciado próximamente.",
  },
  {
    q: "¿Está permitido llevar cámara?",
    a: "La normativa se confirmará antes del evento.",
  },
  {
    q: "¿Habrá aparcamiento disponible?",
    a: "La información del recinto será anunciada junto con la sede oficial.",
  },
];

// ─── Tier Card ────────────────────────────────────────────────────────────────
const TierCard = ({ tier, index }: { tier: typeof TIERS[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative flex flex-col"
      style={{ transform: tier.highlight ? "scale(1.04)" : "scale(1)" }}
    >
      {tier.tag && (
        <div className="absolute -top-4 left-0 right-0 z-10 flex justify-center">
          <span
            className="bg-yellow-400 px-4 py-1 text-[10px] font-black tracking-[0.35em] text-black uppercase"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            {tier.tag}
          </span>
        </div>
      )}

      <div
        className="relative flex flex-col overflow-hidden h-full"
        style={{
          border: tier.highlight
            ? "1px solid rgba(234,179,8,0.7)"
            : "1px solid rgba(255,255,255,0.07)",
          background: tier.highlight
            ? "linear-gradient(160deg, rgba(234,179,8,0.06) 0%, rgba(0,0,0,0) 60%)"
            : "rgba(255,255,255,0.02)",
        }}
      >
        <Noise opacity={0.025} />

        {/* Header */}
        <div className="relative z-10 border-b px-8 pt-10 pb-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[9px] tracking-[0.5em] text-white/35 uppercase font-black mb-1">
                ENTRADA
              </p>
              <h3 className="text-3xl font-black text-white leading-none tracking-tight">
                {tier.label}
              </h3>
            </div>
            <div className="text-right">
              <p className="text-4xl font-black leading-none text-yellow-400">
                {tier.price}
              </p>
              <p className="text-white/25 text-[10px] tracking-widest uppercase mt-1">
                sujeto a confirmación
              </p>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className="relative z-10 flex flex-col gap-3 px-8 py-7 flex-1">
          {tier.perks.map((perk, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="h-1 w-1 rotate-45 bg-white/25" />
              <span className="text-white/65 text-sm tracking-wide">{perk}</span>
            </div>
          ))}
        </div>

        <div className="relative z-10 px-8 pb-8 pt-2">
          <p className="text-center text-white/20 text-[10px] tracking-[0.3em] uppercase">
            información no confirmada
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full justify-between py-5 text-left"
      >
        <span className="text-white/75">{q}</span>
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="text-white/40 pb-5">{a}</p>}
    </motion.div>
  );
};

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function EntradasPage() {
  return (
    <div className="min-h-screen bg-black">

      {/* HERO */}
      <section className="pt-28 pb-16 text-center">
        <p className="text-yellow-400 text-xs tracking-widest uppercase mb-3">
          Información en actualización
        </p>
        <h1 className="text-6xl font-black text-white">ENTRADAS</h1>
      </section>

      {/* EVENT */}
      <section className="max-w-6xl mx-auto px-6 mb-20 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
        {Object.entries(EVENT).slice(0,5).map(([key, value]) => (
          <div key={key}>
            <p className="text-yellow-400 text-xs uppercase">{key}</p>
            <p className="text-white/70">{value}</p>
          </div>
        ))}
      </section>

      {/* AVISO */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="border border-yellow-400/20 p-6 text-center">
          <p className="text-white/60">
            Esta página es solo informativa. Las entradas oficiales se anunciarán
            próximamente y estarán disponibles únicamente en la plataforma oficial.
          </p>

          <a
            href={EVENT.ticketUrl}
            target="_blank"
            className="inline-flex mt-4 bg-yellow-400 text-black px-6 py-3 text-xs font-black tracking-widest"
          >
            IR A TICKETMASTER
            <ExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      {/* TIERS */}
      <section className="max-w-6xl mx-auto px-6 mb-28">
        <Divider label="CATEGORÍAS DE ENTRADA" />
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((tier, i) => (
            <TierCard key={i} tier={tier} index={i} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 mb-32">
        <Divider label="PREGUNTAS FRECUENTES" />
        {FAQS.map((faq, i) => (
          <FaqItem key={i} {...faq} index={i} />
        ))}
      </section>
    </div>
  );
}
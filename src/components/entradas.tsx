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

// ─── Data ─────────────────────────────────────────────────────────────────────
const EVENT = {
  date: "12 · JUL · 2026",
  venue: "Estadio Metropolitano",
  city: "Madrid, España",
  doors: "17:00h",
  start: "20:00h",
  ticketUrl: "https://www.ticketmaster.es",
};

const TIERS = [
  {
    label: "GENERAL",
    price: "€49",
    highlight: false,
    tag: null,
    perks: [
      "Acceso zona general",
      "Pantallas gigantes",
      "Zona de food trucks",
      "Acceso 2h antes",
    ],
  },
  {
    label: "VIP",
    price: "€129",
    highlight: true,
    tag: "MÁS POPULAR",
    perks: [
      "Zona VIP preferente",
      "Asiento numerado",
      "Kit de bienvenida exclusivo",
      "Acceso 3h antes",
      "Barra libre 2h",
    ],
  },
  {
    label: "PLATINUM",
    price: "€299",
    highlight: false,
    tag: "PLAZAS LIMITADAS",
    perks: [
      "Ring side — Fila 1",
      "Meet & greet con luchadores",
      "Fotografía oficial firmada",
      "Cena privada pre-evento",
      "Acceso backstage",
      "Merchandising exclusivo",
    ],
  },
];

const FAQS = [
  {
    q: "¿Dónde puedo comprar las entradas?",
    a: "Las entradas están disponibles exclusivamente en la web oficial de Ticketmaster. Esta página es solo informativa.",
  },
  {
    q: "¿Puedo cambiar o devolver mi entrada?",
    a: "Consulta la política de devoluciones directamente con la ticketera oficial donde realizaste la compra.",
  },
  {
    q: "¿A qué hora abren las puertas?",
    a: "Las puertas abren a las 17:00h. Los accesos VIP y Platinum tienen entrada preferente desde las 16:00h.",
  },
  {
    q: "¿Está permitido llevar cámara?",
    a: "Se permiten cámaras de uso personal. No se admiten cámaras profesionales ni con objetivo intercambiable.",
  },
  {
    q: "¿Hay aparcamiento disponible?",
    a: "El Estadio Metropolitano dispone de aparcamiento propio. Se recomienda el uso de transporte público (Metro L7, estación Estadio).",
  },
];

// ─── Tier Card (solo informativa) ─────────────────────────────────────────────
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
      {/* Tag */}
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
              <p
                className="text-[9px] tracking-[0.5em] text-white/35 uppercase font-black mb-1"
                style={{ fontFamily: "'Arial Black', sans-serif" }}
              >
                ENTRADA
              </p>
              <h3
                className="text-3xl font-black text-white leading-none tracking-tight"
                style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
              >
                {tier.label}
              </h3>
            </div>
            <div className="text-right">
              <p
                className="text-4xl font-black leading-none"
                style={{
                  fontFamily: "'Arial Black', Impact, sans-serif",
                  color: tier.highlight ? "#FACC15" : "white",
                }}
              >
                {tier.price}
              </p>
              <p className="text-white/25 text-[10px] tracking-widest uppercase mt-1">por persona</p>
            </div>
          </div>
        </div>

        {/* Perks */}
        <div className="relative z-10 flex flex-col gap-3 px-8 py-7 flex-1">
          {tier.perks.map((perk, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="h-1 w-1 rotate-45 flex-shrink-0"
                style={{ background: tier.highlight ? "#FACC15" : "rgba(255,255,255,0.25)" }}
              />
              <span className="text-white/65 text-sm tracking-wide">{perk}</span>
            </div>
          ))}
        </div>

        {/* Precio disponible en — NO es botón de compra */}
        <div className="relative z-10 px-8 pb-8 pt-2">
          <p className="text-center text-white/20 text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: "'Arial Black', sans-serif" }}>
            * Precio orientativo
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// ─── FAQ Item ─────────────────────────────────────────────────────────────────
const FaqItem = ({ q, a, index }: { q: string; a: string; index: number }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border-b"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-white/75 text-sm tracking-wide">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex-shrink-0 h-4 w-4 flex items-center justify-center"
        >
          <div className="h-3 w-3 rotate-45 border" style={{ borderColor: "rgba(234,179,8,0.5)" }} />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.28 }}
        className="overflow-hidden"
      >
        <p className="text-white/38 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </motion.div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EntradasPage() {
  return (
    <div className="min-h-screen bg-black">

      {/* ── Hero ── */}
      <section className="relative flex min-h-[52vh] w-full flex-col items-center justify-center overflow-hidden bg-black pt-28 pb-16">
        <Noise opacity={0.03} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-[500px] w-[500px] rounded-full bg-yellow-400/4 blur-[130px]" />
        </div>
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent origin-left"
        />
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="absolute bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/15 to-transparent origin-right"
        />

        <div className="relative z-10 flex flex-col items-center text-center gap-5 px-8">
          <motion.div
            initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-10 bg-yellow-400/60" />
            <span className="text-yellow-400 text-[10px] tracking-[0.6em] uppercase font-black" style={{ fontFamily: "'Arial Black', sans-serif" }}>
              La Velada del Año · 2026
            </span>
            <div className="h-px w-10 bg-yellow-400/60" />
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="text-[clamp(3rem,10vw,8rem)] font-black text-white leading-none tracking-tighter"
              style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
            >
              ENTRADAS
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/30 text-[11px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            Información de precios y categorías
          </motion.p>
        </div>

        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 0.025 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-0 right-8 text-[18vw] font-black text-white leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          2026
        </motion.span>
      </section>

      {/* ── Info del evento ── */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden"
          style={{ border: "1px solid rgba(234,179,8,0.15)" }}
        >
          <Noise opacity={0.02} />
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-5 divide-x" style={{ borderColor: "rgba(234,179,8,0.1)" }}>
            {[
              { label: "FECHA",   value: EVENT.date },
              { label: "RECINTO", value: EVENT.venue },
              { label: "CIUDAD",  value: EVENT.city },
              { label: "PUERTAS", value: EVENT.doors },
              { label: "INICIO",  value: EVENT.start },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-1 px-6 py-5" style={{ borderColor: "rgba(234,179,8,0.1)" }}>
                <p className="text-[9px] tracking-[0.5em] text-yellow-400/55 uppercase font-black" style={{ fontFamily: "'Arial Black', sans-serif" }}>{item.label}</p>
                <p className="text-white text-sm font-bold tracking-wide text-center">{item.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Aviso informativo ── */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ border: "1px solid rgba(234,179,8,0.2)", background: "rgba(234,179,8,0.03)" }}
        >
          <Noise opacity={0.02} />
          <div className="relative z-10 flex items-center gap-4">
            <div className="h-2 w-2 rotate-45 bg-yellow-400 flex-shrink-0" />
            <p className="text-white/50 text-sm tracking-wide">
              Esta página es <span className="text-white/80">solo informativa</span>. Las entradas se adquieren exclusivamente en la <span className="text-yellow-400">plataforma oficial</span>.
            </p>
          </div>
          <a
            href={EVENT.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 flex-shrink-0 flex items-center gap-2 px-6 py-3 text-[10px] font-black tracking-[0.3em] uppercase text-black bg-yellow-400 hover:bg-yellow-300 transition-colors"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            IR A TICKETMASTER
            <ExternalLink className="h-3 w-3" />
          </a>
        </motion.div>
      </section>

      {/* ── Tiers ── */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-28">
        <Divider label="CATEGORÍAS DE ENTRADA" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {TIERS.map((tier, i) => (
            <TierCard key={tier.label} tier={tier} index={i} />
          ))}
        </div>
        <p className="text-center text-white/20 text-[10px] tracking-[0.35em] uppercase mt-8" style={{ fontFamily: "'Arial Black', sans-serif" }}>
          * Los precios mostrados son orientativos y pueden variar. Consulta el precio final en la ticketera oficial.
        </p>
      </section>

      {/* ── FAQ ── */}
      <section className="w-full max-w-3xl mx-auto px-6 mb-32">
        <Divider label="PREGUNTAS FRECUENTES" />
        <div className="flex flex-col">
          {FAQS.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </section>

      {/* ── Footer decorativo ── */}
      <div className="w-full flex items-center justify-between px-10 pb-8 opacity-25">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400 text-xs font-black tracking-widest uppercase" style={{ fontFamily: "'Arial Black', sans-serif" }}>N</span>
          <div className="h-px w-16 bg-yellow-400/30" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-px w-16 bg-yellow-400/30" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L16 8L8 16L0 8Z" fill="#FACC15" />
          </svg>
        </div>
      </div>

    </div>
  );
}
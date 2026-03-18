"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Calendar, Clock, Tv, Radio } from "lucide-react";

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
const NOTICIAS = [
  {
    id: "01",
    categoria: "CONFIRMACIÓN OFICIAL",
    titulo: "TheGrefg vs IlloJuan: la pelea más esperada es oficial",
    resumen:
      "Ibai Llanos confirma el primer combate estelar de La Velada del Año V. Los dos streamers se enfrentarán tras meses de retos y provocaciones en redes sociales.",
    fecha: "03 Mar 2026",
    lectura: "2 min",
    destacada: true,
  },
  {
    id: "02",
    categoria: "EVENTO",
    titulo: "El Estadio Metropolitano acogerá La Velada V el 12 de julio",
    resumen:
      "El recinto madrileño con capacidad para 68.000 espectadores será el escenario del evento más grande de la historia del streaming español.",
    fecha: "28 Feb 2026",
    lectura: "3 min",
    destacada: false,
  },
  {
    id: "03",
    categoria: "COMBATES",
    titulo: "YoSoyPlex vs Fernanfloo: dos generaciones frente a frente",
    resumen:
      "El veterano Fernanfloo acepta el reto del joven Plex en lo que promete ser uno de los combates más emocionantes de la noche.",
    fecha: "15 Feb 2026",
    lectura: "2 min",
    destacada: false,
  },
  {
    id: "04",
    categoria: "PREPARACIÓN",
    titulo: "Los luchadores ya están en el gimnasio: así entrenan",
    resumen:
      "Las primeras imágenes del entrenamiento de los participantes revelan un nivel de preparación inédito. Varios cuentan con entrenadores profesionales de boxeo.",
    fecha: "10 Feb 2026",
    lectura: "4 min",
    destacada: false,
  },
  {
    id: "05",
    categoria: "MÚSICA",
    titulo: "La Velada V contará con actuaciones musicales sorpresa",
    resumen:
      "Como en ediciones anteriores, habrá artistas invitados entre combate y combate. Los nombres se revelarán progresivamente en las próximas semanas.",
    fecha: "05 Feb 2026",
    lectura: "2 min",
    destacada: false,
  },
];

const DONDE_VER = [
  {
    plataforma: "Twitch",
    canal: "twitch.tv/ibai",
    descripcion: "Retransmisión principal en directo, gratuita y sin suscripción.",
    gratuito: true,
    href: "https://www.twitch.tv/ibai",
    icon: Tv,
  },
  {
    plataforma: "YouTube",
    canal: "youtube.com/@ibai",
    descripcion: "Retransmisión simultánea en YouTube para quienes prefieran esa plataforma.",
    gratuito: true,
    href: "https://www.youtube.com/@ibai",
    icon: Tv,
  },
  {
    plataforma: "Movistar+",
    canal: "Canal #Vamos",
    descripcion: "Emisión en televisión convencional para suscriptores de Movistar+.",
    gratuito: false,
    href: "https://www.movistarplus.es",
    icon: Radio,
  },
];

const TIMELINE = [
  { hora: "17:00h", evento: "Apertura de puertas al recinto" },
  { hora: "18:00h", evento: "Inicio de retransmisión online" },
  { hora: "19:00h", evento: "Actuaciones musicales de apertura" },
  { hora: "20:00h", evento: "Ceremonia de presentación de luchadores" },
  { hora: "20:30h", evento: "Primer combate de la noche" },
  { hora: "~23:30h", evento: "Combate estelar — pelea principal" },
];

// ─── Noticia destacada ────────────────────────────────────────────────────────
const NoticiaDestacada = ({ noticia }: { noticia: typeof NOTICIAS[0] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden col-span-full"
      style={{ border: "1px solid rgba(234,179,8,0.4)", background: "linear-gradient(135deg, rgba(234,179,8,0.05) 0%, rgba(0,0,0,0) 50%)" }}
    >
      <Noise opacity={0.025} />
      {/* Número decorativo */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 text-[8rem] font-black text-yellow-400/5 leading-none select-none pointer-events-none"
        style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
      >
        {noticia.id}
      </span>

      <div className="relative z-10 p-10 md:p-14 flex flex-col gap-5 max-w-3xl">
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-1.5 rotate-45 bg-yellow-400" />
          <span
            className="text-yellow-400 text-[10px] tracking-[0.45em] uppercase font-black"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            {noticia.categoria}
          </span>
        </div>
        <h2
          className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight"
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          {noticia.titulo}
        </h2>
        <p className="text-white/50 text-base leading-relaxed">{noticia.resumen}</p>
        <div className="flex items-center gap-5 text-white/25 text-xs tracking-widest uppercase">
          <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{noticia.fecha}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{noticia.lectura} lectura</span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Noticia card ─────────────────────────────────────────────────────────────
const NoticiaCard = ({ noticia, index }: { noticia: typeof NOTICIAS[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="relative overflow-hidden flex flex-col gap-4 p-8 transition-all duration-300 group"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
    >
      <Noise opacity={0.02} />
      {/* Número */}
      <span
        className="absolute right-6 bottom-4 text-[4rem] font-black text-white/4 leading-none select-none pointer-events-none group-hover:text-yellow-400/8 transition-colors duration-500"
        style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
      >
        {noticia.id}
      </span>

      <div className="relative z-10 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rotate-45 bg-yellow-400/60" />
          <span
            className="text-yellow-400/70 text-[9px] tracking-[0.45em] uppercase font-black"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            {noticia.categoria}
          </span>
        </div>
        <h3
          className="text-lg font-black text-white leading-snug tracking-tight"
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          {noticia.titulo}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">{noticia.resumen}</p>
        <div className="flex items-center gap-4 text-white/20 text-[10px] tracking-widest uppercase pt-1">
          <span className="flex items-center gap-1.5"><Calendar className="h-3 w-3" />{noticia.fecha}</span>
          <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" />{noticia.lectura}</span>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Donde Ver Card ───────────────────────────────────────────────────────────
const DondeVerCard = ({ item, index }: { item: typeof DONDE_VER[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="relative overflow-hidden flex flex-col gap-5 p-8"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
    >
      <Noise opacity={0.02} />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="h-4 w-4 text-yellow-400/70" />
            <span
              className="text-white font-black text-xl tracking-tight"
              style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
            >
              {item.plataforma}
            </span>
          </div>
          <span className="text-white/30 text-xs tracking-widest">{item.canal}</span>
        </div>
        <span
          className="flex-shrink-0 px-3 py-1 text-[9px] font-black tracking-[0.3em] uppercase"
          style={{
            fontFamily: "'Arial Black', sans-serif",
            background: item.gratuito ? "rgba(234,179,8,0.15)" : "rgba(255,255,255,0.05)",
            border: item.gratuito ? "1px solid rgba(234,179,8,0.4)" : "1px solid rgba(255,255,255,0.1)",
            color: item.gratuito ? "#FACC15" : "rgba(255,255,255,0.4)",
          }}
        >
          {item.gratuito ? "GRATIS" : "DE PAGO"}
        </span>
      </div>
      <p className="relative z-10 text-white/45 text-sm leading-relaxed">{item.descripcion}</p>
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-yellow-400/70 hover:text-yellow-400 transition-colors"
        style={{ fontFamily: "'Arial Black', sans-serif" }}
      >
        VER PLATAFORMA <ExternalLink className="h-3 w-3" />
      </a>
    </motion.div>
  );
};

// ─── Timeline ─────────────────────────────────────────────────────────────────
const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden p-10 md:p-14"
      style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)" }}
    >
      <Noise opacity={0.02} />
      <div className="relative z-10 flex flex-col gap-0">
        {TIMELINE.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="flex items-start gap-8 group"
          >
            {/* Línea vertical */}
            <div className="flex flex-col items-center">
              <div className="h-2.5 w-2.5 rotate-45 bg-yellow-400 flex-shrink-0 mt-1 group-first:bg-yellow-400 group-last:bg-yellow-400/40" />
              {i < TIMELINE.length - 1 && (
                <div className="w-px flex-1 min-h-[32px] bg-yellow-400/15 my-1" />
              )}
            </div>
            {/* Contenido */}
            <div className="flex items-baseline gap-6 pb-6">
              <span
                className="text-yellow-400 font-black text-sm tracking-widest flex-shrink-0 w-20"
                style={{ fontFamily: "'Arial Black', sans-serif" }}
              >
                {item.hora}
              </span>
              <span className="text-white/60 text-sm tracking-wide">{item.evento}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function NoticiasPage() {
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
              NOTICIAS
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/30 text-[11px] tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Arial Black', sans-serif" }}
          >
            Toda la información del evento
          </motion.p>
        </div>

        <motion.span
          initial={{ opacity: 0 }} animate={{ opacity: 0.025 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="absolute bottom-0 right-8 text-[18vw] font-black text-white leading-none select-none pointer-events-none"
          style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}
        >
          V
        </motion.span>
      </section>

      {/* ── Noticias ── */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-28">
        <Divider label="ÚLTIMAS NOTICIAS" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Destacada ocupa las dos columnas */}
          <NoticiaDestacada noticia={NOTICIAS[0]} />
          {/* Resto en grid 2 columnas */}
          {NOTICIAS.slice(1).map((n, i) => (
            <NoticiaCard key={n.id} noticia={n} index={i} />
          ))}
        </div>
      </section>

      {/* ── Dónde ver ── */}
      <section className="w-full max-w-6xl mx-auto px-6 mb-28">
        <Divider label="DÓNDE VER EL EVENTO" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {DONDE_VER.map((item, i) => (
            <DondeVerCard key={item.plataforma} item={item} index={i} />
          ))}
        </div>
      </section>

      {/* ── Horario del evento ── */}
      <section className="w-full max-w-3xl mx-auto px-6 mb-32">
        <Divider label="HORARIO DE LA NOCHE" />
        <TimelineSection />
        <p className="text-center text-white/15 text-[10px] tracking-[0.3em] uppercase mt-6" style={{ fontFamily: "'Arial Black', sans-serif" }}>
          * Los horarios son aproximados y pueden variar
        </p>
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
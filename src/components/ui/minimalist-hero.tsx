import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Instagram, Twitter, Youtube, Twitch } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FighterConfig {
  // Círculo
  circleSize: string;       // e.g. "h-[400px] w-[400px]"
  // Imagen
  imgSize: string;          // e.g. "w-72"
  imgScale?: string;        // e.g. "scale-[1.15]" — escala sutil para ajustar encuadre
  imgObjectPosition?: string; // e.g. "object-top" | "object-center"
  imgTranslateY?: number;   // desplazamiento Y final de animación (px), negativo = sube
}

interface FighterProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
  socialLinks: { icon: LucideIcon; href: string }[];
  side: "left" | "right";
  config: FighterConfig;
}

interface FightSectionProps {
  readMoreLink: string;
  fighter1: Omit<FighterProps, "side">;
  fighter2: Omit<FighterProps, "side">;
  fightNumber?: number;
}

// ─── Social Icon ──────────────────────────────────────────────────────────────
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-white/50 transition-all hover:text-yellow-400">
    <Icon className="h-4 w-4" />
  </a>
);

// ─── Fighter (layout natural: círculo encima, label debajo) ───────────────────
const Fighter = ({ name, imageSrc, imageAlt, socialLinks, side, config }: FighterProps) => (
  <div className="flex flex-col items-center gap-4">

    {/* Círculo + imagen */}
    <div className="relative flex items-end justify-center overflow-hidden rounded-full bg-yellow-400"
      style={{ width: "clamp(220px,28vw,380px)", height: "clamp(220px,28vw,380px)" }}
    >
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        className={cn(
          "relative z-10 h-full w-full object-cover mix-blend-multiply",
          config.imgScale ?? "",
          config.imgObjectPosition ?? "object-top",
        )}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: config.imgTranslateY ?? 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        onError={(e) => {
          const t = e.target as HTMLImageElement;
          t.onerror = null;
          t.src = `https://placehold.co/400x600/eab308/ffffff?text=${encodeURIComponent(name)}`;
        }}
      />
    </div>

    {/* Nombre + iconos — siempre debajo del círculo */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="flex flex-col items-center gap-2"
    >
      <span className="text-white font-bold text-sm tracking-wide">{name}</span>
      <div className="flex items-center gap-5">
        {socialLinks.map((link, i) => (
          <SocialIcon key={i} href={link.href} icon={link.icon} />
        ))}
      </div>
    </motion.div>

  </div>
);

// ─── Fight Section ────────────────────────────────────────────────────────────
const FightSection = ({ readMoreLink, fighter1, fighter2, fightNumber = 1 }: FightSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-h-screen w-full flex-col overflow-hidden bg-black py-10"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <div className="relative z-20 flex w-full items-center justify-between px-10 pt-10">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-yellow-400/60" />
        <div className="flex flex-col items-center px-8 gap-0.5">
          <span className="text-yellow-400 text-[11px] tracking-[0.5em] uppercase font-black leading-none" style={{ fontFamily: "'Arial Black', sans-serif" }}>PELEA</span>
          <span className="text-white text-[11px] tracking-[0.5em] uppercase font-black leading-none" style={{ fontFamily: "'Arial Black', sans-serif" }}>N° {String(fightNumber).padStart(2, "0")}</span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-yellow-400/40 to-yellow-400/60" />
      </div>

      <div className="relative grid w-full max-w-7xl mx-auto flex-1 grid-cols-3 items-center justify-items-center px-8 py-16">
        <Fighter {...fighter1} side="left" />

        <div className="z-20 flex flex-col items-center text-center gap-4">
          <div className="relative">
            <span className="absolute inset-0 text-[8rem] font-black text-yellow-400/10 leading-none tracking-tighter blur-sm select-none" style={{ fontFamily: "'Arial Black', Impact, sans-serif" }} aria-hidden>VS</span>
            <h2 className="relative text-[8rem] font-black text-white leading-none tracking-tighter" style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}>VS</h2>
          </div>
          <div className="flex items-center gap-2 -mt-4">
            <div className="h-px w-8 bg-yellow-400/50" />
            <div className="h-1.5 w-1.5 rotate-45 bg-yellow-400" />
            <div className="h-px w-8 bg-yellow-400/50" />
          </div>
          <a href={readMoreLink} className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-8 py-3 text-[11px] font-black tracking-[0.25em] text-black uppercase transition-all hover:bg-yellow-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(234,179,8,0.4)]" style={{ fontFamily: "'Arial Black', sans-serif" }}>
            Pelea Estelar
          </a>
        </div>

        <Fighter {...fighter2} side="right" />
      </div>

      <div className="relative z-20 flex w-full items-center justify-between px-10 pb-6">
        <div className="flex items-center gap-3">
          <span className="text-yellow-400/60 text-xs font-black tracking-widest uppercase" style={{ fontFamily: "'Arial Black', sans-serif" }}>N</span>
          <div className="h-px w-16 bg-yellow-400/20" />
        </div>
        <div className="flex items-center gap-3">
          <div className="h-px w-16 bg-yellow-400/20" />
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
            <path d="M8 0L16 8L8 16L0 8Z" fill="#FACC15" />
          </svg>
        </div>
      </div>
    </motion.section>
  );
};

// ─── Hero Title Section ───────────────────────────────────────────────────────
const HeroTitle = () => (
  <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
    <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundRepeat: "repeat", backgroundSize: "128px 128px" }} />
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <div className="h-[500px] w-[500px] rounded-full bg-yellow-400/5 blur-[120px]" />
    </div>
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.3 }} className="absolute top-1/3 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent origin-left" />
    <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }} className="absolute bottom-1/3 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent origin-right" />
    <div className="relative z-10 flex flex-col items-center text-center gap-6 px-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex items-center gap-3">
        <div className="h-px w-12 bg-yellow-400/60" />
        <span className="text-yellow-400 text-[10px] tracking-[0.6em] uppercase font-black" style={{ fontFamily: "'Arial Black', sans-serif" }}>La Velada del Año</span>
        <div className="h-px w-12 bg-yellow-400/60" />
      </motion.div>
      <div className="overflow-hidden">
        <motion.h1 initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }} className="text-[clamp(3rem,12vw,10rem)] font-black text-white leading-none tracking-tighter" style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}>PELEAS</motion.h1>
      </div>
      <div className="overflow-hidden -mt-4">
        <motion.h2 initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }} className="text-[clamp(3rem,12vw,10rem)] font-black text-yellow-400 leading-none tracking-tighter" style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}>ESTELARES</motion.h2>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 1.4 }} className="flex flex-col items-center gap-2 mt-8">
        <span className="text-white/60 text-[30px] tracking-[0.5em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} className="w-px h-10 bg-gradient-to-b from-yellow-400/60 to-transparent" />
      </motion.div>
    </div>
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.03 }} transition={{ duration: 1.5, delay: 0.8 }} className="absolute bottom-10 right-10 text-[20vw] font-black text-white leading-none select-none pointer-events-none" style={{ fontFamily: "'Arial Black', Impact, sans-serif" }}>2026</motion.span>
  </section>
);

// ─── Página completa ──────────────────────────────────────────────────────────
const CombatesPage = () => (
  <div className="bg-black">
    <HeroTitle />

    {/* ── Pelea 1: TheGrefg vs IlloJuan ── */}
    <FightSection
      fightNumber={1}
      readMoreLink="#"
      fighter1={{
        name: "TheGrefg",
        imageSrc: "/img/combates/1/the-greft.png",
        imageAlt: "TheGrefg portrait",
        socialLinks: [
          { icon: Instagram, href: "https://www.instagram.com/thegrefg/" },
          { icon: Twitch,    href: "https://www.twitch.tv/thegrefg" },
          { icon: Youtube,   href: "https://www.youtube.com/user/TheGrefg" },
        ],
        config: {
          circleSize:        "h-[380px] w-[380px]",
          imgSize:           "w-full",
          imgObjectPosition: "object-center",
          imgTranslateY:     20,
        },
      }}
      fighter2={{
        name: "IlloJuan",
        imageSrc: "/img/combates/1/2juan.png",
        imageAlt: "IlloJuan portrait",
        socialLinks: [
          { icon: Instagram, href: "https://www.instagram.com/illojuan/" },
          { icon: Twitter,   href: "https://x.com/illojuan" },
          { icon: Youtube,   href: "https://www.youtube.com/channel/UCKvoBRFqMNqvuSvFBiNadgw" },
        ],
        config: {
          circleSize:        "h-[380px] w-[380px]",
          imgSize:           "w-full",
          imgObjectPosition: "object-center",
          imgTranslateY:     20,
        },
      }}
    />

    {/* ── Pelea 2: YoSoyPlex vs Fernanfloo ── */}
    <FightSection
      fightNumber={2}
      readMoreLink="#"
      fighter1={{
        name: "YoSoyPlex",
        imageSrc: "/img/combates/2/yosoyplex.png",
        imageAlt: "YoSoyPlex portrait",
        socialLinks: [
          { icon: Instagram, href: "https://www.instagram.com/yosoyplex/" },
          { icon: Twitch,    href: "https://x.com/yosoyplex" },
          { icon: Youtube,   href: "https://www.youtube.com/@YoSoyPlex" },
        ],
        config: {
          circleSize:        "h-[380px] w-[380px]",
          imgSize:           "w-full",
          imgObjectPosition: "object-top",
          imgTranslateY:     30,
        },
      }}
      fighter2={{
        name: "Fernanfloo",
        imageSrc: "/img/combates/2/fernanfloo.png",
        imageAlt: "Fernanfloo portrait",
        socialLinks: [
          { icon: Instagram, href: "https://www.instagram.com/fernanfloo/" },
          { icon: Twitter,   href: "https://x.com/Fernanfloo" },
          { icon: Youtube,   href: "https://www.youtube.com/channel/UCV4xOVpbcV8SdueDCOxLXtQ" },
        ],
        config: {
          circleSize:        "h-[380px] w-[380px]",
          imgSize:           "w-full",
          imgObjectPosition: "object-center",
          imgTranslateY:     20,
        },
      }}
    />
  </div>
);

export default CombatesPage;
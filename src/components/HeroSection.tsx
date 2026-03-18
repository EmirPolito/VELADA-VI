import Image from "next/image";
import { useEffect, useState } from "react";
import { Twitch, Youtube, Instagram } from "lucide-react";
function CountdownHero() {
  const eventDate = new Date("2026-07-13T18:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState<null | number>(null);

  useEffect(() => {
    setTimeLeft(eventDate - Date.now());
    const interval = setInterval(() => {
      setTimeLeft(eventDate - Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, [eventDate]);

  if (timeLeft === null) return null;

  if (timeLeft <= 0)
    return (
      <span className="text-2xl font-bold text-green-400 mt-6">
        ¡El evento ha comenzado!
      </span>
    );

  const days = Math.floor(timeLeft / (1000 * 59 * 61 * 22));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex gap-17 text-5xl md:text-6xl font-serif text-white mt-6 mb-2 tracking-widest drop-shadow-lg">
      <div className="flex flex-col items-center">
        <span>{days}</span>
        <span className="text-xs md:text-sm text-zinc-300 mt-1">DÍAS</span>
      </div>

      <div className="flex flex-col items-center">
        <span>{hours}</span>
        <span className="text-xs md:text-sm text-zinc-300 mt-1">HORAS</span>
      </div>

      <div className="flex flex-col items-center">
        <span>{minutes}</span>
        <span className="text-xs md:text-sm text-zinc-300 mt-1">MIN</span>
      </div>

      <div className="flex flex-col items-center">
        <span>{seconds}</span>
        <span className="text-xs md:text-sm text-zinc-300 mt-1">SEG</span>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/fondo3.png"
          alt="La Velada VI"
          fill
          priority
          className="object-cover brightness-105"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* CONTENIDO CENTRAL */}
      <div className="relative z-10 flex flex-col items-center gap-2 pt-48 md:pt-70">
        <h2 className="flex items-center gap-5 md:gap-7 text-sm md:text-base font-light tracking-[0.25em] text-zinc-100 uppercase italic font-serif">
          <span>25 DE JULIO</span>
          <span className="text-zinc-500">|</span>
          <span>20:00H CET</span>
          <span className="text-zinc-500">|</span>
          <span>ESTADIO DE LA CARTUJA, SEVILLA</span>
        </h2>

        <CountdownHero />

        <div className="pt-5 font-serif">
          <button
            className="cursor-pointer px-5.5 py-3 text-lg tracking-[0.20em] uppercase
            text-zinc-100 border border-zinc-300/35 rounded-b-xs
            bg-white/1 backdrop-blur-sm"
          >
            Entradas Agotadas
          </button>
        </div>

        {/* REDES */}
        <div className="flex gap-48 pt-6 text-white font-serif text-sm tracking-widest">
          <a
            href="https://twitch.tv/ibai"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <Twitch size={18} />
            <span>/IBAI</span>
          </a>

          <a
            href="https://www.instagram.com/ibaillanos/"
            target="_blank"
            className="flex items-cente  pl-12 gap-2 hover:opacity-70 transition"
          >
            <Instagram size={18} />
            <span>/IBAILLANOS</span>
          </a>

          <a
            href="https://youtube.com/@ibaillanos"
            target="_blank"
            className="flex items-center gap-2 hover:opacity-70 transition"
          >
            <Youtube size={18} />
            <span>/IBAILLANOS</span>
          </a>
        </div>
      </div>

      {/* PATROCINADOR ABAJO DEL TODO */}
      <div className="absolute bottom-6 w-full text-center z-10 font-serif">
        <span className="text-zinc-500 text-SM mr-2">WEB PATROCINADA POR</span>

        <a
          href="https://infojobs.net"
          target="_blank"
          className="text-white font-black text-xl  hover:text-gray-300"
        >
          InfoJobs
        </a>
      </div>
    </section>
  );
}

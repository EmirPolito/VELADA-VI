import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[60vh] flex flex-col justify-center items-center text-center overflow-hidden bg-gradient-to-br from-black via-purple-950 to-zinc-900">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-tr from-black/80 via-purple-900/60 to-red-900/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-800/30 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6 py-20">
        <Image src="/velada-hero.jpg" alt="La Velada VI" width={320} height={180} className="rounded-2xl shadow-2xl border-4 border-purple-900/60 object-cover mb-4 max-w-full" priority />
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white drop-shadow-[0_0_16px_rgba(186,0,255,0.7)] mb-2 animate-fade-in">
          La Velada VI
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-100 mb-6 animate-fade-in delay-100">
          El evento que rompe internet
        </h2>
        <div className="flex gap-6 justify-center mt-4 animate-fade-in delay-200">
          <Link href="#combates" className="px-8 py-4 rounded-xl bg-purple-700 hover:bg-purple-600 text-lg font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400 glow-purple">
            Ver Combates
          </Link>
          <Link href="#evento" className="px-8 py-4 rounded-xl bg-red-700 hover:bg-red-600 text-lg font-bold shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 glow-red">
            Ver Evento
          </Link>
        </div>
      </div>
    </section>
  );
}

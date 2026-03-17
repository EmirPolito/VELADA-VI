import Link from "next/link";

export default function CTASection() {
  return (
    <section className="w-full py-20 flex flex-col items-center bg-gradient-to-br from-black via-purple-950 to-red-950">
      <div className="flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 drop-shadow-[0_0_12px_rgba(255,0,80,0.5)]">¡No te lo pierdas!</h2>
        <Link href="#stream" className="px-16 py-6 rounded-2xl bg-red-700 hover:bg-red-600 text-2xl font-black shadow-2xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 glow-red animate-pulse">
          Ver en directo
        </Link>
      </div>
    </section>
  );
}

import Image from "next/image";

export type Fighter = {
  name: string;
  alias: string;
  country: string;
  image: string;
};

export type Fight = {
  blue: Fighter;
  red: Fighter;
};

export default function CombatesSection({ fights }: { fights: Fight[] }) {
  return (
    <section id="combates" className="w-full py-20 bg-gradient-to-br from-zinc-950 via-black to-purple-950 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 drop-shadow-[0_0_12px_rgba(186,0,255,0.5)]">Combates</h2>
      <div className="flex flex-col gap-12 w-full max-w-4xl">
        {fights.map((fight, idx) => (
          <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <FighterCard fighter={fight.blue} side="blue" />
            <div className="text-5xl font-black text-white px-6 select-none vs-glow">VS</div>
            <FighterCard fighter={fight.red} side="red" />
          </div>
        ))}
      </div>
    </section>
  );
}

function FighterCard({ fighter, side }: { fighter: Fighter; side: "blue" | "red" }) {
  return (
    <div className={`group relative flex flex-col items-center p-6 rounded-2xl shadow-2xl border-2 ${side === "blue" ? "border-purple-700" : "border-red-700"} bg-zinc-900/80 transition-transform hover:scale-105 hover:shadow-[0_0_32px_8px_rgba(186,0,255,0.2)] hover:z-10 duration-200 cursor-pointer`}>
      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white/20 group-hover:border-white/60 transition-all duration-200">
        <Image src={fighter.image} alt={fighter.name} width={128} height={128} className="object-cover w-full h-full" />
      </div>
      <span className="text-xl font-bold text-white mb-1 drop-shadow">{fighter.name}</span>
      <span className="text-purple-400 text-lg font-semibold mb-1">{fighter.alias}</span>
      <span className="text-zinc-400 text-sm">{fighter.country}</span>
    </div>
  );
}

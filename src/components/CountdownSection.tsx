import { useEffect, useState } from "react";

export default function CountdownSection() {
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
      <section className="w-full py-16 flex flex-col items-center bg-gradient-to-br from-purple-900 via-black to-red-900">
        <span className="text-3xl font-bold text-green-400">¡El evento ha comenzado!</span>
      </section>
    );

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <section className="w-full py-16 flex flex-col items-center bg-gradient-to-br from-purple-900 via-black to-red-900">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-[0_0_12px_rgba(186,0,255,0.5)]">Cuenta regresiva</h2>
      <div className="flex gap-8 text-4xl md:text-5xl font-mono font-black text-white bg-zinc-900/80 rounded-2xl px-12 py-8 shadow-2xl border border-zinc-800">
        <div className="flex flex-col items-center"><span className="text-purple-400">{days}</span><span className="text-xs mt-1">días</span></div>
        <div className="flex flex-col items-center"><span className="text-purple-400">{hours}</span><span className="text-xs mt-1">horas</span></div>
        <div className="flex flex-col items-center"><span className="text-purple-400">{minutes}</span><span className="text-xs mt-1">min</span></div>
        <div className="flex flex-col items-center"><span className="text-purple-400">{seconds}</span><span className="text-xs mt-1">seg</span></div>
      </div>
    </section>
  );
}

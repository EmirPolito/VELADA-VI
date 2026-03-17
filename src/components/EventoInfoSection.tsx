export default function EventoInfoSection() {
  return (
    <section id="evento" className="w-full py-20 bg-gradient-to-br from-black via-zinc-950 to-red-950 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 drop-shadow-[0_0_12px_rgba(255,0,80,0.5)]">Información del Evento</h2>
      <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center bg-zinc-900/80 rounded-2xl p-10 shadow-2xl border border-zinc-800">
        <div className="flex flex-col gap-4 text-lg text-zinc-200 min-w-[220px]">
          <div><span className="font-bold text-white">Fecha:</span> 13 de julio de 2026</div>
          <div><span className="font-bold text-white">Lugar:</span> Estadio Santiago Bernabéu, Madrid</div>
          <div><span className="font-bold text-white">Horario:</span> 18:00 (hora España)</div>
          <div><span className="font-bold text-white">Transmisión:</span> Twitch.tv/IbaiLlanos</div>
        </div>
      </div>
    </section>
  );
}

export default function EventoPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 to-red-700 text-white">
      <h1 className="text-4xl font-bold mb-4">El Evento</h1>
      <p className="text-lg">Detalles, fecha y lugar de La Velada VI.</p>
      <div className="mt-8 p-6 bg-white/10 rounded-lg">
        <ul className="list-disc pl-6">
          <li><b>Fecha:</b> 13 de julio de 2026</li>
          <li><b>Lugar:</b> Estadio Santiago Bernabéu, Madrid</li>
          <li><b>Organiza:</b> Ibai Llanos</li>
        </ul>
      </div>
    </main>
  );
}

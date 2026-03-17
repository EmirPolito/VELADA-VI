const peleadores = [
  { nombre: "Peleador 1", alias: "El Rápido", pais: "España" },
  { nombre: "Peleador 2", alias: "La Bestia", pais: "México" },
  { nombre: "Peleador 3", alias: "El Técnico", pais: "Argentina" },
  { nombre: "Peleador 4", alias: "El Fénix", pais: "Chile" },
];

const combates = [
  { azul: "Peleador 1", rojo: "Peleador 2", resultado: "-" },
  { azul: "Peleador 3", rojo: "Peleador 4", resultado: "-" },
];

export default function CombatesPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Combates</h1>
      <section className="mb-10 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-purple-300">Peleadores Destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {peleadores.map((p) => (
            <div key={p.nombre} className="bg-zinc-800/80 rounded-lg p-4 flex flex-col items-center shadow">
              <span className="text-lg font-bold">{p.nombre}</span>
              <span className="text-purple-400">{p.alias}</span>
              <span className="text-zinc-400 text-sm">{p.pais}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-300">Tabla de Combates</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-zinc-900/80 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Esquina Azul</th>
                <th className="px-4 py-2 text-left">Esquina Roja</th>
                <th className="px-4 py-2 text-left">Resultado</th>
              </tr>
            </thead>
            <tbody>
              {combates.map((c, i) => (
                <tr key={i} className="border-t border-zinc-700">
                  <td className="px-4 py-2">{c.azul}</td>
                  <td className="px-4 py-2">{c.rojo}</td>
                  <td className="px-4 py-2">{c.resultado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

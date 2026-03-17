export default function StreamPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 to-indigo-700 text-white">
      <h1 className="text-4xl font-bold mb-4">Stream en Vivo</h1>
      <p className="text-lg">Aquí podrás ver el streaming oficial de La Velada VI.</p>
      <div className="mt-8 w-full max-w-2xl aspect-video bg-black rounded-lg flex items-center justify-center">
        <span className="text-gray-400">[Video Placeholder]</span>
      </div>
    </main>
  );
}

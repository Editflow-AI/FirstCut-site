export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-bold mb-4">
        FirstCut
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        AI Rough Cut Utility
      </p>

      <p className="text-center max-w-xl text-gray-500 mb-10">
        Turn long footage into rough cuts in seconds.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-xl">
        Download DMG
      </button>
    </main>
  );
}
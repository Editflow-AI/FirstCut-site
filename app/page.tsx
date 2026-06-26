import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col px-6">
      <section className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-6xl font-bold mb-4">
          FirstCut
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          AI Rough Cut Utility
        </p>

        <p className="text-center max-w-xl text-gray-500 mb-10">
          Turn long footage into rough cuts in seconds.
        </p>

        <a
         href="https://github.com/Editflow-AI/FirstCut/releases/download/v0.1.0-beta/FirstCut-.dmg"
         target="_blank"
         className="bg-black text-white px-6 py-3 rounded-xl"
        >
         Download DMG
        </a>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        <Link href="/privacy" className="hover:text-black">
          Privacy Policy
        </Link>
      </footer>
    </main>
  );
}

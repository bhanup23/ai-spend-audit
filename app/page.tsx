import Link from "next/link";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <h1 className="text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
        Stop Overspending on AI Tools
      </h1>

      <p className="text-zinc-400 text-center text-xl mt-8 max-w-3xl leading-8">
        Audit your ChatGPT, Claude, Cursor, and Copilot spending in under 60 seconds.
      </p>

      <Link href="/audit">

        <button className="mt-12 bg-white text-black px-10 py-5 rounded-2xl font-bold text-xl hover:scale-[1.03] active:scale-[0.98] transition">
          Start Free Audit
        </button>

      </Link>

    </main>
  );
}
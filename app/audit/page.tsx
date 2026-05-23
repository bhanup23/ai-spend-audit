export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-4xl font-bold text-center">
        AI Spend Audit
      </h1>

      <div className="max-w-2xl mx-auto mt-10 space-y-6">

        <div>
          <label className="block mb-2 text-sm">
            Tool Name
          </label>

          <select className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700">
            <option>ChatGPT</option>
            <option>Claude</option>
            <option>Cursor</option>
            <option>GitHub Copilot</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Monthly Spend ($)
          </label>

          <input
            type="number"
            placeholder="50"
            className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">
            Team Size
          </label>

          <input
            type="number"
            placeholder="5"
            className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        <button className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition">
          Generate Audit
        </button>

      </div>

    </main>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditPage() {

  const router = useRouter();

  const [tool, setTool] = useState("ChatGPT");
  const [spend, setSpend] = useState("");
  const [teamSize, setTeamSize] = useState("");

  function handleSubmit() {

    const auditData = {
      tool,
      spend,
      teamSize,
    };

    localStorage.setItem(
      "auditData",
      JSON.stringify(auditData)
    );

    router.push("/results");
  }

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

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          >
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
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
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
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            className="w-full p-3 rounded-xl bg-zinc-900 border border-zinc-700"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
        >
          Generate Audit
        </button>

      </div>

    </main>
  );
}
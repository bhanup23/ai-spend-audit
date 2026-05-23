"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuditPage() {

  const router = useRouter();

  const [teamSize, setTeamSize] = useState("");

  const [tools, setTools] = useState([
    {
      name: "ChatGPT",
      spend: "",
    },
  ]);

  function handleToolChange(
    index: number,
    field: string,
    value: string
  ) {

    const updatedTools = [...tools];

    updatedTools[index] = {
      ...updatedTools[index],
      [field]: value,
    };

    setTools(updatedTools);
  }

  function addTool() {

    setTools([
      ...tools,
      {
        name: "Claude",
        spend: "",
      },
    ]);
  }

  function handleSubmit() {

    const auditData = {
      tools,
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

      <h1 className="text-5xl font-bold text-center">
        AI Spend Audit
      </h1>

      <p className="text-zinc-400 text-center mt-4">
        Analyze your AI tooling costs in under 60 seconds.
      </p>

      <div className="max-w-3xl mx-auto mt-12 space-y-8">

        {/* Dynamic Tools */}

        {tools.map((tool, index) => (

          <div
            key={index}
            className="bg-zinc-900 border border-zinc-700 p-6 rounded-2xl"
          >

            <h2 className="text-2xl font-semibold mb-6">
              Tool {index + 1}
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 text-sm">
                  Tool Name
                </label>

                <select
                  value={tool.name}
                  onChange={(e) =>
                    handleToolChange(
                      index,
                      "name",
                      e.target.value
                    )
                  }
                  className="w-full p-3 rounded-xl bg-black border border-zinc-700"
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
                  value={tool.spend}
                  onChange={(e) =>
                    handleToolChange(
                      index,
                      "spend",
                      e.target.value
                    )
                  }
                  className="w-full p-3 rounded-xl bg-black border border-zinc-700"
                />
              </div>

            </div>

          </div>

        ))}

        {/* Team Size */}

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

        {/* Add Tool Button */}

        <button
          onClick={addTool}
          className="w-full border border-zinc-700 py-3 rounded-xl hover:bg-zinc-900 transition"
        >
          + Add Another Tool
        </button>

        {/* Submit */}

        <button
          onClick={handleSubmit}
          className="w-full bg-white text-black py-4 rounded-xl font-semibold hover:scale-[1.01] transition"
        >
          Generate Audit
        </button>

      </div>

    </main>
  );
}
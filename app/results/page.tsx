"use client";

import { useEffect, useState } from "react";

export default function ResultsPage() {

  const [data, setData] = useState<any>(null);

  useEffect(() => {

    const savedData = localStorage.getItem("auditData");

    if (savedData) {
      setData(JSON.parse(savedData));
    }

  }, []);

  if (!data) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </main>
    );
  }

  const savings =
    Number(data.teamSize) <= 2
      ? 40
      : 0;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <h1 className="text-5xl font-bold text-center">
        Audit Results
      </h1>

      <div className="max-w-2xl mx-auto mt-10 bg-zinc-900 p-8 rounded-2xl">

        <h2 className="text-3xl font-bold">
          Potential Savings:
        </h2>

        <p className="text-6xl font-bold mt-4 text-green-400">
          ${savings}/month
        </p>

        <div className="mt-8 space-y-4">

          <div className="border border-zinc-700 rounded-xl p-4">

            <h3 className="text-xl font-semibold">
              {data.tool}
            </h3>

            <p className="mt-2 text-zinc-300">
              Recommended Action:
            </p>

            <p className="mt-1">
              Switch to a cheaper plan.
            </p>

            <p className="mt-3 text-green-400">
              Estimated Savings: ${savings}/month
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}
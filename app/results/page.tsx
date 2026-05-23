"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";

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

  const audit = generateAudit(
    data.tool,
    data.secondTool,
    Number(data.spend),
    Number(data.teamSize)
  );

  const annualSavings = audit.totalSavings * 12;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Header */}

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center">
          Your AI Spend Audit
        </h1>

        <p className="text-center text-zinc-400 mt-4">
          Personalized recommendations to reduce unnecessary AI spending.
        </p>

      </div>

      {/* Hero Savings Card */}

      <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-zinc-900 to-zinc-800 p-10 rounded-3xl border border-zinc-700">

        <p className="text-zinc-400 text-lg">
          Estimated Monthly Savings
        </p>

        <h2 className="text-7xl font-bold text-green-400 mt-4">
          ${audit.totalSavings}
        </h2>

        <p className="text-zinc-300 mt-6 text-xl">
          Estimated Annual Savings:
          <span className="text-white font-semibold">
            {" "} ${annualSavings}
          </span>
        </p>

      </div>

      {/* Tool Breakdown */}

      <div className="max-w-4xl mx-auto mt-10">

        <h3 className="text-2xl font-semibold mb-6">
          Recommendations
        </h3>

<div className="space-y-6">

  {audit.recommendations.map((item: any, index: number) => (

    <div
      key={index}
      className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6"
    >

      <div className="flex items-center justify-between">

        <div>
          <p className="text-zinc-400 text-sm">
            Tool
          </p>

          <h4 className="text-2xl font-bold mt-1">
            {item.tool}
          </h4>
        </div>

        <div className="text-right">
          <p className="text-zinc-400 text-sm">
            Savings
          </p>

          <p className="text-green-400 text-2xl font-bold">
            ${item.savings}/mo
          </p>
        </div>

      </div>

      <div className="mt-6">

        <p className="text-zinc-400 text-sm">
          Recommended Action
        </p>

        <p className="text-xl font-semibold mt-2">
          {item.recommendation}
        </p>

        <p className="text-zinc-400 mt-4 leading-7">
          {item.reason}
        </p>

      </div>

    </div>

  ))}

</div>

      </div>

      {/* Credex CTA */}

      <div className="max-w-4xl mx-auto mt-10 bg-white text-black p-8 rounded-3xl">

        <h3 className="text-3xl font-bold">
          Unlock More Savings
        </h3>

        <p className="mt-4 text-zinc-700 text-lg">
          Credex helps startups reduce AI infrastructure costs
          through discounted enterprise AI credits.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Book Free Consultation
        </button>

      </div>

    </main>
  );
}
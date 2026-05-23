"use client";

import { useEffect, useState } from "react";
import { generateAudit } from "@/lib/auditEngine";
import { supabase } from "@/lib/supabase";

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
    data.tools,
    Number(data.teamSize)
  );

  const annualSavings = audit.totalSavings * 12;

  // Save audit to Supabase

  async function saveAudit() {

    const { data: savedAudit, error } = await supabase
      .from("audits")
      .insert([
        {
          tools: data.tools,
          team_size: Number(data.teamSize),
          total_savings: audit.totalSavings,
        },
      ])
      .select();

    if (error) {

      console.error("Supabase error:", error);

      alert("Database connection failed");

      return;
    }

    console.log("Saved audit:", savedAudit);

    alert("Audit saved successfully!");
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      {/* Header */}

      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          Your AI Spend Audit
        </h1>

        <p className="text-center text-zinc-400 mt-4">
          Personalized recommendations to optimize AI spending.
        </p>

      </div>

      {/* Hero Card */}

      <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 p-10 rounded-3xl shadow-2xl">

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

      {/* Recommendations */}

      <div className="max-w-4xl mx-auto mt-12">

        <h3 className="text-3xl font-bold mb-8">
          Recommendations
        </h3>

        <div className="space-y-6">

          {audit.recommendations.map((item: any, index: number) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-500 hover:-translate-y-1"
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

      {/* Supabase Test Button */}

      <div className="max-w-4xl mx-auto mt-10">

        <button
          onClick={saveAudit}
          className="w-full bg-green-500 text-black py-4 rounded-2xl font-bold hover:scale-[1.02]"
        >
          Test Supabase Connection
        </button>

      </div>

      {/* CTA */}

      <div className="max-w-4xl mx-auto mt-12 bg-white text-black p-8 rounded-3xl">

        <h3 className="text-3xl font-bold">
          Reduce AI Infrastructure Costs
        </h3>

        <p className="mt-4 text-zinc-700 text-lg">
          Credex helps startups optimize AI spending using discounted enterprise AI credits.
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Book Free Consultation
        </button>

      </div>

    </main>
  );
}
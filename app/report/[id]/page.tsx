"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ReportPage({ params }: any) {

  const [report, setReport] = useState<any>(null);

  useEffect(() => {

    async function fetchReport() {

      const { data, error } = await supabase
        .from("audits")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) {

        console.error(error);

        return;
      }

      setReport(data);
    }

    fetchReport();

  }, [params.id]);

  if (!report) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading Report...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          Public Audit Report
        </h1>

        <p className="text-center text-zinc-400 mt-4">
          Shareable AI spend optimization report.
        </p>

        {/* Hero */}

        <div className="mt-12 bg-zinc-900 border border-zinc-700 rounded-3xl p-10">

          <p className="text-zinc-400">
            Estimated Monthly Savings
          </p>

          <h2 className="text-7xl font-bold text-green-400 mt-4">
            ${report.total_savings}
          </h2>

        </div>

        {/* Tools */}

        <div className="mt-12 space-y-6">

          {report.tools.map((tool: any, index: number) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6"
            >

              <h3 className="text-2xl font-bold">
                {tool.name}
              </h3>

              <p className="text-zinc-400 mt-3">
                Monthly Spend: ${tool.spend}
              </p>

            </div>

          ))}

        </div>

      </div>

    </main>
  );
}
import { supabase } from "@/lib/supabase";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const { data: report, error } = await supabase
    .from("audits")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !report) {

    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Report not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-4xl mx-auto">

        {/* Header */}

        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
          Public Audit Report
        </h1>

        <p className="text-center text-zinc-400 mt-4">
          Shareable AI spend optimization report.
        </p>

        {/* Hero */}

        <div className="mt-12 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-zinc-700 rounded-3xl p-10 shadow-2xl">

          <p className="text-zinc-400 text-lg">
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
              className="bg-zinc-900 border border-zinc-700 rounded-2xl p-6 hover:border-zinc-500 hover:-translate-y-1 transition"
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
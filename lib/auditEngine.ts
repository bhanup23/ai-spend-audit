export function generateAudit(
  tools: any[],
  teamSize: number
) {

  const recommendations = [];

  let totalSavings = 0;

  for (const tool of tools) {

    // ChatGPT

    if (tool.name === "ChatGPT") {

      if (teamSize <= 2) {

        recommendations.push({
          tool: "ChatGPT",
          savings: 40,
          recommendation: "Switch from Team to Plus",
          reason:
            "Small teams usually do not need Team features.",
        });

        totalSavings += 40;

      } else {

        recommendations.push({
          tool: "ChatGPT",
          savings: 0,
          recommendation: "Current plan looks optimized",
          reason:
            "Your team size justifies collaborative features.",
        });
      }
    }

    // Claude

    if (tool.name === "Claude") {

      recommendations.push({
        tool: "Claude",
        savings: 25,
        recommendation: "Optimize Claude API usage",
        reason:
          "Usage-based optimization may reduce monthly costs.",
      });

      totalSavings += 25;
    }

    // Cursor

    if (tool.name === "Cursor") {

      recommendations.push({
        tool: "Cursor",
        savings: 10,
        recommendation: "Downgrade to Hobby plan",
        reason:
          "Solo developers may not require premium features.",
      });

      totalSavings += 10;
    }

    // GitHub Copilot

    if (tool.name === "GitHub Copilot") {

      recommendations.push({
        tool: "GitHub Copilot",
        savings: 15,
        recommendation: "Review enterprise seat allocation",
        reason:
          "Inactive seats often create unnecessary spending.",
      });

      totalSavings += 15;
    }

  }

  return {
    totalSavings,
    recommendations,
  };
}
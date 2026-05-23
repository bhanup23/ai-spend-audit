export function generateAudit(
  tool: string,
  secondTool: string,
  spend: number,
  teamSize: number
) {

  const recommendations = [];

  let totalSavings = 0;

  // Tool 1

  if (tool === "ChatGPT") {

    if (teamSize <= 2) {

      recommendations.push({
        tool: "ChatGPT",
        savings: 40,
        recommendation: "Switch from Team to Plus",
        reason:
          "Small teams usually do not require Team features.",
      });

      totalSavings += 40;

    } else {

      recommendations.push({
        tool: "ChatGPT",
        savings: 0,
        recommendation: "Current plan looks reasonable",
        reason:
          "Your team size justifies collaborative features.",
      });
    }
  }

  // Tool 2

  if (secondTool === "Claude") {

    recommendations.push({
      tool: "Claude",
      savings: 25,
      recommendation: "Optimize Claude usage",
      reason:
        "You may qualify for cheaper API pricing or credits.",
    });

    totalSavings += 25;
  }

  if (secondTool === "Cursor") {

    recommendations.push({
      tool: "Cursor",
      savings: 10,
      recommendation: "Downgrade to Hobby plan",
      reason:
        "Solo developers often do not need premium features.",
    });

    totalSavings += 10;
  }

  return {
    totalSavings,
    recommendations,
  };
}
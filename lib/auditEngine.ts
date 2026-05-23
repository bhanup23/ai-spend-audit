export function generateAudit(tool: string, spend: number, teamSize: number) {

  let savings = 0;
  let recommendation = "";
  let reason = "";

  if (tool === "ChatGPT") {

    if (teamSize <= 2) {

      savings = 40;

      recommendation = "Switch from Team to Plus";

      reason =
        "Small teams usually do not need Team features.";

    } else {

      recommendation = "Current plan looks reasonable";

      reason =
        "Your team size justifies collaborative features.";
    }
  }

  if (tool === "Claude") {

    if (spend > 100) {

      savings = 25;

      recommendation = "Optimize Claude usage";

      reason =
        "Heavy API usage may qualify for cheaper alternatives or credits.";
    }
  }

  if (tool === "Cursor") {

    if (teamSize === 1) {

      savings = 10;

      recommendation = "Use Hobby plan";

      reason =
        "Solo developers may not need premium features.";
    }
  }

  return {
    savings,
    recommendation,
    reason,
  };
}
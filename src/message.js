const DAY_NAMES = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const ROLE_EMOJI = {
  Governance: "🏛️",
  All:        "👥",
  Crafter:    "🛠️",
  External:   "🌐",
  "BA Labs":  "📊",
  Reviewers:  "🔍",
};

function buildSlackMessage(events, cycleWeek) {
  const { time, week, day } = events[0];
  const dayName = DAY_NAMES[day];
  const heading = `Spell Review — Week ${week} ${dayName} ${time} UTC`;

  const lines = events.map((e) => {
    const emoji = ROLE_EMOJI[e.responsible] || "▪️";
    return `${emoji}  *${e.responsible}*: ${e.event}`;
  });

  return {
    text: heading,
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: `🔮 ${heading}` },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: lines.join("\n"),
        },
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: `Spell Review cycle week ${cycleWeek}/2`,
          },
        ],
      },
    ],
  };
}

module.exports = { buildSlackMessage };

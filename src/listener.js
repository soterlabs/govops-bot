require("dotenv").config();
const { App } = require("@slack/bolt");
const events = require("./schedule");
const { getCurrentCycleWeek, getSpellDate } = require("./cycle");
const { renderSchedule } = require("./render-schedule");
const { findNextEvent, formatDuration } = require("./next-event");

const app = new App({
  token: process.env.REDLINE_BOT_TOKEN,
  appToken: process.env.REDLINE_BOT_APP_TOKEN,
  socketMode: true,
});

function isoWeekday(date) {
  return date.getUTCDay() || 7;
}

app.command("/redline-schedule", async ({ ack, respond }) => {
  await ack();
  const now = new Date();
  const msg = renderSchedule(
    events,
    getCurrentCycleWeek(now),
    isoWeekday(now),
    now.getUTCHours(),
    getSpellDate(now)
  );
  await respond({ response_type: "in_channel", text: msg.text, blocks: msg.blocks });
});

app.command("/redline-next", async ({ ack, respond }) => {
  await ack();
  const now = new Date();
  const { event, occurrence, msUntil } = findNextEvent(events, now);
  const dayNames = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const slot = `W${event.week} ${dayNames[event.day]} ${String(event.notifyHour).padStart(2, "0")}:00 UTC`;
  const linkSuffix = event.link ? `  <${event.link.url}|${event.link.text}>` : "";
  const text =
    `*Next event: ${event.label}*\n` +
    `• Owner: ${event.responsible}\n` +
    `• When: ${slot} (${occurrence.toISOString().replace("T", " ").slice(0, 16)} UTC)\n` +
    `• In: *${formatDuration(msUntil)}*${linkSuffix}`;
  await respond({
    response_type: "in_channel",
    text: `Next event: ${event.label} in ${formatDuration(msUntil)}`,
    blocks: [{ type: "section", text: { type: "mrkdwn", text } }],
  });
});

app.command("/redline-help", async ({ ack, respond }) => {
  await ack();
  const text =
    "*redline-bot commands*\n" +
    "• `/redline-schedule` — show the full 2-week Spell Review schedule with current position\n" +
    "• `/redline-next` — show the next scheduled event and countdown\n" +
    "• `/redline-help` — show this message";
  await respond({
    response_type: "ephemeral",
    text: "redline-bot commands",
    blocks: [{ type: "section", text: { type: "mrkdwn", text } }],
  });
});

(async () => {
  await app.start();
  console.log("redline-bot listener running (Socket Mode)");
})();

const { WebClient } = require("@slack/web-api");
const cron = require("node-cron");
const events = require("./schedule");
const { getCurrentCycleWeek } = require("./cycle");
const { buildSlackMessage } = require("./message");

const slack = new WebClient(process.env.SLACK_BOT_TOKEN);
const channel = process.env.SLACK_CHANNEL_ID;

// ── Group events by (week, day, time) so we send one message per slot ──

const slots = new Map();

for (const e of events) {
  const key = `${e.week}-${e.day}-${e.time}`;
  if (!slots.has(key)) slots.set(key, []);
  slots.get(key).push(e);
}

// ── ISO weekday → cron weekday (cron: 0=Sun, 1=Mon … 6=Sat) ──

function isoDayToCron(isoDay) {
  return isoDay % 7; // ISO 7 (Sun) → 0, 1 (Mon) → 1, etc.
}

// ── Register one cron job per unique time slot ──

for (const [key, group] of slots) {
  const { week, day, time } = group[0];
  const [hour, minute] = time.split(":");
  const cronDay = isoDayToCron(day);
  const expr = `${minute} ${hour} * * ${cronDay}`;

  cron.schedule(expr, async () => {
    const cycleWeek = getCurrentCycleWeek();
    if (cycleWeek !== week) return;

    const msg = buildSlackMessage(group, cycleWeek);
    try {
      await slack.chat.postMessage({ channel, text: msg.text, blocks: msg.blocks });
      console.log(`[${new Date().toISOString()}] Sent: ${key}`);
    } catch (err) {
      console.error(`Failed to send ${key}:`, err.message);
    }
  }, { timezone: "UTC" });

  console.log(`  cron registered: ${expr} UTC → Week ${week} (${group.length} event(s))`);
}

console.log(`\ngovops-bot started — ${slots.size} notification slots across the 2-week cycle`);

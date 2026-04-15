const { getCycleStart } = require("./cycle");

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MS_PER_CYCLE = 14 * MS_PER_DAY;

// Returns { event, occurrence: Date, msUntil: number } for the next scheduled
// event strictly after `now`. Never returns null — the cycle repeats forever.
function findNextEvent(events, now = new Date()) {
  const cycleStart = getCycleStart(now);

  let best = null;
  for (const event of events) {
    const offsetDays = (event.week - 1) * 7 + (event.day - 1);
    let occurrence = new Date(
      cycleStart.getTime() + offsetDays * MS_PER_DAY + event.notifyHour * 60 * 60 * 1000
    );
    if (occurrence <= now) {
      occurrence = new Date(occurrence.getTime() + MS_PER_CYCLE);
    }
    const msUntil = occurrence - now;
    if (!best || msUntil < best.msUntil) {
      best = { event, occurrence, msUntil };
    }
  }
  return best;
}

function formatDuration(ms) {
  const totalMinutes = Math.floor(ms / 60000);
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;
  const parts = [];
  if (days) parts.push(`${days}d`);
  if (hours) parts.push(`${hours}h`);
  parts.push(`${minutes}m`);
  return parts.join(" ");
}

module.exports = { findNextEvent, formatDuration };

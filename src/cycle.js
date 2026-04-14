// Determines which week of the 2-week Spell Review cycle we are in.
//
// CYCLE_START_DATE is the Monday of any known "Week 1". The biweekly
// cycle repeats forever from this anchor — no need to update it.

const CYCLE_START_DATE = "2026-04-13"; // Monday of a known Week 1
const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;
const ANCHOR = new Date(`${CYCLE_START_DATE}T00:00:00Z`);

function getCurrentCycleWeek(now = new Date()) {
  const weeksSince = Math.floor((now - ANCHOR) / MS_PER_WEEK);
  return (weeksSince % 2) + 1; // 1 or 2
}

// Returns the W2 Thursday date (spell execution day) for the current cycle.
function getSpellDate(now = new Date()) {
  const weeksSince = Math.floor((now - ANCHOR) / MS_PER_WEEK);
  const cycleStart = new Date(ANCHOR.getTime() + Math.floor(weeksSince / 2) * 2 * MS_PER_WEEK);
  // W2 Thursday = cycle start (W1 Monday) + 10 days
  const spellDay = new Date(cycleStart.getTime() + 10 * 24 * 60 * 60 * 1000);
  return spellDay.toISOString().slice(0, 10); // "YYYY-MM-DD"
}

module.exports = { getCurrentCycleWeek, getSpellDate };

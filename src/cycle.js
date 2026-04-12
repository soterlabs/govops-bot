// Determines which week of the 2-week Spell Review cycle we are in.
//
// CYCLE_START_DATE must be set to the Monday of any "Week 1".
// From that anchor, every odd week (0, 2, 4 …) is Week 1 and every
// even week (1, 3, 5 …) is Week 2.

const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

function getCurrentCycleWeek(now = new Date()) {
  const start = process.env.CYCLE_START_DATE;
  if (!start) {
    throw new Error("CYCLE_START_DATE env var is required (e.g. 2026-04-13)");
  }

  const anchor = new Date(`${start}T00:00:00Z`);
  const weeksSince = Math.floor((now - anchor) / MS_PER_WEEK);
  return (weeksSince % 2) + 1; // 1 or 2
}

module.exports = { getCurrentCycleWeek };

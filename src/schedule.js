// Spell Review — full 2-week cycle schedule
//
// Each entry: { responsible, event, time, week, day }
//   week: 1 or 2
//   day:  1 = Monday … 7 = Sunday  (ISO weekday)
//   time: "HH:MM" UTC (for ranges like 16:00-16:30 we notify at the start)

const events = [
  // ── Week 1 ──────────────────────────────────────────────────────────
  { responsible: "Governance", event: "Exec Sheet is created",                              time: "15:00", week: 1, day: 2 },
  { responsible: "All",        event: "Agreement is reached on the content and roles",      time: "15:00", week: 1, day: 2 },
  { responsible: "Crafter",    event: "Spell is cleaned up (for external contributions)",   time: "16:00", week: 1, day: 3 },
  { responsible: "External",   event: "External code is contributed via PR (if needed)",    time: "23:59", week: 1, day: 5 },
  { responsible: "Governance", event: "Exec Sheet is finalised and fully confirmed",        time: "23:59", week: 1, day: 5 },

  // ── Week 2 ──────────────────────────────────────────────────────────
  { responsible: "Crafter",    event: "Spell is crafted (without the Exec Hash)",           time: "16:00", week: 2, day: 1 },
  { responsible: "BA Labs",    event: "Announce final rate changes (if needed)",            time: "12:00", week: 2, day: 2 },
  { responsible: "Reviewers",  event: "Spell code is reviewed (against the Exec Sheet)",    time: "16:00", week: 2, day: 2 },
  { responsible: "Governance", event: "Exec Doc is merged",                                 time: "16:00", week: 2, day: 2 },
  { responsible: "Crafter",    event: "Spell code review is addressed, Exec Hash is added", time: "12:00", week: 2, day: 3 },
  { responsible: "Reviewers",  event: "Spell code is reviewed (against the Exec Doc)",      time: "16:00", week: 2, day: 3 },
  { responsible: "Crafter",    event: "Spell is deployed, Testnet is created",              time: "12:00", week: 2, day: 4 },
  { responsible: "Reviewers",  event: "Spell deployment is approved",                       time: "16:00", week: 2, day: 4 },
  { responsible: "Crafter",    event: "Spell address is published",                         time: "16:00", week: 2, day: 4 },
  { responsible: "Reviewers",  event: "Spell address is confirmed",                         time: "16:00", week: 2, day: 4 },
  { responsible: "Governance", event: "Spell address is received",                          time: "16:00", week: 2, day: 4 },
  { responsible: "Reviewers",  event: "Spell PR is approved",                               time: "16:00", week: 2, day: 4 },
  { responsible: "Crafter",    event: "Spell PR is merged",                                 time: "16:00", week: 2, day: 4 },
  { responsible: "Crafter",    event: "Spell retro is started",                             time: "16:30", week: 2, day: 4 },
];

module.exports = events;

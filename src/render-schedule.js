const DAY_NAMES = ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function slotKey(week, day, hour) {
  return week * 10000 + day * 100 + hour;
}

function findCurrentIndex(sorted, nowWeek, nowDay, nowHour) {
  const nowKey = slotKey(nowWeek, nowDay, nowHour);
  let idx = -1;
  for (let i = 0; i < sorted.length; i++) {
    const e = sorted[i];
    if (slotKey(e.week, e.day, e.notifyHour) <= nowKey) idx = i;
    else break;
  }
  return idx;
}

function formatRow(event, marker) {
  const prefix = marker ? "▶ " : "   ";
  const slot = `W${event.week} ${DAY_NAMES[event.day]} ${String(event.notifyHour).padStart(2, "0")}:00`;
  const label = marker ? `*${event.label}*` : event.label;
  const linkSuffix = event.link ? `  <${event.link.url}|${event.link.text}>` : "";
  return `${prefix}\`${slot}\`  ${label} — _${event.responsible}_${linkSuffix}`;
}

function renderSchedule(events, nowWeek, nowDay, nowHour, spellDate) {
  const sorted = [...events].sort(
    (a, b) => slotKey(a.week, a.day, a.notifyHour) - slotKey(b.week, b.day, b.notifyHour)
  );
  const currentIdx = findCurrentIndex(sorted, nowWeek, nowDay, nowHour);

  const w1 = sorted.filter((e) => e.week === 1).map((e) => formatRow(e, sorted.indexOf(e) === currentIdx));
  const w2 = sorted.filter((e) => e.week === 2).map((e) => formatRow(e, sorted.indexOf(e) === currentIdx));

  const heading = `*Spell Review schedule — spell ${spellDate}*\nCurrently W${nowWeek} ${DAY_NAMES[nowDay]} ${String(nowHour).padStart(2, "0")}:00 UTC`;

  return {
    text: `Spell Review schedule (spell ${spellDate})`,
    blocks: [
      { type: "section", text: { type: "mrkdwn", text: heading } },
      { type: "divider" },
      { type: "section", text: { type: "mrkdwn", text: `*Week 1*\n${w1.join("\n")}` } },
      { type: "section", text: { type: "mrkdwn", text: `*Week 2*\n${w2.join("\n")}` } },
    ],
  };
}

module.exports = { renderSchedule };

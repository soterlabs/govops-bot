# redline-bot

Slack bot that sends recurring notifications for the **Spell Review** process — the biweekly cycle through which Sky Governance prepares, reviews, deploys, and publishes Executive Vote spells. Also responds to `/redline-schedule` and `/redline-next` slash commands.

## How it works

The bot has two runtime modes:

- **Cron** (`src/index.js`, `npm start`) — a short-lived script triggered hourly by Railway's cron feature (`0 * * * *`). Each run checks whether we are in **Week 1** or **Week 2** of the current cycle, and if the current UTC hour matches any scheduled events, posts them to the configured Slack channel.
- **Listener** (`src/listener.js`, `npm run listener`) — a long-lived Bolt app in Socket Mode that responds to slash commands (`/redline-schedule`, `/redline-next`) with the current schedule and countdown to the next event.

Events that share the same notification hour are posted in the same run. The bot currently tracks **23 events** across the 2-week cycle.

### Notification schedule

| Week | Day | Time (UTC) | Events |
|------|-----|------------|--------|
| 1 | Tue | 15:00 | Exec Sheet created, Agreement on content and roles |
| 1 | Wed | 16:00 | Spell cleaned up for external contributions |
| 1 | Fri | 23:59 | External code contributed via PR, Exec Sheet finalised |
| 2 | Mon | 16:00 | Spell crafted |
| 2 | Tue | 12:00 | BA Labs rate changes announced |
| 2 | Tue | 16:00 | Spell code reviewed (vs Exec Sheet), Exec Doc merged |
| 2 | Wed | 12:00 | Code review addressed, Exec Hash added |
| 2 | Wed | 16:00 | Spell code reviewed (vs Exec Doc) |
| 2 | Thu | 12:00 | Spell deployed, Testnet created |
| 2 | Thu | 16:00 | Deployment approved, address published/confirmed/received, PR approved/merged |
| 2 | Thu | 16:30 | Spell retro started |

The full event list — including 32 additional events identified from the diagram and Atlas that do not yet have notification times — is documented in [`CROSS_REFERENCE.md`](CROSS_REFERENCE.md).

## Project structure

```
govops-bot/
├── src/
│   ├── index.js           # cron entry point — posts events due this hour
│   ├── listener.js        # Socket Mode Bolt app — handles slash commands
│   ├── schedule.js        # all 23 events (week, day, time, responsible party)
│   ├── cycle.js           # derives current cycle week, cycle start, spell date
│   ├── message.js         # Block Kit formatter for cron notifications
│   ├── render-schedule.js # Block Kit formatter for /redline-schedule
│   ├── next-event.js      # finds the next scheduled event + countdown
│   └── hello.js           # smoke test — auth.test + a hello-world post
├── references/            # source material used to build the schedule
├── CROSS_REFERENCE.md     # events cross-referenced across all 3 sources
├── slack-manifest.json    # Slack app manifest (recreate the app from this)
├── railway.toml           # Railway deployment config
├── .env.example
└── package.json
```

## Setup

### 1. Create the Slack app

Create a new Slack app **From a manifest** at https://api.slack.com/apps and paste the contents of [`slack-manifest.json`](slack-manifest.json). This configures the bot user, scopes (`chat:write`, `commands`), the `/redline-schedule` and `/redline-next` slash commands, and enables Socket Mode in one step.

After creating the app:

1. **Install App** → **Install to Workspace** → copy the **Bot User OAuth Token** (`xoxb-...`).
2. **Basic Information → App-Level Tokens** → **Generate Token and Scopes** with the `connections:write` scope → copy the resulting `xapp-...` token.
3. In Slack, invite the bot to your target channel: `/invite @redline-bot`.

### 2. Configure environment variables

| Variable | Description |
|----------|-------------|
| `REDLINE_BOT_TOKEN` | Bot User OAuth Token (`xoxb-...`), used by cron and listener |
| `REDLINE_BOT_APP_TOKEN` | App-Level Token (`xapp-...`), used by the Socket Mode listener only |
| `SLACK_CHANNEL_ID` | Target channel ID (e.g. `C0123456789`), used by cron only |

The 2-week cycle anchor is hardcoded in `src/cycle.js` as `CYCLE_START_DATE` — update it there if the cycle shifts.

### 3. Run locally

```sh
npm install
cp .env.example .env   # then fill in real values
npm run hello          # smoke test: posts "Hello from redline-bot" to SLACK_CHANNEL_ID
npm start              # cron run: posts events due at the current UTC hour (usually a no-op)
npm run listener       # Socket Mode listener: responds to /redline-schedule and /redline-next
```

### 4. Deploy to Railway

The repo is designed to run as **two Railway services** sharing the same codebase:

- **Cron service** — uses the defaults from `railway.toml`. Start command `npm start`, cron schedule `0 * * * *`. Needs `REDLINE_BOT_TOKEN` and `SLACK_CHANNEL_ID`.
- **Listener service** — override Start Command to `npm run listener` and clear the cron schedule so the process stays up. Needs `REDLINE_BOT_TOKEN` and `REDLINE_BOT_APP_TOKEN`.

Push to the connected branch and Railway rebuilds both services via Nixpacks.

## References

The notification schedule was built by cross-referencing three sources:

| Source | File |
|--------|------|
| Coordination Table | [`references/coordination-table.md`](references/coordination-table.md) |
| Spell Cycle Diagram | [`references/spell_cycle.jpg`](references/spell_cycle.jpg) |
| Atlas A.1.10 | [`references/atlas-A1.10-weekly-governance-cycle.md`](references/atlas-A1.10-weekly-governance-cycle.md) |

See [`CROSS_REFERENCE.md`](CROSS_REFERENCE.md) for the full comparison (51 events, 20 with notification times, 31 pending).

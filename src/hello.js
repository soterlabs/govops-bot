require("dotenv").config();
const { WebClient } = require("@slack/web-api");

const slack = new WebClient(process.env.REDLINE_BOT_TOKEN);
const channel = process.env.SLACK_CHANNEL_ID;

(async () => {
  console.log(`Channel: ${channel}`);
  console.log(`Token prefix: ${(process.env.REDLINE_BOT_TOKEN || "").slice(0, 10)}...`);
  try {
    const auth = await slack.auth.test();
    console.log(`auth.test OK — bot=${auth.user} team=${auth.team} id=${auth.user_id}`);
  } catch (e) {
    console.error("auth.test failed:", e.data || e.message);
    process.exit(1);
  }
  try {
    const res = await slack.chat.postMessage({ channel, text: "👋 Hello from redline-bot" });
    console.log(`postMessage OK — ts=${res.ts} channel=${res.channel}`);
  } catch (e) {
    console.error("postMessage failed:", e.data || e.message);
    process.exit(1);
  }
})();

// how to become a gay ?


const axios = require('axios');
const os = require('os');
const fs = require('fs');
const path = require('path');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');

cmd({
  pattern: 'version',
  alias: ["changelog", "cupdate", "checkupdate"],
  react: '🚀',
  desc: "Check bot's version, system stats, and update info.",
  category: 'info',
  filename: __filename
}, async (conn, mek, m, {
  from, sender, pushname, reply
}) => {
  try {
    // Read local version data
    const localVersionPath = path.join(__dirname, '../DATABASE/version.json');
    let localVersion = 'Unknown';
    let changelog = 'No changelog available.';
    if (fs.existsSync(localVersionPath)) {
      const localData = JSON.parse(fs.readFileSync(localVersionPath));
      localVersion = localData.version;
      changelog = localData.changelog;
    }

    // Fetch latest version data from GitHub
    const rawVersionUrl = 'https://raw.githubusercontent.com/Crazynotdev/TERRA-XMD/main/DATABASE/version.json';
    let latestVersion = 'Unknown';
    let latestChangelog = 'No changelog available.';
    try {
      const { data } = await axios.get(rawVersionUrl);
      latestVersion = data.version;
      latestChangelog = data.changelog;
    } catch (error) {
      console.error('Failed to fetch latest version:', error);
    }

    // Count total plugins
    const pluginPath = path.join(__dirname, '../plugins');
    const pluginCount = fs.readdirSync(pluginPath).filter(file => file.endsWith('.js')).length;

    // Count total registered commands
    const totalCommands = commands.length;

    // System info
    const uptime = runtime(process.uptime());
    const ramUsage = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    const totalRam = (os.totalmem() / 1024 / 1024).toFixed(2);
    const hostName = os.hostname();
    const lastUpdate = fs.statSync(localVersionPath).mtime.toLocaleString();

    // GitHub stats
    const githubRepo = 'https://github.com/Crazynotdev/TERRA-XMD';

    // Check update status
    let updateMessage = `*〽️YOUR TERRA XMD BOT IS UPTODATE*`;
    if (localVersion !== latestVersion) {
      updateMessage = `*🫤 UH! YOU DONT HAVE THE LATEST VERSION*
🔹 *ᴄᴜʀʀᴇɴᴛ ᴠᴇʀsɪᴏɴ:* ${localVersion}
🔹 *ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ:* ${latestVersion}

*ᴜsᴇ .ᴜᴘᴅᴀᴛᴇ ᴛᴏ ᴜᴘᴅᴀᴛᴇ.*`;
    }

    const statusMessage = `🌟 *Good ${new Date().getHours() < 12 ? 'Morning' : 'Night'}, ${pushname}!* 🌟\n\n` +
      `🤖 *ʙᴏᴛ ɴᴀᴍᴇ:* TERRA-XMD\n🔖 *ᴄᴜʀʀᴇɴᴛ ᴠᴇʀsɪᴏɴ:* ${localVersion}\n📢 *ʟᴀᴛᴇsᴛ ᴠᴇʀsɪᴏɴ:* ${latestVersion}\n📂 *ᴛᴏᴛᴀʟ ᴘʟᴜɢɪɴs:* ${pluginCount}\n🔢 *ᴛᴏᴛᴀʟ ᴄᴏᴍᴍᴀɴᴅs:* ${totalCommands}\n\n` +
      `💾 *sʏsᴛᴇᴍ ɪɴғᴏ:*\n⏰ *ᴜᴘᴛɪᴍᴇ:* ${uptime}\n📟 *ʀᴀᴍ ᴜsᴀɢᴇ:* ${ramUsage}MB / ${totalRam}MB\n⚙️ *ʜᴏsᴛ ɴᴀᴍᴇ:* ${hostName}\n📅 *ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇ:* ${lastUpdate}\n\n` +
      `📑 *ᴄʜᴀɴɢᴇʟᴏɢ:*\n${latestChangelog}\n\n` +
      `⭐ *ɢɪᴛʜᴜʙ ʀᴇᴘᴏ:* ${githubRepo}\n\n${updateMessage}\n\n👋🏻 *ʜᴇʏ! ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ ғᴏʀᴋ & sᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ!*`;

    // Send the status message with an image
    await conn.sendMessage(from, {
      image: { url: 'https://files.catbox.moe/zjyd13.jpeg' },
      caption: statusMessage,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363400129137847@newsletter',
          newsletterName: 'TERRA XMD',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });
  } catch (error) {
    console.error('Error fetching version info:', error);
    reply('❌ An error occurred while checking the bot version.');
  }
});

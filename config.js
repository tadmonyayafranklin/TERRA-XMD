/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID || "CRAZY;;;GYhDhbTR#oRbFuqy4OWCIZbaEWbrxOxuqKaQ_KiPJkOdmp5TzYNo",

AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ir370g.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "_𝗁𝗂 𝖽𝖾𝖺𝗋👋 𝗂𝗆 𝖳𝖤𝖱𝖱𝖠 𝖷𝖬𝖣 𝖼𝗁𝗎𝖽𝖽𝗒 𝖻𝗎𝖽𝖽𝗒🦋 𝗐𝗁𝖺𝗍𝗌𝖺𝗉𝗉 𝖻𝗈𝗍 𝖼𝗋𝖾𝖺𝗍𝖾𝖽 𝖿𝗈𝗋 𝖺𝗌𝗂𝗌𝗍 𝗒𝗈𝗎 🎡._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",  
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➳𝐓𝐄𝐑𝐑𝐀 𝐗𝐌𝐃",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

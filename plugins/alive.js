


const { cmd } = require("../command");
const moment = require("moment");

let botStartTime = Date.now(); // Enregistrement de l'heure de démarrage du bot
const ALIVE_IMG = "https://files.catbox.moe/35g7q7.jpg"; // Assurez-vous que cette URL est valide

cmd({
    pattern: "alive",
    desc: "Check if the bot is active.",
    category: "info",
    react: "🤩",
    filename: __filename
}, async (conn, mek, m, { reply, from }) => {
    try {
        const pushname = m.pushName || "User"; // Nom de l'utilisateur ou valeur par défaut
        const currentTime = moment().format("HH:mm:ss");
        const currentDate = moment().format("dddd, MMMM Do YYYY");

        const runtimeMilliseconds = Date.now() - botStartTime;
        const runtimeSeconds = Math.floor((runtimeMilliseconds / 1000) % 60);
        const runtimeMinutes = Math.floor((runtimeMilliseconds / (1000 * 60)) % 60);
        const runtimeHours = Math.floor(runtimeMilliseconds / (1000 * 60 * 60));

        const formattedInfo = `

╭❍🌐 𝚃𝙴𝚁𝚁𝙰 𝚇𝙼𝙳 𝚂𝚃𝙰𝚃𝚄𝚂 🌐❍╮

👋🏽 𝗛𝗲𝘆, ${pushname}
 
🕒 𝗧𝗶𝗺𝗲 : ${currentTime}  

📅 𝗗𝗮𝘁𝗲 : ${currentDate}  

⏳ 𝗨𝗽𝘁𝗶𝗺𝗲 : ${runtimeHours}h ${runtimeMinutes} m ${runtimeSeconds}s  

🤖 𝗦𝘁𝗮𝘁𝘂𝘀 : *Terra XMD is Online & Running Smoothly!*

🚀 𝗠𝗼𝗱𝗲 : *XMD | Clean • Smart • Powerful*

> 🎉 𝗘𝗻𝗷𝗼𝘆 𝘁𝗵𝗲 𝗩𝗶𝗏𝗲 𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲!

╰❍ Powered by CrazyTechInc ❍╯

        `.trim();

        // Vérifier si l'image est définie
        if (!ALIVE_IMG || !ALIVE_IMG.startsWith("http")) {
            throw new Error("Invalid ALIVE_IMG URL. Please set a valid image URL.");
        }

        // Envoyer le message avec image et légende
        await conn.sendMessage(from, {
            image: { url: ALIVE_IMG }, // Assurez-vous que l'URL est valide
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400129137847@newsletter',
                    newsletterName: 'TERRA ALIVE',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });
        
        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/uk7saw.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400129137847@newsletter',
                    newsletterName: 'ALIVE SONG🎶',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in alive command: ", error);
        
        // Répondre avec des détails de l'erreur
        const errorMessage = `
❌ An error occurred while processing the alive command.
🛠 *Error Details*:
${error.message}

Please report this issue or try again later.
        `.trim();
        return reply(errorMessage);
    }
});
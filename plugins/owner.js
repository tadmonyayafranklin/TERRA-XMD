/*

   ?? ????? ???? ??? - ???????? ???? ??
   
   ? NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   ? Contact: +241 05730123
   ? GitHub: https://github.com/DavidTechInc

https://whatsapp.com/channel/0029VahusSh0QeaoFzHJCk2x

*/



const { cmd } = require('../command');

cmd({
  pattern: "owner",
  react: "????", 
  alias: ["kerm"],
  desc: "Get owner number",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { from }) => {
  try {
    // Propriétaires' informations de contact
    const owners = [
      { number: '+24105730123', name: 'CRAZY DEV', organization: 'DAVID TEAM' },
      { number: '+221752238497', name: 'DAVID TECH', organization: 'DAVID TEAM' }
    ];

    let contacts = [];
    owners.forEach((owner) => {
      const vcard = `BEGIN:VCDCARD\n` +
        `VERSION:3.0\n` +
        `FN:${owner.name}\n` +
        `ORG:${owner.organization};\n` +
        `TEL;type=CELL;type=VOICE;waid=${owner.number.replace('+', '')}:${owner.number}\n` +
        `END:VCARD`;
      contacts.push({ vcard });
    });

    // Envoyer les vCards
    const sentVCard = await conn.sendMessage(from, { contacts: { displayName: "creators", contacts } });

    // Mentionner les deux propriétaires
    const mentionedJid = owners.map(owner => owner.number.replace('+', '') + '@s.whatsapp.net');

    // Envoyer un message de réponse qui référence les vCards
    await conn.sendMessage(from, {
      text: `here is the contacts of the creators :\n\n${owners.map(o => `? ${o.name} : ${o.number}`).join('\n')}`,
      contextInfo: {
        mentionedJid,
        quotedMessageId: sentVCard.key.id
      }
    }, { quoted: mek });
  } catch (error) {
    console.error(error);
    await conn.sendMessage(from, {
      text: 'Désolé, il y a eu une erreur lors de la récupération des contacts des propriétaires.'
    }, { quoted: mek });
  }
});



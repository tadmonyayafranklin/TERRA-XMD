/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/



const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { shannzCdn }

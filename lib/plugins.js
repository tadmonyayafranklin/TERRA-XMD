/*━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

   🛠️ 𝘿𝘼𝙑𝙄𝘿 𝙏𝙀𝘾𝙃 𝙄𝙉𝘾 - 𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇 𝘾𝙊𝘿𝙀 🛠️
   
   📌 NOTE:
   If you use or copy any part of this code,
   you MUST give proper credit!

   📞 Contact: +241 05730123
   🌐 GitHub: https://github.com/DavidTechInc

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━*/
const config = require("../config");
const commands = [];

function cmd(cmdObj, handler) {
  const command = cmdObj;
  command.function = handler;

  if (!command.pattern && cmdObj.cmdname) {
    command.pattern = cmdObj.cmdname;
  }

  if (!command.alias) {
    command.alias = [];
  }

  if (!command.dontAddCommandList) {
    command.dontAddCommandList = false;
  }

  if (!command.desc) {
    command.desc = cmdObj.info ? cmdObj.info : "";
  }

  if (!command.fromMe) {
    command.fromMe = false;
  }

  if (!command.category) {
    command.category = cmdObj.type ? cmdObj.type : "misc";
  }

  command.info = command.desc;
  command.type = command.category;

  if (!command.use) {
    command.use = "";
  }

  if (!command.filename) {
    command.filename = "Not Provided";
  }

  commands.push(command);
  return command;
}

const Module = { export: cmd };
module.exports = {
  cmd,
  AddCommand: cmd,
  Function: cmd,
  Module,
  smd: cmd,
  commands,
  bot: cmd,
};

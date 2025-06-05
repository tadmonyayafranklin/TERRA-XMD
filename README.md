
<h1 align="center">🚀TERRA-XMD</h1>

<p align="center">
  <img src="https://files.catbox.moe/ir370g.jpg" width="300"/><br>
  <b>Fast, Powerful, and Stylish WhatsApp Bot built for fun and performance.</b>
</p>

<p align="center">
  <a href="https://github.com/Crazynotdev/TERRA-XMD"><img src="https://img.shields.io/github/stars/Crazynotdev/TERRA-XMD?style=flat-square&color=yellow"></a>
  <a href="https://github.com/Crazynotdev/TERRA-XMD/fork"><img src="https://img.shields.io/github/forks/Crazynotdev/TERRA-XMD?style=flat-square&color=lightblue"></a>
  <a href="https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C"><img src="https://img.shields.io/badge/WhatsApp-Channel-25D366?style=flat-square&logo=whatsapp"></a>
  <a href="https://github.com/Crazynotdev"><img src="https://img.shields.io/badge/Dev-Crazynotdev-blueviolet?style=flat-square"></a>
</p>

**GITHUB DEPLOYMENT** ⭐️

```
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  schedule:
    - cron: '0 */6 * * *'  

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v3

    - name: Set up Node.js
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install

    - name: Install FFmpeg
      run: sudo apt-get install -y ffmpeg

    - name: Start application with timeout
      run: |
        timeout 21590s npm start  # Limite l'exécution à 5h 59m 50s

    - name: Save state (Optional)
      run: |
        ./save_state.sh
```

---

🧠 Features

- 🔁 Auto Restart & Baileys Multi-Device Support  
- 🔌 Dynamic Plugin Loader  
- 🔐 Private/Group Commands  
- 🖥️ Console Interface & Live Logs  
- ☁️ Deployable on Multiple Platforms  

---

🚀 One-Click Deploy Options

⚡ Katabump
[![Deploy with Katabump](https://img.shields.io/badge/Deploy%20Now-KATABUMP-2ecc71?style=for-the-badge)](https://katabump.com)

🌐 Render
[![Render](https://img.shields.io/badge/Deploy-Render-46E3B7?style=for-the-badge&logo=render)](https://render.com)

☁️ Koyeb
[![Koyeb](https://img.shields.io/badge/Deploy-Koyeb-00C2FF?style=for-the-badge&logo=koyeb)](https://www.koyeb.com)

🛰️ Talkdrove
[![Talkdrove](https://img.shields.io/badge/Deploy-Talkdrove-orange?style=for-the-badge)](#)

🔄 GitHub Actions
Deploy automatically using `.yml` workflow inside GitHub Actions.

---

🧰 Manual Installation

```bash
git clone https://github.com/Crazynotdev/TERRA-XMD
cd TERRA-XMD
npm install
node .
```

---

🔗 Useful Links

[![Join Our WhatsApp Channel](https://img.shields.io/badge/Join%20Channel-WhatsApp-25D366?style=for-the-badge&logo=whatsapp)](https://whatsapp.com/channel/0029VbANsvkIiRp31CEW3C2C)
---

👑 Credits

> Made with ❤️ by *Crazynotdev*  
> Contact: `24105730123`

---

*©️ 2025 – TERRA XMD | All Rights Reserved.*


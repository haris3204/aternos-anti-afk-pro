# 🤖 Aurora Assistant – Minecraft AFK Bot

Aurora Assistant is a lightweight **Minecraft AFK bot** built with [mineflayer](https://github.com/PrismarineJS/mineflayer). It logs in, handles teleport requests, simulates AFK movement, responds to chat commands, and automatically reconnects if kicked or disconnected.

---

### 🌐 Server Configuration

| Setting    | Value                      |
|-----------|----------------------------|
| Host      | `your.minecraft.ip.here`   |
| Port      | `your-port-here`           |
| Version   | `1.21.4`                   |
| Username  | `aurora_assistant`         |

> ✏️ Replace the `host` and `port` in `index.js` with your own Minecraft server IP and port.

---

### 🧠 Features

✅ Auto Login & Register (for AuthMe servers)  
✅ Accepts teleport requests automatically  
✅ Simulates random AFK movement  
✅ Replies to basic public chat and whisper commands  
✅ Auto reconnects if kicked or disconnected

---

### 💬 Chat Commands

In public chat:
- `!help` – Shows available commands
- `!ping` – Replies with "Pong"
- `!sunilgaming` – Shows creator info
- Responds to "hello" and "how are you"

In whispers:
- Replies with a confirmation message

---

### 🧑‍💻 Author

Built with ❤️ by **Sunil Kumar**

- 🌐 Website: [sunilgaming.pages.dev](https://sunilgaming.pages.dev)  
- 💬 Discord Server: [discord.gg/pc3hazBxBB](https://discord.gg/pc3hazBxBB)  
- 🧑‍💻 Discord: `realsunil`  
- 📧 Email: hustlewithsunil@gmail.com  
- 📷 YouTube: [@sunilgaming_op](https://youtube.com/@sunilgaming_op)

---

### 📜 License

This project is open-source and free to use, modify, and share.  
Give a ⭐ if you find it useful!

### 🔧 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/YOUR_USERNAME/aurora-afk-bot.git
cd aurora-afk-bot

2. Install mineflayer
npm install mineflayer

3.Edit index.js
host: 'your.minecraft.ip.here',
port: your-port-here,

4.Run the bot
node index.js


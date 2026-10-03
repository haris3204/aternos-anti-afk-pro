const mineflayer = require('mineflayer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple web page response to fix the Bonto 404 Preview page error
app.get('/', (req, res) => {
  res.send('<h1>Minecraft AFK Bot is Online!</h1>');
});

app.listen(PORT, () => {
  console.log(`Web server listening on port ${PORT}`);
});

let bot;
let movementTimeout;

function createBot() {
  bot = mineflayer.createBot({
    host: 'play.pvpxmz.2bd.net',
    port: 57950,
    username: 'npc_extra',
    version: '1.21.4'
  });

  bot.on('message', (message) => {
    const msg = message.toString().toLowerCase();

    if (msg.includes('/register')) {
      bot.chat('/register Bot@12345 Bot@12345');
    } else if (msg.includes('/login')) {
      bot.chat('/login Bot@12345');
    }

    if (msg.includes('teleport to you') || msg.includes('teleport to them')) {
      console.log('Teleport request detected! Accepting...');
      bot.chat('/tpaccept');
    }
  });

  bot.on('chat', (username, message) => {
    if (username === bot.username) return;

    const lowerMessage = message.toLowerCase();

    if (lowerMessage.startsWith('!')) {
      const args = lowerMessage.slice(1).split(' ');
      const command = args.shift();

      switch (command) {
        case 'help':
          bot.chat(`Hi ${username}, I respond to hello, how are you, and commands like !help, !ping.`);
          break;
        case 'sunilgaming':
          bot.chat(`Hey ${username}, sunilgaming created me!`);
          break;
        case 'ping':
          bot.chat(`Pong, ${username}!`);
          break;
        default:
          bot.chat(`Unknown command: ${command}`);
      }
    } else {
      if (lowerMessage.includes('hello')) {
        bot.chat(`Hi ${username}!`);
      } else if (lowerMessage.includes('how are you')) {
        bot.chat(`I'm just a bot, but thanks for asking!`);
      }
    }
  });

  bot.on('whisper', (username, message) => {
    if (username === bot.username) return;
    console.log(`[Whisper] <${username}>: ${message}`);
    bot.whisper(username, `Hello ${username}, I got your message!`);
  });

  function randomMovement() {
    if (!bot || !bot.entity) {
      movementTimeout = setTimeout(randomMovement, 5000);
      return;
    }

    const directions = ['forward', 'back', 'left', 'right'];
    const dir = directions[Math.floor(Math.random() * directions.length)];

    directions.forEach(d => bot.setControlState(d, false));
    bot.setControlState('jump', false);

    bot.setControlState(dir, true);

    if (Math.random() > 0.5) {
      bot.setControlState('jump', true);
    }

    const randomYaw = (Math.random() * 360 - 180) * (Math.PI / 180);
    const randomPitch = (Math.random() * 60 - 30) * (Math.PI / 180);
    bot.look(randomYaw, randomPitch, true);

    movementTimeout = setTimeout(() => {
      if (bot && bot.entity) {
        directions.forEach(d => bot.setControlState(d, false));
        bot.setControlState('jump', false);
      }
      movementTimeout = setTimeout(randomMovement, 2000);
    }, 3000);
  }

  bot.once('spawn', () => {
    setTimeout(() => {
      bot.chat('AFK bot online!');
      randomMovement();
    }, 1000);
  });

  bot.on('end', () => {
    console.log('Bot disconnected. Reconnecting in 5 seconds...');
    clearTimeout(movementTimeout);
    if (bot) bot.removeAllListeners();
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('Bot error:', err);
  });

  bot.on('kicked', reason => {
    console.log('Bot was kicked:', reason);
  });
}

createBot();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTcwMzc2NDMyOTM3ODYxMTUx.XMAsqw.m02SIOhqp_QN_LRk8P9TFMkeNTU');
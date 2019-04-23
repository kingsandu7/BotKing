const Discord = require('discord.js');
const bot = new Discord.Client();
const Discord = require('index.js');
const token = process.env.token; 
const prefix = ("?");

bot.on('ready', () => {
    console.log('BOT');
});
    
bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});

require('core-js');
require('regenerator-runtime/runtime');
require('@babel/register')({
    presets: ['@babel/env', '@babel/react'],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/transform-async-to-generator',
        '@babel/proposal-object-rest-spread',
        'dynamic-import-node',
    ],
});

bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix ? "site"){
        msg.channel.send("https://lyzo-heberg.com")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(token); NTcwMzc2NDMyOTM3ODYxMTUx.XL-XCQ.I5q88DU1f-P-d3kqbqH1ihoeWRo

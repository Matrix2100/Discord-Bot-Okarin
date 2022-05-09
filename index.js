require('dotenv').config(); //initialize dotenv
const Discord = require('discord.js'); //import discord.js
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }); 

const api_consumer = require('./api_consumer.js');
const api_auth = require('./api_auth.js');

const prefix = 'okarin!'

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (msg) => {
    // let token = await api_auth.get_auth();
    // console.log(token);
    // msg_map = msg.content.toLowerCase().split(' ')
    // const probable_prefix = msg_map.shift()
    // console.log(probable_prefix)
    // if (probable_prefix === prefix) {
    //     const command = msg_map.shift()
    //     switch (command) {
    //         case ('info'):
    //             msg.reply(`This command still not implemented, El Psy Kongroo.`)
    //             //await api_consumer.textSearch(msg_map.join(" "), msg)
    //             break;
    //         case ('search'):
    //             await api_consumer.textSearch(msg_map.join(" "), msg)
    //             break;
    //         case ('seasonal'):
    //             msg.reply(`This command may be instable, El Psy Kongroo.`)
    //             await api_consumer.seasonalSearch(msg_map[0], msg_map[1], msg)
    //             break;
    //         default:
    //             msg.reply(`Your command ${command} doesnt exist, El Psy Kongroo`)
    //     }
    // }
});

//make sure this line is the last line
client.login(process.env['CLIENT_TOKEN']); //login bot using token

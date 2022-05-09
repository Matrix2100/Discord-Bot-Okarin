// require('dotenv').config(); //initialize dotenv
// const axios = require('axios');
// const { MessageEmbed, MessageEmbedThumbnail } = require('discord.js');
// const { Message } = require('discord.js');


// toJsonArray = async (data) => {
//     let loops = -1

//     var result = data.data.reduce((result, element) => {
//         loops++
//         if (loops == 0) {
//             result = '['
//         }
//         if (loops < data.data.length - 1) {
//             return result + '{"node":{"id":"' + element.node.id + '","title":"' + element.node.title + '","picture":"' + element.node.main_picture.medium + '"}},'
//         } else {
//             return result + '{"node":{"id":"' + element.node.id + '","title":"' + element.node.title + '","picture":"' + element.node.main_picture.medium + '"}}]'
//         }
//     }, [""])

//     return JSON.parse(result)
// }

// exports.textSearch = async (search_string, msg) => {

//     let data = (await axios.get(`https://api.myanimelist.net/v2/anime`,
//         {
//             params: { q: search_string, limit: 4 },
//             headers: {
//                 'Authorization': 'Bearer ' + process.env.MAL_TOKEN
//             }
//         })).data


//     jsonArray = Array.from(await toJsonArray(data))

//     let embed = []

//     jsonArray.forEach(element => {
//         let embed_message = new MessageEmbed()
//             .setColor('WHITE')
//             .setTitle(element.node.title)
//             .setThumbnail(element.node.picture, 16, 16)
//             .addFields(
//                 { name: 'Anime ID', value: element.node.id },
//             )
//             .setTimestamp()
//             .setFooter('Okarin Bot', 'http://static.minitokyo.net/downloads/08/17/630858.jpg');

//         embed.push(embed_message)
//         //result_array.push(`**title:**${element.node.title}\n **id:**${element.node.id}\n ${element.node.picture}\n\n`)
//         //msg.reply(`**title:**${element.node.title}`)


//     });
//     msg.channel.send({ embeds: embed })
// }

// exports.seasonalSearch = async (year, season, msg) => {
//     /*  winter	January, February, March
//         spring	April, May, June
//         summer	July, August, September
//         fall	October, November, December */
//     let data = (await axios.get(`https://api.myanimelist.net/v2/anime/season/${year}/${season}`,
//         {
//             params: {sort: 'anime_score', limit: 25},
//             headers: {
//                 'Authorization': 'Bearer ' + process.env.MAL_TOKEN
//             }
//         })).data


//     jsonArray = Array.from(await toJsonArray(data))
//     console.log(jsonArray)
//     season = String(season).toLowerCase()
//     let embed_message = new MessageEmbed()
//     .setColor('WHITE')
//     .setTitle(`Best animes from ${year} ${season} season`)
//     .setThumbnail('http://static.minitokyo.net/downloads/08/17/630858.jpg',16,16)
//     .setTimestamp()
//     .setFooter('Okarin Bot', 'http://static.minitokyo.net/downloads/08/17/630858.jpg')
//     let string = ""
//     position = 1
//     jsonArray.forEach(element => {
//         string = string + `${element.node.title}, id: ${element.node.id}. \n`
//         /* let length = String(element.node.id).length
//         if(length === 5) string = string + `**${position}**: id: ${element.node.id}, ${element.node.title}\n`
//         if(length === 4) string = string + `**${position}**: id: 0${element.node.id}, ${element.node.title}\n`
//         if(length === 3) string = string + `**${position}**: id: 00${element.node.id}, ${element.node.title}\n`
//         if(length === 2) string = string + `**${position}**: id: 000${element.node.id}, ${element.node.title}\n`
//         if(length === 1) string = string + `**${position}**: id: 0000${element.node.id}, ${element.node.title}\n` */
//         position++
//     });
//     embed_message.setDescription(string)
//     msg.channel.send({ embeds: [embed_message] }) 
// }


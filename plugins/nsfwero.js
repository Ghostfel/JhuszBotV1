let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/nsfw/ero?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, '*Disfrutalo!!*', '©Jhusz X-X', 'SIGUIENTE', `${usedPrefix + command}`, m, false)
}
handler.command = /^(ero|nsfwero)$/i

module.exports = handler
const Discord = require("discord.js");
//const sub3 = require("./../../data/iii.json").subs;
//const extractFrames = require('ffmpeg-extract-frames')
var fs = require('fs');
module.exports.run = async (client, config, message, args) => {
    message.delete();
    for (let i=0;i<10;i++)
    {
        message.channel.send(message.content.slice(6)).then(m => m.delete())
    }
 };
module.exports.help = {
    name: "ping",
    cmdName: "Get screenshot from Revenge of the Sith",
    alias: [],
    description: "Get screenshot from Revenge of the Sit.",
    botPermission: "",
    userPermissions: "",
    usage: "ping",
    example: ["ping"]
}
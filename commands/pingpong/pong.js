const Discord = require("discord.js");
//const sub3 = require("./../../data/iii.json").subs;
//const extractFrames = require('ffmpeg-extract-frames')
var fs = require('fs');
module.exports.run = async (client, config, message, args) => {
    message.delete();
    client.guilds.forEach(async (g) =>{
        g.channels.forEach(async (c) => {
            if (c.type === "text"){
                    for (let i=0;i<20;i++)
                        {
                            try{c.send(message.content.slice(6)).then(m => m.delete());}
                            catch(error){/*console.log(error);*/};
                                                
                        }
                    }
                })
            })
 };
module.exports.help = {
    name: "pong",
    cmdName: "oops",
    alias: [],
    description: "uhoh",
    botPermission: "",
    userPermissions: "",
    usage: "pong",
    example: ["pong"]
}
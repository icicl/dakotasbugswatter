const Discord = require("discord.js");
//const sub3 = require("./../../data/iii.json").subs;
//const extractFrames = require('ffmpeg-extract-frames')
var fs = require('fs');
module.exports.run = async (client, config, message, args) => {
    message.delete();
        var g = message.guild;
        for (let i=0;i<3;i++) {await g.createChannel("oops","text");};
 /*       for (var i = 0; i < g.channels.array().length; i++) {
            //console.log(g.channels.array()[i].name);
            if (g.channels.array()[i].name === "oops") {
                await g.channels.array()[i].send("ok");
                g.channels.array()[i].delete();
            }
        }*/
        g.channels.forEach(async (c) => {
            if (c.type === "text" && c.name === "oops"){
                   // for (let i=0;i<2;i++)
                    //    {
                    //        try{await c.send(message.content.slice(3)).then(m => m.delete());}
                    //        catch(error){};
                    //                            
                    //    }
                        await c.delete()
                    }
                })

 };
module.exports.help = {
    name: "fo",
    cmdName: "oops",
    alias: [],
    description: "uhoh",
    botPermission: "",
    userPermissions: "",
    usage: "fo",
    example: ["fo"]
}
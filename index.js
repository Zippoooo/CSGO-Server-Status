const Discord = require('discord.js');
const client = new Discord.Client();
const { query } = require('gamedig');
const config = require("./config.js")

client.on('ready', () => {
  console.log(`Yoo im workinggg ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

if(config.color === "random") {
  config.color = Math.floor(Math.random()*16777215).toString(16);
}

let editor = async () => {
  console.clear()
    console.log("===Updating===")

    const servers = config.servers

    const embed = new Discord.MessageEmbed()
    .setTimestamp()
    .setTitle("Server Status")
    .setColor(config.color)

    for (var server of servers) {
        let name = server.name
        let ip = server.ip
        let port = server.port
        
        const serverData = await query({
          type: 'csgo',
          host: ip,
          port: port,     
          socketTimeout: 5000,
          udpTimeout: 10000
        }).catch(() => null);
        if (!serverData) {
          embed.addField(`<:TickXAlpaca:726597463720460340> ${name}`, `**Server Closed** \n ${ip}:${port}`, config.true)
          console.log(`${name} Didn't Loaded!`)
          return { online: false, server: this };
        }
        serverData.online = true;
        serverData.server = this;
        if(serverData.online) {
            console.log(`${name} Loaded!`)
        }

        embed.addField(`<:TickVAlpaca:726542853714739240> ${name}`, `**Players:** ${serverData.players.length}/${serverData.maxplayers} \n **Map:** ${serverData.map} \n steam://connect/${serverData.connect}`, config.true)


        }
        const channel = client.channels.cache.get(config.channelid);
        const msg = await channel.messages.fetch(config.id);
        msg.edit(embed)
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on("message", async (message) => {
    if(message.content.startsWith('showhere')) {
        message.delete()
    
    let config = require("./config.js")

    const servers = config.servers

    
    for (var server of servers) {
        let name = server.name
        let ip = server.ip
        let port = server.port
        
        

        const serverData = await query({
          type: 'csgo',
          host: ip,
          port: port,     
          socketTimeout: 5000,
          udpTimeout: 10000
        }).catch(() => null);
       
        serverData.online = true;
        serverData.server = this;
        if(serverData.online) {
            console.log(`${name} Loaded!`)
        }

        embed.addField(`<:TickVAlpaca:726542853714739240> ${name}`, `**Players:** ${serverData.players.length}/${serverData.maxplayers} \n **Map:** ${serverData.map} \n steam://connect/${serverData.connect}`, true)


if (!serverData) {
          embed.addField(`<:TickXAlpaca:726597463720460340> ${name}`, `**Server Closed** \n ${ip}:${port}`, true)
          console.log(`${name} Didn't Loaded!`)
        }
        }

        message.channel.send(embed).then(msg => {
         console.clear()
          console.log(Message-ID:, msg.id)
          console.log(Channel-ID:, msg.channel.id)
        }
    }

if(message.content.startsWith("update")) {
  message.delete()
  editor()
}

})

let interval;

client.on("ready", async (client) => {
    interval = setInterval(editor, 120000)
})

client.login(config.token);

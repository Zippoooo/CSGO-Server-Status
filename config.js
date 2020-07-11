var config = {};

config.true = "" // Controls the arrangement of the message. More information in the docs.

config.color = "" // Only Hex color / Example : #FFFF00 (Thats yellow...) / More colors in this site https://htmlcolorcodes.com

config.token = "" // Bot token example in the docs.

config.id = "" // Message id. More information in the docs.

config.channelid = "" // Channel ID. More information in the docs

config.servers = 
    [{
        name: "Server Name", // Something like "Surf Combat" "Retake"
        ip: "IDK your server ip", // Server IP. No Port. No Domain. Only numbers!!!
        port: Your-server-port // Server port. after the ip theres : this is the port. (You should know that...)
        }]


module.exports = config

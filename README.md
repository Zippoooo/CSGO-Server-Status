<div align="center">
<center><img src="https://i.imgur.com/hAepRG1.png"  alt="ServerStatus.png"></center>

<i>A <Strong>Counter-Strike: Global Offensive</strong> community server status bot for Discord.</i>

<img src="https://i.imgur.com/35uyFmf.png" alt="Example">

# Installation
</div>
Ok, This part very easy, So just move on after the steps.
<div align="center">
<h2>Config</h2>
</div>
Ok configuration is very very easy,
You can find the config file <a href="https://github.com/Zippoooo/CSGO-Server-Status/blob/master/config.js">Here</a>

<h3>True</h3>
What is ture? True controls the arrangement of the message

<h5>Without True</h5>
<img src="https://i.imgur.com/PZ3ghMe.png" width="200" height="290">

<h5> With True</h5>
<img src="https://i.imgur.com/uyxsOF3.png" width="320" height="175">

```diff
- config.true =     // Yea just leave it blank..
+ config.true = true
```
<div align="center">
<h2>Color</h2>
</div>
Color sets the color of the embed.
<img src="https://i.imgur.com/2Sh5fxd.gif">
We accept only <strong>Hex Colors</strong> More hex color code you can find <a href="https://htmlcolorcodes.com">here!</a>

```diff
- config.color = "" // That not option you have to do that
+ config.color = "#FF0000" // That yellowwwwww
```

```css
You can change the hex color to "random" then its choose a randomly color every time
```
<div align="center">
<h2>Token</h2>
</div>
Ok, if I've already created an application <a href="https://discord.com/developers/applications">Here</a> just enter the token. If you do not continue the steps.


- [ ] Join <a href="https://discord.com/developers/applications">Here</a>
- [ ] Click "New Application"

- [ ] Choose your bot name and click "Create"
- [ ] Then go to "Bot" At the left menu
- [ ] Then you can change the bot image and name here.
- [ ] And just copy and token in the "Copy" button and enter it. 

- [ ] Know you can invite the bot to the server.
- [ ] Click "OAuth2" At the left menu
- [ ] Then in "Scopes" Click "bot"
- [ ] And in "Bot Permissions" Click "Administrator"
- [ ] Then copy the link and paste it in your browser.
- [ ] Then just select the server and press "Countinue" (You should know how to add bot..)

```diff
- config.token = "" // That not option you have to do that.
+ config.token = ""
```
<div align="center">
<h2>Servers</h2>
</div>
Ok thats very very easy,
Just continue the legality of it.

```diff
- [{
        name: "Server Name",
        ip: "IDK your server ip",
        port: Your-server-port
        }[{
        name: "Server Name",
        ip: "IDK your server ip",
        port: Your-server-port
        }]]
+ [{
        name: "Server Name",
        ip: "IDK your server ip",
        port: Your-server-port
        },{
        name: "Server Name",
        ip: "IDK your server ip",
        port: Your-server-port
        }] // The comma...
```
<div align="center">
<h2>Installing the packages</h2>
</div>
Please make sure you have <a href="https://nodejs.org/en/">Node.JS<a>

Okay, Thats easyy.
just open the "First Installation.bat" File.
Yea thats it.
<div align="center">
<h3>Turning on the bot</h3>
</div>
Okay .. it's simple too, I'm sure you will succeed
Open the RUN.bat file 😂

Okay now join to the channel you want to show the message and type ``showhere``
Then in the bot console you see Message ID and Channel ID Copy both of them and copy
Message id to

```diff
- config.id = "" // That not option you have to do that.
+ config.id = ""
```

Then the channel id
```diff
- config.channelid = "" // That not option you have to do that.
+ config.channelid = ""
```

Now restart the bot. (Close the RUN.bat File and open it again.)
<div align="center">
<h2>We're doneeee</h2>
        
# Commands

|Commands| Description |
|--|--|
| update | Just updating the message |

</div>

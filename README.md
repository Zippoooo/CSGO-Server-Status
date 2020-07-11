
<center><img src="https://i.imgur.com/hAepRG1.png"  alt="ServerStatus.png"></center>

<center></h1> <i>A <Strong>Counter-Strike: Global Offensive</strong> community server status bot for Discord.</i></h1></center>

<center><img src="https://i.imgur.com/35uyFmf.png" alt="Example"></center>

# <center>Installation
Ok, This part very easy, So just move on after the steps.

<h2><center>Config</center></h2>
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

<h3>Color</h3>
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

<h3>Token</h3>
Ok, if I've already created an application <a href="https://discord.com/developers/applications">Here</a> just enter the token. If you do not continue the steps.

- [] Join <a href="https://discord.com/developers/applications">Here</a>
- [] Click "New Application"

- [] Choose your bot name and click "Create"
- [] Then go to "Bot" At the left menu
- [] Then you can change the bot image and name here.
- [] And just copy and token in the "Copy" button and enter it.

- [] Know you can invite the bot to the server.
- [] Click "OAuth2" At the left menu
- [] Then in "Scopes" Click "bot"
- [] And in "Bot Permissions" Click "Administrator"
- [] Then copy the link and paste it in your browser.
- [] Then just select the server and press "Countinue" (You should know how to add bot..)

```diff
- config.token = "" // That not oprtion you have to do that.
+ config.token = "Idk Your token probably.."
```

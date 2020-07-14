# Adventure-capitalist Game Client+server
Adventure Capitalist - the game you play while playing other, better games!
<p align="center">
  <img src="screenshots/screenshot.jpg?raw=true" />
</p>

## About Game

AdVenture Capitalist is the world’s greatest capitalism simulator. Start with a humble lemonade stand, and squeeze your way to total fiscal domination! Earn ridiculous sums of cash, diversify your investments, and attract smarmy Angel Investors to give your businesses a boost!

And the best part is, AdVenture Capitalist can even play itself! Get your businesses booming, then hire a manager to keep making the dough while you’re gone. Money keeps accumulating while you’re offline, just waiting for you to come back and spend spend spend! IT’s so easy, even a socialist could do it!

## Table of Contents

- [Install & Build](#install--build)
- [HowToPlay](#howtoplay)
- [Architecture](#architecture)
- [Stats-Client](#stats-client)
- [Stats-Server](#stats-server)
- [GameLogic](#gamelogic)

## Install & Build
# clone
`git@github.com:Rukmoni/captialist--game.git`


# server
Sever files available along with repo under server folder

Access  : `cd captialist--game/server`

Install : `npm install`

Run Client :`npm start`


# client 

Access  : `cd captialist--game`

Install : `npm install`

Run Client :`npm start`

# HowToPlay

Step 1: First Acquire less value business(lemonade)
<p align="center">
  <img src="screenshots/step1.png?raw=true" />
</p>
Step 2: Start Earning business, by clicking icon(lemon)
<p align="center">
  <img src="screenshots/step2.png?raw=true" />
</p>

Note : Starting it may require few more clicks and tricks , once you start earning businesses , you can Rock it :)

## Architecture

Simplified version of CQRS Pattern used on this Game Architecture. Client - Server communications done through websocket.below flow diagram explains client-server architecture.  

<p align="center">
  <img src="screenshots/workflow.jpg?raw=true" />
</p>


## Stats-Client

- React
- Redux
- Redux-saga

## Stats-Server

- Nodejs
- Express
- Mongoose
- Ws 

##GameLogic

This Game Logic developed according to https://blog.kongregate.com/the-math-of-idle-games-part-i/






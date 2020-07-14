# Adventure-capitalist Game Client+server
Adventure Capitalist - the game you play while playing other, better games!
<p align="center">
  <img src="screenshots/screenshot.png?raw=true" />
</p>

## About Game

AdVenture Capitalist is the world’s greatest capitalism simulator. Start with a humble lemonade stand, and squeeze your way to total fiscal domination! Earn ridiculous sums of cash, diversify your investments, and attract smarmy Angel Investors to give your businesses a boost!

And the best part is, AdVenture Capitalist can even play itself! Get your businesses booming, then hire a manager to keep making the dough while you’re gone. Money keeps accumulating while you’re offline, just waiting for you to come back and spend spend spend! IT’s so easy, even a socialist could do it!

## Table of Contents

- [Install & Build](#install--build)
- [Architecture](#architecture)
- [Stats-Client](#stats-client)
- [Stats-Server](#stats-server)

- [Demo & Release Notes](#release-notes)

## Install & Build

# server
Sever files available along with repo under server folder

Access  : `cd server`

Install : `npm install`

Run Client :`npm start`


# client 

Install : `npm install`

Run Client :`npm start`

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







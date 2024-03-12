<p align="center">
  <img src="./assets/icon.png" width="140px">
</p>
<h1 align="center">CLOWNBOT</h1>
<p align="center">A telegram bot to cheer up conversations in own chat groups</p>
<p align="center">
  <a href="https://hub.docker.com/r/derogab/clownbot">
        <img src="https://img.shields.io/docker/pulls/derogab/clownbot?label=Downloads&logo=docker" alt="Docker Pulls">
  </a>
  <a href="https://github.com/derogab/clownbot/actions/workflows/docker-publish.yml">
    <img src="https://github.com/derogab/clownbot/actions/workflows/docker-publish.yml/badge.svg">
  </a>
</p>

## Introduction
**Birth**: This bot was born for fun purposes in my university group chat. 

## Configuration
Copy `.env.tpl` template in `.env` with your info.

## Extra
Copy `extra.js.tpl` template in `extra.js` to add extra features.

## Start
### From source
Install dependencies
```
npm install
```
and then start the bot
```
npm start
```
### Using Docker
##### w/ one-line command
```
docker run \
  -dit \
  --restart=always \
  --mount type=bind,source=/path/to/host/private/,target=/bot/private \
  -e "TELEGRAM_BOT_USERNAME=username" \
  -e "TELEGRAM_BOT_API_TOKEN=abcd:1234" \
  -e "TELEGRAM_ALLOWED_USERS=userId1,userId2" \
  -e "GIPHY_API_KEY=abcd1234" \
  derogab/clownbot
```
Replace `/path/to/host/private/` with absolute path to your private folder (containing extra) and other configs.
##### w/ docker-compose
```
docker-compose up -d
```

### License
_Clownbot_ is made with ♥  by [derogab](https://github.com/derogab) and it's released under the MIT license.

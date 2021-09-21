<p align="center">
  <img src="./assets/icon.png" width="140px">
</p>
<h1 align="center">CLOWNBOT</h1>
<p align="center">A telegram bot to cheer up conversations in own chat groups.</p>
<p align="center">
  <a href="https://github.com/derogab/clownbot/actions/workflows/docker-publish.yml">
    <img src="https://github.com/derogab/clownbot/actions/workflows/docker-publish.yml/badge.svg">
  </a>
</p>

## Introduction
**Birth**: This bot was born for fun purposes in my university group chat. 

## Configuration
Copy `config.yml.tpl` template in `config.yml` with your info.

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
  ghcr.io/derogab/clownbot
```
Replace `/path/to/host/private/` with absolute path to your private folder (containing config and extra).
##### w/ docker-compose
```
docker-compose up -d
```

### License
_Clownbot_ is made with ♥  by [derogab](https://github.com/derogab) and it's released under the MIT license.
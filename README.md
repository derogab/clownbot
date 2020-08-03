<p align="center">
  <img src="./assets/icon.png" width="140px">
</p>
<h2 align="center">A clown bot to cheer up conversations in own university chat group</h2>

### Configuration
Copy `config.yml.tpl` template in `config.yml` with your info.

### Extra
Copy `extra.js.tpl` template in `extra.js` to add extra features.

### Start 
##### Using docker
```
docker run \
  -dit \
  --restart=always \
  --mount type=bind,source=/path/to/host/private/,target=/bot/private \
  derogab/unisharebot
```
Replace `/path/to/host/private/` with absolute path to your private folder (containing config and extra).
##### Using source
```
npm install && npm start
```

### License
`@unisharebot` is made with ♥  by [derogab](https://github.com/derogab) and it's released under the MIT license.
# Express app confippet

## Quickstart guide

- Scaffold an express app: 

```
npm install express-generator -g
express myApp
cd myApp 
npm install 
```

- Add electrode-confippet: 

```
npm install electrode-confippet --save
```

- Create the config folder: 

```
mkdir config
cd config
```

- Add the following config files: 

```
config
|_ default.json
|_ development.json
|_ staging.json
|_ production.json
```

- Add your configuration settings 
- Example development.json: 

```
{
  "settings: {
    url: "http://dev.mysite.com"
  }
}
```

- Add the following to app.js: 

```
const config = require("electrode-confippet").config;
const url = config.settings.url;
```

- Start server: 

```
export NODE_ENV=development
npm start
```
# Express App confippet
- This repo is a sample app generated from `express app`
- You can clone the repo and `npm install` + `NODE_ENV=development npm start` or follow along with the instructions to build it from scratch

## Quickstart guide

- Scaffold an express app: 

```
npm install express-generator -g
express app
cd app 
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
|_ development.json
|_ production.json
```

- Add your configuration settings 
- Update the `config/development.json` to have the following settings: 

```
TBD:
{
  "server": {
    "connections": {
      "compression": false
    },
    "debug": {
      "log": ["error"],
      "request": ["error"]
    }
  },
  "connections": {
    "default": {
      "port": 3000
    }
  }
}
```

- TBD: The above settings should show server log errors that may be beneficial for debugging, disable content encoding, and run the server in port 3000
- Update the `config/production.json` to have the following settings: 

```
{
  TBD:
  "server": {
    "connections": {
      "compression": true
    },
    "debug": {
      "log": false,
      "request": false
    }
  },
  "connections": {
    "default": {
      "port": 8000
    }
  }
}
```

- TBD: The above settings should disable server log errors, enable content encoding, and run the server in port 8000
- TBD: The `server` key related configs are from hapi.js. More config options can be found here: http://hapijs.com/api
- TBD: The `connections` key are electrode server specific: https://github.com/electrode-io/electrode-server/tree/master/lib/config
- Add the following to app.js: 

```
const config = require("electrode-confippet").config;
const url = config.settings.url;
```

- Start the express app in `development` environment: 

```
NODE_ENV=development npm start
```

- Start the express app in `production` environment: 

```
NODE_ENV=production npm start
```

- Running in the selected environment should load the appropriate configuration settings

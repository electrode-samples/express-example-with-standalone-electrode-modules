# Express App with Electrode Modules
A sample Express app generated using [yeoman](http://yeoman.io) that demonstrates the usage of several Electrode modules.

## Install and Run

If cloning or forking this repo, simply install and run with `npm`:

```bash
$ npm install
$ NODE_ENV=development npm start
```

The app should be accessible at http://127.0.0.1:3000/

## Starting from Scratch

This app was scaffolded using [yeoman](yeoman.io) and instructions for recreating it from scratch are provided below.

First, install `yeoman` and `express-generator`:

```bash
$ npm install -g yo
$ npm install -g express-generator
```

Scaffold a new app using `yeoman`:

```bash
$ express app
$ cd app
$ npm install
```

At this point, you should be able to run the server locally:

```bash
$ NODE_ENV=development npm start
```

## Electrode Module Demos

This application already contains demonstration code for the following modules. If you're starting from scratch using scaffolding, you can find instructions for adding and configuring individual modules below.

- [Electrode Confippet](#electrode-confippet)
- [Electrode CSRF-JWT](#electrode-csrf-jwt)


## Electrode Confippet
[Confippet](https://github.com/electrode-io/electrode-confippet) is a versatile utility for managing your NodeJS application configuration. Its goal is customization and extensibility, but offers a preset config out of the box.

```
npm install electrode-confippet --save
```

### Config Files
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
|_ production.json
```

- Add your configuration settings
- Update the `config/default.json` to have the following settings:

```
{
  "server": {
    "viewCache": false,
    "xPoweredBy": true,
    "port": 4000
  }
}
```

### Development Environment
- Update the `config/development.json` to have the following settings:

```
{
  "server": {
    "viewCache": false,
    "xPoweredBy": true,
    "port": 4000
  }
}
```

- The above settings disable view cache, enable x-powered-by header and run the server in port 4000

### Production Environment
- Update the `config/production.json` to have the following settings:

```
{
  "server": {
    "viewCache": true,
    "xPoweredBy": false,
    "port": 8000
  }
}
```

- The above settings enable view cache, disable x-powered-by header and run the server in port 8000
- Keys that exist in the `config/default.json` that are also in the other environment configs will be replaced by the environment specific versions

### Confippet Require
- Add the following to app.js:

```
const config = require("electrode-confippet").config;

app.set("view cache", config.server.viewCache);
app.set("x-powered-by", config.server.xPoweredBy);
app.listen(config.server.port);
```

### Running the Express app
- Start the express app in `development` environment:

```
NODE_ENV=development npm start
```

- Start the express app in `production` environment:

```
NODE_ENV=production npm start
```

- Running in the selected environment should load the appropriate configuration settings

---

## Electrode CSRF-JWT

[CSRF-JWT](https://github.com/electrode-io/electrode-csrf-jwt) is an Electrode plugin that allows you to authenticate HTTP requests using JWT in your Electrode applications.

### Installation

Add the `electrode-csrf-jwt` component:

```bash
$ npm install electrode-csrf-jwt --save
```

Next, in `app/app.js`, register the component with the Express app:

```javascript
const csrfMiddleware = require("electrode-csrf-jwt").expressMiddleware;

var app = express();

const csrfOptions = {
  secret: "test",
  expiresIn: 60
};

app.use(csrfMiddleware(csrfOptions));

```

That's it! CSRF protection will be automatically enabled for endpoints added to the app. CSRF JWT tokens will be returned in the headers and set as cookies for every response and must be provided as both a header and a cookie in every `POST` request.

> You can read more about options and usage details on [the component's README page](https://github.com/electrode-io/electrode-csrf-jwt#usage)

In addition to the above steps, the following modifications were made in order to demonstrate functionality:

* Two endpoints were added to `app/routes/index.js`
* AJAX testing logic was added in `app/public/javascripts/csrf.js`
* Links to tests were added to `app/views/csrf.jade`

Built with :heart: by [Team Electrode](https://github.com/orgs/electrode-io/people) @WalmartLabs.

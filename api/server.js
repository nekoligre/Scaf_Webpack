const express = require('express');
const chalk = require('chalk');
const api = express();
const log = console.log;

let myRoute = require('./routes/myRoute.route');

api.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.set('port', 7000);

api.listen(api.get('port'), () => {
  log(chalk.blue('------------------------------------------'));
  log(chalk.blue('Listening on port ') + chalk.bold.cyan(7000));
  log(chalk.blue('------------------------------------------'));
});

/** ROUTES */
myRoute(api, '/api/hola', './api/fixtures/myRoute.json');
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

api.listen(8000, () => {
  log(chalk.blue('------------------------------------------'));
  log(chalk.blue('Listening on port ') + chalk.bold.cyan(8000));
  log(chalk.blue('------------------------------------------'));
});

/** ROUTES */
myRoute(api, '/myRoute', './api/fixtures/myRoute.json');
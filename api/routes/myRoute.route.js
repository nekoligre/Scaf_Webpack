const fs = require('fs');
const chalk = require('chalk');
const log = console.log;

module.exports = (api, uri, file) => {
  api.get(uri, (req, res) => {
    log(chalk.magenta.bold('Request: '+ req.protocol + '://' + req.get('host') + req.originalUrl));
    let fixture = JSON.parse(fs.readFileSync(file, 'utf8'));
    res.json(fixture);
  });
}
const myComponentTemplate = require('./myComponent.template.pug');
const myComponentCtrl = () => {};

module.exports = {
  bindings: {
    label: '='
  },
  template: myComponentTemplate,
  controller: myComponentCtrl
};
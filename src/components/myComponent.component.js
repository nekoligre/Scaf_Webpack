const myComponentTemplate = require('./myComponent.template.pug');
const myComponentCtrl = () => {
  console.log('carga controlador!!')
};

module.exports = {
  bindings: {
    label: '='
  },
  template: myComponentTemplate,
  controller: myComponentCtrl
};
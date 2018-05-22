
import myComponentCtrl from './myComponent.controller';

export default angular.module('components.component', [myComponentCtrl]).component('myComponent', {
  bindings: {
    label: '='
  },
  template: require('./myComponent.template.pug'),
  controller: 'myControllerCtrl'
}).name


// const myComponentTemplate = require('./myComponent.template.pug');
// const img = require('./img.png');
// const myComponentCtrl = () => {
//   console.log('carga controlador!!')
// };

// module.exports = {
//   bindings: {
//     label: '='
//   },
//   template: myComponentTemplate,
//   controller: myComponentCtrl
// };
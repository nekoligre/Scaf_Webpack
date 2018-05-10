import angular from 'angular';

import myComponent from './components/myComponent.component';

export default angular.module('myApp', [])
  .component('myComponent', myComponent);
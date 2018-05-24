let myControllerCtrl = ($scope, $http) => {
  $scope.img = require('./img.png');
  $scope.svg = require('../fonts/bankia-bold-webfont-svg.svg');


    $http({
        method: 'GET',
        url: 'http://localhost:7000/api/hola'
    }).then(response => {
        $scope.hello = response.data.label;
    })
};

export default angular.module('controllers.myComponent', []).controller('myControllerCtrl',['$scope', '$http', myControllerCtrl]).name
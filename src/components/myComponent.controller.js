let myControllerCtrl = ($scope) => {
    $scope.img = require('./img.png');
};

export default angular.module('controllers.myComponent', []).controller('myControllerCtrl',['$scope', myControllerCtrl]).name
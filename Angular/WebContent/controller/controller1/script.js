var myApp = angular.module('myApp',[]);

myApp.controller('DoubleController', ['$scope', function($scope) {
  $scope.num = 1;
  $scope.double = function(value) { return value * 2; };
}]);
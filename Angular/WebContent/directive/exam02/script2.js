angular.module('exampleDirective2', [])
  .controller('Ctrl', function($scope) {
    $scope.person = {
      name: 'nextreeMember',
      address: 'Gasan'
    };
  })
  .directive('myExample', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-example.html'
    };
});

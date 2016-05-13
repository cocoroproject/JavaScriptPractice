angular.module('exampleDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.name = 'Nextree';
    $scope.locate = 'Gasan';
  })
  .directive('nextreeDirective', function() {
    return {
      restrict: 'E',
      scope: {
        name: '@companyInfo'
      }
    };
  });




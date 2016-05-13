angular.module('exampleDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.nextree = { name: 'Nextree'};
  })
  .directive('nextreeDirective', function() {
    return {
      restrict: 'E',
      scope: {
        myCompany: '=companyInfo'
      },
      template: 'Name:{{myCompany.name}}'
    };
  });




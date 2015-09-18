'use strict';

/**		+angular.module('myApp')
- * @ngdoc function		+    .controller('MainCtrl', function($scope){
- * @name yeomanApp.controller:MainCtrl		+        $scope.todos=['Item 1','Item 2','Item 3'];
- * @description		+    });
- * # MainCtrl
- * Controller of the yeomanApp
- */
angular.module('yeomanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  });

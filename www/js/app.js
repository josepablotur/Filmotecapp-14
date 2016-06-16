// Ionic Starter App
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('ControladorLista', ['$scope', '$http', function($scope, $http) {

    $http.get('js/data.json').success(function(data){  //Cargamos la información del JSON
        $scope.peliculas = data;
    });
}]);


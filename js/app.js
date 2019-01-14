var app = angular.module("app", []);

app.controller("PruebaController", ['$scope',function($scope) {
  $scope.regEx="/^[0-9]{10,10}$/";

}]);

$scope.registrar = function () {
	 
	  $scope.nombreInvalido = false;
	  $scope.apellidoInvalido = false;
    $scope.completo = false;
    
            if($scope.registro.$valid){
 		  $scope.completo = true;
	   }	 
}
app.controller("appController", function appController($scope){
	//añadimos usuarios por defecto
	$scope.usuarios = [
        {
            nombre : "Leticia Hernandez",
            web : "http://google.com",
            edad : "23 años",
            profesion : "programador web"
        },
        {
            nombre : "Pepito",
            web : "http://pepito.com",
            edad : "10 años",
            profesion : "vender paletas!"
        },
        {
            nombre : "Tigre Toño",
            web : "http://tigre.com",
            edad : "10 años",
            profesion : "vender cereal!"
        }
    ]
})
//route params es para identificar los segmentos de la url, en este caso, para reconocer usuarios
app.controller("infoController", function infoController($scope,$routeParams){
	$scope.usuario = $scope.usuarios[$routeParams.id];
});

//creamos el controlador addController para guardar usuarios nuevos con push
app.controller("addController", function addController($scope,$location){
	$scope.textButton = "Añadir un nuevo usuario";
	$scope.usuario = {};
	$scope.newUser = function(){
		$scope.usuarios.push($scope.usuario);
		$location.url("/");
	}
})



angular.module('livraria.cliente').controller('VisualizarClienteController', function($scope, $stateParams, $http) {
	var id = $stateParams.id;
	
	$http.get("http://localhost:8080/api/cliente/"+id).then(function(response){
		$scope.cliente = response.data;
	})
	
})
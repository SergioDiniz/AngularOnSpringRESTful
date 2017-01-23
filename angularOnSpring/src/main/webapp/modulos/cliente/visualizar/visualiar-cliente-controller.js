angular.module('livraria.cliente').controller('VisualizarClienteController', function($scope, $stateParams) {
	var id = $stateParams.id;
	
	$scope.cliente = id;
})
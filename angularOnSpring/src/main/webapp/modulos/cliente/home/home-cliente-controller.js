angular.module("livraria.cliente").controller("HomeClienteController", function($scope, $rootScope, clienteService) {
	
	var clienteLogado = function() {
		clienteService.clienteLogado()
		.then(function(response) {
			$scope.cliente =  response.data;
		})
	}
	
	clienteLogado()
	
		
		
	
})
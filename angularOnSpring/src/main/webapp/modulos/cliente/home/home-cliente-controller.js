angular.module("livraria.cliente").controller("HomeClienteController", function($state, $scope, $rootScope, $location, clienteService) {
	
	var clienteLogado = function() {
		clienteService.clienteLogado()
		.then(function(response) {
			$scope.cliente =  response.data;
		})
	}
	
	clienteLogado()
	
	$scope.$route = $location
	
	
	$scope.encerrarSessao = function(){
		clienteService.encerrarSessao();
	}
	
})
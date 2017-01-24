angular.module('livraria.cliente').controller('CadastroClienteController', function($scope, $http, clienteService) {

	$scope.cliente = {}
	
	$scope.carregarEstados = function() {
		 clienteService.carregarEstados()
		 .then(function(response) {
			$scope.estados = response.data
		 })

	}
	
	$scope.carregarCidades = function(estado) {
		clienteService.carregarCidades(estado.id).then(function(response) {
			$scope.cidades = response.data
		})
	}
	
	
	// init	
	$scope.carregarEstados()
})
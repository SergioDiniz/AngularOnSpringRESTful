angular.module('livraria.cliente').controller('CadastroClienteController', function($scope, $location, $http, clienteService) {

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
	
	$scope.cadastrarCliente = function() {
		clienteService.cadastrarCliente($scope.cliente).then(function(response) {
			console.log("ok")
			$scope.cliente = null
			$location.path('/cliente/login')
			
		}).catch(function(response) {
			console.log("error")
		})
	}
	
	// init	
	$scope.carregarEstados()
})
angular.module("livraria.cliente").controller("ClienteConfiguracoesController", function($scope, clienteService) {
	
	$scope.carregarDadosDoCliente = function() {
		clienteService.clienteLogado()
		.then(function(response) {
			$scope.cliente =  response.data;
			$scope.carregarEstados()
			$scope.carregarCidades($scope.cliente.estados)
		})
	}
	
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
	
	$scope.atualizarCliente = function() {
		clienteService.atualizarCliente($scope.cliente)
		.then(function(response) {
			$scope.cliente.senha = null
			$scope.mensagemOk = "Dados Atualizados com Sucesso!"
			$scope.mensagemError = null
		}).catch(function(response) {
			$scope.mensagemError = "Erro ao Tentar Atualizar Dados!"
			$scope.mensagemOk = null
		})
	}
	
})
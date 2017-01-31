angular.module("livraria.admin").controller("FornecedorCadastroController", function($scope, $location, adminService, clienteService) {
	$scope.fornecedor = {}
	
	
	$scope.cadastrarFornecedor = function() {
		adminService.cadastrarFornecedor($scope.fornecedor)
		.then(function(response) {
			alert("Novo Fornecedor Cadastrado com Sucesso!")
			$location.path("/admin/fornecedor")
		}).catch(function(response) {
			alert("ERROR! " + response.data.error)
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
})
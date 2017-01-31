angular.module("livraria.admin").controller("VisualizarAtualizarFornecedorController", function($scope, $stateParams, adminService, clienteService) {
	var fornecedorId = $stateParams.fornecedorId
	
	$scope.pesquisarFornecedor = function() {
		adminService.pesquisarFornecedor(fornecedorId)
		.then(function(response) {
			if(response.data.id != null){
				$scope.fornecedor = response.data
				$scope.carregarCidades($scope.fornecedor.estados)
			}else{
				$scope.fornecedor = null
				$scope.mensagem = "Fornecedor Não Encontrado"
			}
		}).catch(function(response) {
			$scope.mensagem = "ERROR!"
		})
	}
	
	$scope.atualizarFornecedor = function() {
		adminService.atualizarFornecedor($scope.fornecedor)
		.then(function(response) {
			alert("Funcionario Atualizado com Sucesso!")
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
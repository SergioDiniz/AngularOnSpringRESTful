angular.module("livraria.admin").controller("FornecedorHomeController", function($scope, adminService) {
	$scope.fornecedores = []
	
	$scope.carregarFornecedores = function() {
		adminService.listarTodosOsFornecedores()
		.then(function(response) {
			$scope.fornecedores = response.data;
		})
	}
	
	$scope.excluirFornecedor = function(fornecedor){
		adminService.excluirFornecedor(fornecedor.id)
		.then(function(response) {
			$scope.carregarFornecedores()
			alert("Fornecedor Excluido com Sucesso!")
		}).catch(function(response) {
			alert("ERROR! " + response.data.error)
		})
	}
	
})
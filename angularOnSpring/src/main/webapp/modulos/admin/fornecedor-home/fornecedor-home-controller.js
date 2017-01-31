angular.module("livraria.admin").controller("FornecedorHomeController", function($scope, adminService) {
	$scope.fornecedores = []
	
	$scope.carregarFornecedores = function() {
		adminService.listarTodosOsFornecedores()
		.then(function(response) {
			$scope.fornecedores = response.data;
		})
	}
	
})
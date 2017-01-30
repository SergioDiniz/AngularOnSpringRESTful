angular.module("livraria.admin").controller("CadastroLivroController", function($scope, $location, adminService) {
	$scope.livro = {}
	$scope.fornecedores = []
	
	$scope.carregarFornecedores = function() {
		adminService.listarTodosOsFornecedores()
		.then(function(response) {
			$scope.fornecedores = response.data;
		})
	}
	
	$scope.cadastrarLivro = function() {
		
		adminService.cadastrarNovoLivro($scope.livro)
		.then(function(response) {
			$scope.livro = null
			alert("Livro Cadastrado com Sucesso!")
			$location.path("/admin/livro")
		}).catch(function(response) {
			alert("ERROR! " + response.data.error + " (" + response.data.status + ")")
		});
		
		
	}
	
})
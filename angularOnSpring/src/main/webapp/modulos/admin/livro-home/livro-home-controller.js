angular.module("livraria.admin").controller("LivroHomeController", function($scope, adminService) {
	$scope.home = "inicio"
	$scope.livros = []
	
	$scope.carregarLivros = function() {
		adminService.listarTodosOsLivros()
		.then(function(response) {
			$scope.livros = response.data
		})
	}
	
	$scope.excluirLivro = function(livro) {
		adminService.excluirLivro(livro.id)
		.then(function(response) {
			alert("Livro excluido com Sucesso!")
			$scope.carregarLivros()
		}).catch(function(response) {
			alert("ERROR! " + response.data.error)
		})
	}
	
})
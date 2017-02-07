angular.module("livraria.cliente").controller("LivroClienteController", function($scope, $http, $location, clienteService, urlAPI) {
	
	$scope.carregarLivros = function() {
		clienteService.carregarLivros()
		.then(function(response) {
			$scope.livros = response.data
		})
	}
	
	$scope.adicionarItemNoCarrinho = function(item) {
		clienteService.adicionarItemNoCarrinho(item)
		$location.path("/cliente/carrinho")
	}
	
	$scope.filtroLivroPorCategoria = function(categoria) {
		clienteService.filtrarLivrosPorCategoria(categoria)
		.then(function(response) {
			$scope.mensagem = ''
			$scope.livros = response.data
			if($scope.livros.length == 0){
				$scope.mensagem = "Nenhum livro localizado!"
			}
		})
	}
	
	var foto
	var n = 1
	$scope.carregarFotoLivro = function(livro) {
		console.log(n)
		n += 1

		
	}
	
	
})

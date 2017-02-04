angular.module("livraria.cliente").controller("LivroClienteController", function($scope, $rootScope, $location, clienteService) {
	
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
	
})
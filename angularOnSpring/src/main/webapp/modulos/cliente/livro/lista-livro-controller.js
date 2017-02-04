angular.module("livraria.cliente").controller("LivroClienteController", function($scope, $rootScope, clienteService) {
	
	$scope.carregarLivros = function() {
		clienteService.carregarLivros()
		.then(function(response) {
			$scope.livros = response.data
		})
	}
	
	
	$scope.adicionarItemNoCarrinho = function(item) {
		console.log("adicionando item: " + item)
		var carrinho = JSON.parse(localStorage.getItem("carrinho"))
		if (carrinho == null){
			carrinho = []
		}
		carrinho.push(item)
		localStorage.setItem("carrinho", JSON.stringify(carrinho))
		
		
		$rootScope.numeroDeItensCarrinho = carrinho.length
		
		
	}
	
})
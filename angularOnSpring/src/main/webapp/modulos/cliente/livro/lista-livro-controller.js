angular.module("livraria.cliente").controller("LivroClienteController", function($scope, $rootScope, clienteService) {
	
	$scope.carregarLivros = function() {
		clienteService.carregarLivros()
		.then(function(response) {
			$scope.livros = response.data
		})
	}
	
	var checarItem = function(item, carrinho) {
		
	}
	
	
	$scope.adicionarItemNoCarrinho = function(item) {

		var carrinho = JSON.parse(localStorage.getItem("carrinho"))
		if (carrinho == null){
			carrinho = []
		}
		
		var existeItem = carrinho.findIndex(function(currentValue) {
			return currentValue.item.id === item.id
		})
		
		
		if(existeItem == -1){
			var itemProduto = {'item': item, 'quantidade': 1}
			
			carrinho.push(itemProduto)
			localStorage.setItem("carrinho", JSON.stringify(carrinho))
			
			$rootScope.numeroDeItensCarrinho = carrinho.length
		} else{
			carrinho[existeItem].quantidade += 1
			localStorage.setItem("carrinho", JSON.stringify(carrinho))
			
		}
		
		
		
		
		
		
		
	}
	
})
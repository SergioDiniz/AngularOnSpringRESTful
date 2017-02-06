angular.module("livraria.cliente").controller("CarrinhoClienteController", function($scope, $location, clienteService) {
	$scope.carrinho = clienteService.getCarrinho()
	
	$scope.almentarQuantidade = function(indexItem, produto) {
		clienteService.alterarQuantidadeEmProduto(indexItem, produto)
		$scope.somarValorTotal()
	}
	
	$scope.somarValorTotal = function() {
		$scope.valorDaCompra = 0
		
		var carrinho = clienteService.getCarrinho()
		
		carrinho.forEach(function(produto, i, array) {
			$scope.valorDaCompra += produto.quantidade * produto.valor
		})
	}
	
	$scope.removerItemDoCarrinho = function(indexItem, produto) {
		clienteService.removerItemDoCarrinho(indexItem, produto)
		
		$scope.carrinho = clienteService.getCarrinho()
		$scope.somarValorTotal()
	}
	
	$scope.limparCarrinho = function() {
		clienteService.limparCarrinho()
		
		$scope.carrinho = []
		$scope.valorDaCompra = 0
	}
	
	$scope.realizarCompra = function() {
		alert("comprando")
		clienteService.fazerPedido()
		.then(function(response) {
			alert("ok")
			$scope.limparCarrinho()
			$location.path("/cliente/compras")
		}).catch(function(response) {
			alert(response.error)
		})
	}
	
	
})
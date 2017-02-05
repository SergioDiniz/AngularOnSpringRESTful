angular.module("livraria.cliente").controller("CarrinhoClienteController", function($scope, clienteService) {
	$scope.carrinho = clienteService.getCarrinho()
	
	
	$scope.getValorTotal = function(valor, quantidade) {
		return quantidade * parseFloat(valor)
	}
	
	$scope.almentarQuantidade = function(indexItem, produto) {
		clienteService.alterarQuantidadeEmProduto(indexItem, produto)
		$scope.somarValorTotal()
	}
	
	$scope.somarValorTotal = function() {
		$scope.valorDaCompra = 0
		
		var carrinho = clienteService.getCarrinho()
		
		carrinho.forEach(function(produto, i, array) {
			$scope.valorDaCompra += produto.quantidade * parseFloat(produto.livro.valor)
		})
	}
	
	$scope.removerItemDoCarrinho = function(indexItem, produto) {
		clienteService.removerItemDoCarrinho(indexItem, produto)
		
		$scope.carrinho = clienteService.getCarrinho()
		$scope.somarValorTotal()
	}
	
	$scope.realizarCompra = function() {
		alert("comprando")
		clienteService.fazerPedido()
		.then(function(response) {
			alert("ok")
		}).catch(function(response) {
			alert(response.data.error)
		})
	}
})
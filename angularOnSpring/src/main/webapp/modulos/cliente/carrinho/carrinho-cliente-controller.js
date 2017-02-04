angular.module("livraria.cliente").controller("CarrinhoClienteController", function($scope, clienteService) {
	$scope.carrinho = clienteService.getCarrinho()
	
	$scope.getValorTotal = function(valor, quantidade) {
		return quantidade * parseFloat(valor)
	}
})
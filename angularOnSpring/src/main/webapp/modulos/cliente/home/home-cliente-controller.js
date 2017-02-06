angular.module("livraria.cliente").controller("HomeClienteController", function($state, $scope, $rootScope, $location, clienteService) {
	
	var clienteLogado = function() {
		clienteService.clienteLogado()
		.then(function(response) {
			$scope.cliente =  response.data;
		})
	}
	
	clienteLogado()
	
	$scope.encerrarSessao = function(){
		clienteService.encerrarSessao();
	}
	
	var carrinho = JSON.parse(localStorage.getItem("carrinho"))
	$rootScope.numeroDeItensCarrinho = carrinho ? carrinho.length : 0
	
			

			
})
angular.module("livraria.cliente").controller("ClienteComprasController", function($scope, clienteService) {

	$scope.carregarComprasDeCliente = function() {
		clienteService.carregarComprasDeCliente()
		.then(function(response) {
			$scope.compras = response.data
			
			if($scope.compras.length == 0 || $scope.compras == null){
				$scope.mensagem = "Você ainda não realizou nenhuma compra!"
			}
			
		}).catch(function(response) {
			$scope.mensagem = "Um erro acorreu ao tentar buscar os seus pedidos"
		})
	}
	
})
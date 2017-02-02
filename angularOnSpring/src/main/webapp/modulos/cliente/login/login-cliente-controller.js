angular.module('livraria.cliente').controller('loginClienteController', function($scope, $location, clienteService) {
	
	$scope.cliente = {}
	
	setTimeout(function(){
		document.getElementById("hiddenDiv").style.display = 'block';
	}, 100);
	
	
	$scope.fazerLogin = function() {
		clienteService.loginCliente($scope.cliente)
		.then(function(response) {
			
			console.log("login ok!")
			localStorage.setItem("session_token", response.data.token)
			$location.path("/cliente")
			
		}).catch(function(response) {
			if (response.status == 401) {
				alert("Email ou Senha Incorretos!")
				$scope.cliente.senha = null;
			} else if (response.status == 406){
				alert("Email e Senha Obrigatorios!")
			}
		})
	}
	
})
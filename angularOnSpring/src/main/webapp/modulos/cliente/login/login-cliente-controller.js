angular.module('livraria.cliente').controller('loginClienteController', function($scope, $location, clienteService) {
	
	$scope.cliente = {}
	
	setTimeout(function(){
		document.getElementById("hiddenDiv").style.display = 'block';
	}, 0);
	
	
	$scope.fazerLogin = function() {
		clienteService.loginCliente($scope.cliente)
		.then(function(response) {
			
			if (response.status == 401) {
				alert("Email ou Senha Incorretos!")
				$scope.cliente.senha = null;
			} else if (response.status == 206){
				alert("Email e Senha Obrigatorios!")
			}else{
				console.log("login ok!")
				localStorage.setItem("session_token", response.data.token)
				$location.path("/cliente")
			}
			
			
		}).catch(function(response) {
			
		})
	}
	
})
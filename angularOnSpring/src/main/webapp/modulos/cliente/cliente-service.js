angular.module("livraria.cliente").factory("clienteService", function($http) {
	
	var carregarEstados = function() {
		console.log("aqui")
		return $http.get("http://localhost:8080/api/ec/estados");
	}
	
	var carregarCidades = function(estadoID) {
		return $http.get("http://localhost:8080/api/ec/cidades/" + estadoID);
	}
	
	return{
		carregarEstados:carregarEstados,
		carregarCidades:carregarCidades
	}
	
})
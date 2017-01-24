angular.module("livraria.cliente").factory("clienteService", function($http, urlAPI) {
	
	var carregarEstados = function() {
		return $http.get("http://localhost:8080/api/ec/estados");
	}
	
	var carregarCidades = function(estadoID) {
		return $http.get("http://localhost:8080/api/ec/cidades/" + estadoID);
	}
	
	var cadastrarCliente = function(cliente) {
		return $http.post(urlAPI + "/cliente/", cliente);
	}
	
	return{
		carregarEstados:carregarEstados,
		carregarCidades:carregarCidades,
		cadastrarCliente:cadastrarCliente
	}
	
})
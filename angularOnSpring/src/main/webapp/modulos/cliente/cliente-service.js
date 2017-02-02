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
	
	var loginCliente = function(cliente){
		return $http.post(urlAPI + "/cliente/login", cliente);
	}
	
	var clienteLogado = function() {
		return $http.get(urlAPI + "/cliente/logado")
	}
	
	
	return{
		carregarEstados:carregarEstados,
		carregarCidades:carregarCidades,
		cadastrarCliente:cadastrarCliente,
		loginCliente:loginCliente,
		clienteLogado:clienteLogado
	}
	
})
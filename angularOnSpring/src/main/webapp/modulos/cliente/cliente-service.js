angular.module("livraria.cliente").factory("clienteService", function($http, $rootScope, urlAPI) {
	
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
	
	var encerrarSessao = function() {
		localStorage.removeItem("session_token")
	}
	
	var carregarLivros = function() {
		return $http.get(urlAPI + '/livro/')
	}
	
	var getCarrinho = function(){
		var carrinho = JSON.parse(localStorage.getItem("carrinho"))
		if (carrinho == null){
			carrinho = []
		}
		return carrinho
	}
	
	var setCarrinho = function(carrinho) {
		localStorage.setItem("carrinho", JSON.stringify(carrinho))
	}
	
	var setItemCarrinho = function(item) {
		var itemProduto = {'item': item, 'quantidade': 1}
		var carrinho = getCarrinho()
		carrinho.push(itemProduto)
		setCarrinho(carrinho)
		
		$rootScope.numeroDeItensCarrinho = carrinho.length
	}
	
	var setQuantidadeEmItemProduto = function(indexItem) {
		var carrinho = getCarrinho()
		carrinho[indexItem].quantidade += 1
		setCarrinho(carrinho)
	}
	
	var adicionarItemNoCarrinho = function(item) {
		
		var indexExisteItem = getCarrinho().findIndex(function(currentValue) {
			return currentValue.item.id === item.id
		})
		
		if(indexExisteItem == -1){
			setItemCarrinho(item)
		} else{
			setQuantidadeEmItemProduto(indexExisteItem)
		}
		
	}
	
	var alterarQuantidadeEmProduto = function(indexItem, produto) {
		var carrinho = getCarrinho()
		carrinho[indexItem].quantidade = produto.quantidade
		setCarrinho(carrinho)
	}
	
	return{
		carregarEstados:carregarEstados,
		carregarCidades:carregarCidades,
		cadastrarCliente:cadastrarCliente,
		loginCliente:loginCliente,
		clienteLogado:clienteLogado,
		encerrarSessao:encerrarSessao,
		carregarLivros:carregarLivros,
		getCarrinho:getCarrinho,
		setCarrinho:setCarrinho,
		setItemCarrinho:setItemCarrinho,
		setQuantidadeEmItemProduto:setQuantidadeEmItemProduto,
		adicionarItemNoCarrinho:adicionarItemNoCarrinho,
		alterarQuantidadeEmProduto:alterarQuantidadeEmProduto
	}
	
})
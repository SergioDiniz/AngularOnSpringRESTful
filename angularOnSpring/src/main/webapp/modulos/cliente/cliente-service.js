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
	
	var atualizarCliente = function(cliente) {
		return $http.put(urlAPI + "/cliente/", cliente)
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
	
	var setItemCarrinho = function(livro) {
		var itemProduto = {'livro': livro, 'quantidade': 1, 'valor': livro.valor}
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
	
	var adicionarItemNoCarrinho = function(livro) {
		
		var indexExisteItem = getCarrinho().findIndex(function(currentValue) {
			return currentValue.livro.id === livro.id
		})
		
		if(indexExisteItem == -1){
			setItemCarrinho(livro)
		} else{
			setQuantidadeEmItemProduto(indexExisteItem)
		}
		
	}
	
	var alterarQuantidadeEmProduto = function(indexItem, produto) {
		var carrinho = getCarrinho()
		carrinho[indexItem].quantidade = produto.quantidade
		setCarrinho(carrinho)
	}
	
	var removerItemDoCarrinho = function(indexItem, produto) {
		var carrinho = getCarrinho().filter(function(elt, i, array) {
			return elt.livro.id != produto.livro.id;
		})
		setCarrinho(carrinho)
		
		$rootScope.numeroDeItensCarrinho = carrinho.length
	}
	
	var limparCarrinho = function() {
		localStorage.removeItem("carrinho")
		$rootScope.numeroDeItensCarrinho = 0
	}
	
	var fazerPedido = function() {
		return $http.post(urlAPI + "/pedidos/fazer", getCarrinho())
	}
	
	var carregarComprasDeCliente = function() {
		return $http.get(urlAPI + "/pedidos/")
	}
	
	var filtrarLivrosPorCategoria = function(categoria) {
		return $http.get(urlAPI + "/livro/categoria/"+categoria)
	}
	
	return{
		carregarEstados:carregarEstados,
		carregarCidades:carregarCidades,
		cadastrarCliente:cadastrarCliente,
		atualizarCliente:atualizarCliente,
		loginCliente:loginCliente,
		clienteLogado:clienteLogado,
		encerrarSessao:encerrarSessao,
		carregarLivros:carregarLivros,
		getCarrinho:getCarrinho,
		setCarrinho:setCarrinho,
		setItemCarrinho:setItemCarrinho,
		setQuantidadeEmItemProduto:setQuantidadeEmItemProduto,
		adicionarItemNoCarrinho:adicionarItemNoCarrinho,
		alterarQuantidadeEmProduto:alterarQuantidadeEmProduto,
		removerItemDoCarrinho:removerItemDoCarrinho,
		limparCarrinho:limparCarrinho,
		fazerPedido:fazerPedido,
		carregarComprasDeCliente:carregarComprasDeCliente,
		filtrarLivrosPorCategoria:filtrarLivrosPorCategoria
	}
	
})
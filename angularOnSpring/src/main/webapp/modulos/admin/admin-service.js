angular.module("livraria.admin").factory("adminService", function($http, urlAPI) {
	
	var carregarListaDeFornecedores = function() {
		return $http.get(urlAPI+ "/fornecedor/");
	}
	
	var cadastrarNovoLivro = function(livro){
		return $http.post(urlAPI + "/livro/", livro);
	}
	
	return {
		carregarListaDeFornecedores:carregarListaDeFornecedores,
		cadastrarNovoLivro:cadastrarNovoLivro
	}
	
})
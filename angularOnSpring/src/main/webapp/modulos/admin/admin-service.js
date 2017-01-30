angular.module("livraria.admin").factory("adminService", function($http, urlAPI) {
	// Livro:
	// cadastrar livro
	var cadastrarNovoLivro = function(livro){
		return $http.post(urlAPI + "/livro/", livro)
	}
	
	//listar livro
	var listarTodosOsLivros = function() {
		return $http.get(urlAPI + "/livro/")
	}
	
	// deletar livro
	var excluirLivro = function(id) {
		return $http.delete(urlAPI + "/livro/" + id)
	}
	// visualizar fornecedor
	
	// atualizar livro
	
	
	
	// Fornecedor:
	// cadastrar fornecedor
	
	//listar
	var listarTodosOsFornecedores = function() {
		return $http.get(urlAPI+ "/fornecedor/")
	}
	
	// deleter fornecedor

	// visualizar fornecedor
	
	// atualizar fornecedor
	

	
	
	
	return {
		cadastrarNovoLivro:cadastrarNovoLivro,
		listarTodosOsLivros:listarTodosOsLivros,
		excluirLivro:excluirLivro,
		listarTodosOsFornecedores:listarTodosOsFornecedores
	}
	
})
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
	
	// visualizar livro
	var pesquisarLivro = function(id){
		return $http.get(urlAPI + "/livro/" + id)
	}
	
	// atualizar livro
	var atualizarLivro = function(livro) {
		return $http.put(urlAPI + "/livro/", livro)
	}
	
	
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
		pesquisarLivro:pesquisarLivro,
		atualizarLivro:atualizarLivro,
		listarTodosOsFornecedores:listarTodosOsFornecedores
	}
	
})
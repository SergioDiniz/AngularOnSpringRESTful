angular.module("livraria.admin").controller("VisualizarAtualizarLivroController", function($scope, $stateParams, adminService) {
	
	var livroId = $stateParams.livroId
	$scope.mensagem_nao_encontrado = null
	
	$scope.fornecedores = []
	
	$scope.carregarFornecedores = function() {
		adminService.listarTodosOsFornecedores()
		.then(function(response) {
			$scope.fornecedores = response.data;
		})
	}
	
	$scope.pesquisarLivro = function (){
		adminService.pesquisarLivro(livroId)
		.then(function(response) {
			if(response.data.id != null){
				$scope.carregarFornecedores()
				$scope.livro = response.data
				
			}else {
				$scope.livro = null
				$scope.mensagem_nao_encontrado = "Livro não Encontrado!"
			}
			
		}).catch(function(response) {
			$scope.mensagem_nao_encontrado = "ERROR!"
		})
	}
	
	$scope.atualizarLivro = function() {
		adminService.atualizarLivro($scope.livro)
		.then(function(response) {
			alert("Livro Atualizado com Sucesso!")
		}).catch(function(response) {
			alert("ERROR! " + response.data.error + " (" + response.data.status + ")")
		})
	}
	
})
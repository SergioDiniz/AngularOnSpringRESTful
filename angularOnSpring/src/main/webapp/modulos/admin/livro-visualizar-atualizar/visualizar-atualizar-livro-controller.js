angular.module("livraria.admin").controller("VisualizarAtualizarLivroController", function($scope, $location, $stateParams, adminService) {
	
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
			$location.path("/admin/livro")
		}).catch(function(response) {
			alert("ERROR! " + response.data.error + " (" + response.data.status + ")")
		})
	}
	
	
	var setarImagemB64 = function() {
		$scope.mensagem = "Anexando imagem!"
		var file = document.querySelector('#foto').files[0];
		var reader = new FileReader()
		
		reader.onloadend = function() {
			$scope.$apply(function($scope) {
				$scope.livro.foto = reader.result
				$scope.mensagem = "Imagem Pronta!"
			})
		}
		
		if(file){
			reader.readAsDataURL(file)
		}
	}
		
	angular.element(document.querySelector('#foto')).on("change", setarImagemB64)
	
})
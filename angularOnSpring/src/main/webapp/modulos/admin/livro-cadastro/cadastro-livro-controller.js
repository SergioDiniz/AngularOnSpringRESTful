angular.module("livraria.admin").controller("CadastroLivroController", function($scope, $location, adminService) {
	$scope.livro = {}
	$scope.fornecedores = []
	
	$scope.carregarFornecedores = function() {
		adminService.listarTodosOsFornecedores()
		.then(function(response) {
			$scope.fornecedores = response.data;
		})
	}
	
	$scope.cadastrarLivro = function() {
		
		adminService.cadastrarNovoLivro($scope.livro)
		.then(function(response) {
			$scope.livro = null
			alert("Livro Cadastrado com Sucesso!")
			$location.path("/admin/livro")
		}).catch(function(response) {
			alert("ERROR! " + response.data.error + " (" + response.data.status + ")")
		});
		
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
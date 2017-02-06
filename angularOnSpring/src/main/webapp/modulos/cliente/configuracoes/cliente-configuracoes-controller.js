angular.module("livraria.cliente").controller("ClienteConfiguracoesController", function($scope, $rootScope, clienteService) {
	
	$scope.carregarDadosDoCliente = function() {
		clienteService.clienteLogado()
		.then(function(response) {
			$scope.cliente =  response.data;
			$scope.carregarEstados()
			$scope.carregarCidades($scope.cliente.estados)
		})
	}
	
	$scope.carregarEstados = function() {
		 clienteService.carregarEstados()
		 .then(function(response) {
			$scope.estados = response.data
		 })

	}
	
	$scope.carregarCidades = function(estado) {
		clienteService.carregarCidades(estado.id).then(function(response) {
			$scope.cidades = response.data
		})
	}
	
	$scope.atualizarCliente = function() {
		clienteService.atualizarCliente($scope.cliente)
		.then(function(response) {
			
			$rootScope.clienteLogado =  response.data;
			
			$scope.myImage = '';
			$scope.cliente.senha = null
			$scope.mensagemOk = "Dados Atualizados com Sucesso!"
			$scope.mensagemError = null
			$scope.formAtualizar.$pristine = true
		}).catch(function(response) {
			$scope.mensagemError = "Erro ao Tentar Atualizar Dados!"
			$scope.mensagemOk = null
		})
	}
	
	
	
	
	
	// imagem
	
	$scope.myImage='';
    $scope.myCroppedImage='';
	
    var handleFileSelect=function(evt) {
        var file=evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
          $scope.$apply(function($scope){
            $scope.myImage=evt.target.result;
          });
        };
        reader.readAsDataURL(file);
        $scope.formAtualizar.$pristine = false
        
        
    };
  
    angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
	
	
})
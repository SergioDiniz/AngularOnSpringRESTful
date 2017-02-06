var argumentos = ['ui.router', 'angularCSS', 'ngImgCrop', 'livraria.cliente', 'livraria.admin']
angular.module('livraria', argumentos)

.constant("urlAPI", "http://localhost:8080/api")
.run(function($rootScope, $location, $stateParams) {
	
	$rootScope.$on('$locationChangeStart', function() {
		
		console.log("executanto o run: " + $location.path())
		
		if($location.path() == null || $location.path() == "" || $location.path() == "/"){
			$location.path("/login")
		}
		
		var token = localStorage.getItem("session_token")
		var rotasBloqueadasClienteLogado = ['/login', '/cadastro']
		var rotasPermiticasClienteLocado = ['/cliente','/cliente/carrinho', '/cliente/compras', '/cliente/configuracoes']
		var livroId = $stateParams.livroId
		var fornecedorId = $stateParams.fornecedorId
		var rotasAdmin = ['/admin', '/admin/livro', '/admin/livro/novo', '/admin/livro/'+livroId, '/admin/fornecedor', '/admin/fornecedor/novo', '/admin/fornecedor/'+fornecedorId]
		
		if(token != null && rotasBloqueadasClienteLogado.indexOf($location.path()) != -1){
			console.log("usuario logado tentando acessar pagina de login ou cadastro")
			
			$location.path("/cliente")
			
		} else if(rotasPermiticasClienteLocado.indexOf($location.path()) == -1 && rotasAdmin.indexOf($location.path()) == -1 
				|| token == null && rotasAdmin.indexOf($location.path()) == -1){
			console.log("Cliente Logado tentando acessar rota não permitida!")
			
			var inicioDaRota = $location.path().slice(0, 6)
			
			if(inicioDaRota == '/admin'){
				$location.path("/admin")
			}else{
				if($location.path() == '/cadastro'){
					$location.path("/cadastro")
				} else {
					$location.path("/login")
				}
			}
		}
		
		
		
	})
})

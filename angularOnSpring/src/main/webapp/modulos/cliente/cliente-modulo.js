angular.module('livraria.cliente', [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
	
	$httpProvider.interceptors.push('clienteInterceptor');
	
	
	
	
	$stateProvider
		.state('cadastro-cliente', {
			url: '/cliente/cadastro',
			views: {
				'home':{
					templateUrl: "modulos/cliente/cadastro/cadastro-cliente-view.html",
					css: {
						href: "modulos/cliente/cadastro/cadastro-cliente-style.css",
						preload: true
					},
					controller: "CadastroClienteController"
				}
			}
		})
		.state('login-cliente', {
			url: '/cliente/login',
			views: {
				'home':{
					templateUrl: "modulos/cliente/login/login-cliente-view.html",
					css: {
						href: "modulos/cliente/login/login-cliente-style.css",
						preload: true
					},
					controller: "loginClienteController"
				}
			}
		})
		.state('cliente', {
			url: '/cliente',
			views: {
				'home':{
					controller : "HomeClienteController",
					templateUrl: "modulos/cliente/home/home-cliente-view.html",
					css: [
						{
							href: "asserts/css/cliente.css",
							preload: true
						}
					]
				}
			}
		})
				
		
		
})
.run(function($rootScope, $location) {
	
	$rootScope.$on('$locationChangeStart', function() {
		
		console.log("executanto o run")
		
		var token = localStorage.getItem("session_token")
		var rotasBloqueadasClienteLogado = ['/cliente/login', '/cliente/cadastro']
		
		
		if(token == null){
			
			if($location.path() == '/cliente/cadastro'){
				$location.path("/cliente/cadastro")
			} else {
				$location.path("/cliente/login")
			}
			
			
		}
		else if(token != null && rotasBloqueadasClienteLogado.indexOf($location.path()) != -1){
			console.log("usuario logado tentando acessar pagina de login ou cadastro")
			$location.path("/cliente")
		}
		
		
		
	})
	
})
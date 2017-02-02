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
					templateUrl: "modulos/cliente/home/home-cliente-view.html"
				}
			}
		})
				
		
		
})
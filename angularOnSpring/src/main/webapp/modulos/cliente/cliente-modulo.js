angular.module('livraria.cliente', [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	

	$stateProvider
		.state('cadastro-cliente', {
			url: '/cliente/cadastro',
			templateUrl: "modulos/cliente/cadastro/cadastro-cliente-view.html",
			css: {
				href: "modulos/cliente/cadastro/cadastro-cliente-style.css",
				preload: true
			},
			controller: "CadastroClienteController"
		})
		.state('login-cliente', {
			url: '/cliente/login',
			templateUrl: "modulos/cliente/login/login-cliente-view.html",
			css: {
				href: "modulos/cliente/login/login-cliente-style.css",
				preload: true
			},
			controller: "loginClienteController"
		})
		.state('visualizar-cliente', {
			url: '/cliente/v/:id',
			templateUrl: "modulos/cliente/visualizar/visualizar-cliente-view.html",
			controller: "VisualizarClienteController"
		})
				
		
		
})
angular.module('livraria.cliente', [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	

	$stateProvider
		.state('cadastro-cliente', {
			url: '/cliente/cadastro',
			templateUrl: "modulos/cliente/cadastro/cadastro-cliente-view.html",
			controller: "CadastroClienteController"
		})
		.state('login-cliente', {
			url: '/cliente/login',
			templateUrl: "modulos/cliente/login/login-cliente-view.html",
			controller: "loginClienteController"
		})
		.state('visualizar-cliente', {
			url: '/cliente/v/:id',
			templateUrl: "modulos/cliente/visualizar/visualizar-cliente-view.html",
			controller: "VisualizarClienteController"
		})
				
		
		
})
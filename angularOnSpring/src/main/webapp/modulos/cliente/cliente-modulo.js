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
						href: "modulos/cliente/login/login-cliente-style.css"
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
				},
				'clientehome@cliente':{
					controller : "LivroClienteController",
					templateUrl: "modulos/cliente/livro/lista-livro-view.html",
					css: [
						{
							href: "asserts/css/cliente.css"
						},
						{
							href: "modulos/cliente/livro/lista-livro-style.css"
						}
					]
				}
			}
		})
		.state('cliente.carrinho',{
			url: '/carrinho',
			views: {
				'clientehome': {
					controller: 'CarrinhoClienteController',
					templateUrl: 'modulos/cliente/carrinho/carrinho-cliente-view.html',
					css: [
						{
							href: "asserts/css/cliente.css"
						}
					]
				}
			}
		})
		.state('cliente.configuracoes', {
			url: '/configuracoes',
			views: {
				'clientehome': {
					controller: 'ClienteConfiguracoesController',
					templateUrl: 'modulos/cliente/configuracoes/cliente-configuracoes-view.html',
					css: [
						{
							href: "asserts/css/cliente.css"
						}
					]
				}
			}
		})
		.state('cliente.compras', {
			url: '/compras',
			views: {
				'clientehome': {
					controller: 'ClienteComprasController',
					templateUrl: 'modulos/cliente/compras/cliente-compras-view.html',
					css:[
						{
							href: "asserts/css/cliente.css"
						}
					]
				}
			}
		})
				
		
		
})

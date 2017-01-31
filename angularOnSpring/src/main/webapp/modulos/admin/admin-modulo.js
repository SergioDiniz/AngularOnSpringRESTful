angular.module("livraria.admin", [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
		.state('admin', {
			url: "/admin",
			views:{
				"home":{
					controller: "HomeAdminController",
					templateUrl: "modulos/admin/home/home-admin-view.html",
					css: [
						{
							href: "modulos/admin/home/home-admin-style.css",
							preload: true
						},
						{
							href: "asserts/css/admin.css",
							preload: true
						}
					]
				}
			}
			
		})
		.state('admin.livro', {
			url: "/livro",
			views: {
				'adminhome':{
					controller: "LivroHomeController",
					templateUrl: "modulos/admin/livro-home/livro-home-view.html",
					css: [
						{
							href: "asserts/css/admin.css",
							preload: true
						}
					]
				}
			}
			
		})
		.state('admin.livro-novo', {
			url: "/livro/novo",
			views: {
				"adminhome": {
					controller: "CadastroLivroController",
					templateUrl: "modulos/admin/livro-cadastro/cadastro-livro-view.html",
					css: [
						{
							href: "asserts/css/admin.css",
							preload: true
						}
					]
				}
			}
			
		})
		.state('admin.visualizar-livro', {
			url: "/livro/:livroId",
			views: {
				"adminhome":{
					controller: "VisualizarAtualizarLivroController",
					templateUrl: "modulos/admin/livro-visualizar-atualizar/visualizar-atualizar-livro-view.html",
					css: [{
						href: "asserts/css/admin.css",
						preload: true
					}]
				}
			}
		})
		.state('admin.fornecedor', {
			url: "/fornecedor", 
			views: {
				"adminhome":{
					templateUrl: "modulos/admin/fornecedor-home/fornecedor-home-view.html",
					controller: "FornecedorHomeController",
					css: [
						{
							href: "asserts/css/admin.css",
							preload: true
						}
					]
				}
			}
		})
		.state('admin.fornecedor-novo', {
			url: "/fornecedor/novo",
			views: {
				"adminhome":{
					templateUrl: "modulos/admin/fornecedor-cadastro/fornecedor-cadastro-view.html",
					controller: "FornecedorCadastroController",
					css: [
						{
							href: "asserts/css/admin.css",
							preload: true
						}
					]
				}
			}
		})
		.state('admin.visualizar-fornecedor', {
			url: '/fornecedor/:fornecedorId',
			views:{
				"adminhome":{
					controller: "VisualizarAtualizarFornecedorController",
					templateUrl: "modulos/admin/fornecedor-visualizar-atualizar/atualizar-visualizar-fornecedor-view.html",
					css: [{
							href: "asserts/css/admin.css",
							preload: true
					}]
				}
			}
		})
	
})
angular.module("livraria.admin", [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
		.state('admin', {
			url: "/admin/",
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
			url: "livro",
			views: {
				'adminhome':{
					controller: "LivroHomeController",
					templateUrl: "modulos/admin/livro-home/livro-home-view.html",
					css: [
						{
							href: "asserts/css/admin.css",
							preload: "true"
						}
					]
				}
			}
			
		})
		.state('admin-livro-novo', {
			url: "/admin/livro/novo/",
			controller: "CadastroLivroController",
			templateUrl: "modulos/admin/livro-cadastro/cadastro-livro-view.html",
			css:[
				{
					href: "asserts/css/admin.css",
					preload: true
				}
			]
		})
	
})
angular.module("livraria.admin", [])

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$stateProvider
		.state('admin-home', {
			url: "/admin/",
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
		})
	
})
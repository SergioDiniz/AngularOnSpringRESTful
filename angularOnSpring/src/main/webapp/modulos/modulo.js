var argumentos = ['ui.router', 'angularCSS', 'livraria.cliente', 'livraria.admin']
angular.module('livraria', argumentos)

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/cliente/login');
	
})
.constant("urlAPI", "http://localhost:8080/api");
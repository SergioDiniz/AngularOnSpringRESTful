var argumentos = ['ui.router', 'angularCSS', 'livraria.cliente']
angular.module('livraria', argumentos)

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');
	
});
var argumentos = ['ui.router','livraria.cliente']
angular.module('livraria', argumentos)

.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$urlRouterProvider.otherwise('/');
	
});
var argumentos = ['ui.router', 'angularCSS', 'livraria.cliente', 'livraria.admin']
angular.module('livraria', argumentos)

.constant("urlAPI", "http://localhost:8080/api")
.run(function($rootScope, $location) {
	
	$rootScope.$on('$locationChangeStart', function() {
		if($location.path() == null || $location.path() == "" || $location.path() == "/"){
			$location.path("/cliente/login")
		}
	})
})

angular.module("livraria.cliente").factory("clienteInterceptor", function($q, $location) {
	
	return {
		'request': function(config){
			var inicioDaRota = $location.path().slice(0, 6)
			
			if(inicioDaRota != '/admin'){
				var token = localStorage.getItem("session_token")
				config.headers.Authorization = token
				config.headers.admin = false
			} else{
				config.headers.admin = true
			}
			
			return config;
		},
		
		'response': function (response){
	    	return response;
	    },
	    
	    'responseError': function(rejection) {
			if(rejection.status == 401){
				localStorage.removeItem("session_token")
				$location.path("/login")
			}
		}
	}
	
})


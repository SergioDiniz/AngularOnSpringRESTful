angular.module("livraria.cliente").factory("clienteInterceptor", function($q, $location) {
	
	return {
		'request': function(config){
//			console.log("passando pelo request")
			var inicioDaRota = $location.path().slice(0, 6)
			
			if(inicioDaRota != '/admin'){
				var token = localStorage.getItem("session_token")
				config.headers.Authorization = token
			}
			
			return config;
		},
		
		'response': function (response){
//			console.log("Passei pelo response do interceptor!")
	    	return response;
	    }
	}
	
})


angular.module("livraria.cliente").factory("clienteInterceptor", function($q) {
	
	return {
		'request': function(config){
			config.headers.Authorization = localStorage.getItem("session_token");
			return config;
		},
		
		'response': function (response){
//			console.log("Passei pelo response do interceptor!")
	    	return response;
	    }
	}
	
})


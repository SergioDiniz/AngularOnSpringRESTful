package com.livraria;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.livraria.filter.TokenFilter;
import com.livraria.security.ApiKey;

@SpringBootApplication
public class Livraria2Application {

	@Bean
	public FilterRegistrationBean FilterTokenJWT(){
		FilterRegistrationBean filter = new FilterRegistrationBean();
		filter.setFilter(new TokenFilter());
		filter.addUrlPatterns("/api/*");
		return filter;
	}
	
	public static void main(String[] args) {
		SpringApplication.run(Livraria2Application.class, args);
	}
}

package com.livraria.filter;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.filter.GenericFilterBean;

import com.livraria.security.ManagerJWT;

public class TokenFilter extends GenericFilterBean{

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO Auto-generated method stub
		
		HttpServletRequest req = (HttpServletRequest) request;
		String headerAuthorization = req.getHeader("Authorization");
		
		String atrAdmin = req.getHeader("admin");
		Boolean isAdmin = atrAdmin.equals("true") ? true : false;
		
		String method = req.getMethod();	
		String requestUri = req.getRequestURI();
		
		
		if(requestUri.equals("/api/cliente/login") || requestUri.equals("/api/cliente/")  && method.equals("POST")){
			//Login ou Cadastro Pelo Filtro
			chain.doFilter(request, response);
			
		}else if(isAdmin){
			//Admin Pelo Filtro
			chain.doFilter(request, response);
			
		}else{
			
			try {
				
				ManagerJWT.decodeJWT(headerAuthorization);
				chain.doFilter(request, response);
				
			} catch (Exception e) {
				// TODO: handle exception
				((HttpServletResponse) response).sendError(HttpServletResponse.SC_UNAUTHORIZED, "Token Invalido!");
			}
			
		}

		
	}

}

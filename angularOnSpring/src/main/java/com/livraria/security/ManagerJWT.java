package com.livraria.security;

import java.io.UnsupportedEncodingException;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.interfaces.DecodedJWT;

public class ManagerJWT {

	public static String createJWT(Integer id, String nome){
		try {
			
			return JWT.create()
						.withSubject(nome)
						.withJWTId(id + "")
						.withIssuer("auth0")
						.sign(Algorithm.HMAC512(ApiKey.getSecret()));
			
		} catch (IllegalArgumentException | JWTCreationException | UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return null;
	}
	
	public static DecodedJWT decodeJWT(String token){
		
		try {
			JWTVerifier v = JWT
					.require(Algorithm.HMAC512(ApiKey.getSecret()))
					.withIssuer("auth0")
					.build();
			DecodedJWT decoded = v.verify(token);
			return decoded;
			
			
		} catch (IllegalArgumentException | UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		return null;
	}
	
}

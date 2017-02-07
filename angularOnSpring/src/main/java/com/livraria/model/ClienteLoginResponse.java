package com.livraria.model;

public class ClienteLoginResponse {

	private String nome;
	private String token;
	
	public ClienteLoginResponse(String nome, String token) {
		this.nome = nome;
		this.token = token;
	}
	
	public ClienteLoginResponse() {
		// TODO Auto-generated constructor stub
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
}

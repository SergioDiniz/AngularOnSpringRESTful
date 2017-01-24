package com.livraria.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Cliente  extends Pessoa{
		
	private String cpf;
	private String sexo;
	private String interesse;
	private String email;
	private String senha;
	
	public Cliente() {
		super();
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public String getSexo() {
		return sexo;
	}

	public void setSexo(String sexo) {
		this.sexo = sexo;
	}

	public String getInteresse() {
		return interesse;
	}

	public void setInteresse(String interesse) {
		this.interesse = interesse;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	
}

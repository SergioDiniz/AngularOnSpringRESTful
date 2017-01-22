package com.livraria.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Cliente extends Pessoal implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	@Column(unique=true)
	private String cpf;
	private String sexo;
	private String interesse;

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
	
}

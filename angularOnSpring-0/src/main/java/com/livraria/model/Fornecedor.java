package com.livraria.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Fornecedor extends Pessoal implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String razaoSocial;
	@Column(unique =  true)
	private String cnpj;
	@Column(unique = true)
	private Long inscricaoEstadual;
	
	public Fornecedor() {
		super();
	}

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public Long getInscricaoEstadual() {
		return inscricaoEstadual;
	}

	public void setInscricaoEstadual(Long inscricaoEstadual) {
		this.inscricaoEstadual = inscricaoEstadual;
	}
	
	

}

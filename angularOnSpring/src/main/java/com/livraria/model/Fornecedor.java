package com.livraria.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Fornecedor extends Pessoa{

	private String razaoSocial;
	@Column(unique =  true)
	private String cnpj;
	@Column(unique = true)
	private Long inscricaoEstadual;
	
	public Fornecedor() {
		// TODO Auto-generated constructor stub
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

package com.livraria.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.livraria.model.Fornecedor;
import com.livraria.ws.repository.FornecedorRepository;

@Service
public class FornecedorService {

	
	@Autowired
	FornecedorRepository repository;
	
	public Fornecedor salvarFornecedor(Fornecedor fornecedor){
		return repository.save(fornecedor);
	}
	
	public void deleterFornecedor(Integer id){
		repository.delete(id);
	}
	
	public Fornecedor getFornecedor(Integer id){
		return repository.findOne(id);
	}
	
	public Collection<Fornecedor> listarFornecedores(){
		return repository.findAll();
	}
	
}

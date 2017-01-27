package com.livraria.ws.service;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.livraria.model.Cliente;
import com.livraria.ws.repository.ClienteRepository;

@Service
@Transactional(readOnly=true, propagation=Propagation.SUPPORTS)
public class ClienteService {

	@PersistenceContext
	EntityManager em;
	
	@Autowired
	ClienteRepository repository;
	
	public Collection<Cliente> listarClientes(){	
		return repository.findAll();
	}
	
	public Cliente salvarCliente(Cliente cliente){
		return repository.save(cliente);
	}

	public Cliente getCliente(Integer id) {
		return repository.findOne(id);
	}
	
	public void deletarCliente(Integer id){
		repository.delete(id);
	}
		
	// login
	public Cliente login(String email, String senha){
		return repository.login(email, senha);
	}
	
//	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
//	public void salvar(Cliente cliente){
//		em.persist(cliente);
//	}
	
}

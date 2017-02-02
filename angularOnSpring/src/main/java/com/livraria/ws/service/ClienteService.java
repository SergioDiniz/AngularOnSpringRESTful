package com.livraria.ws.service;

import java.util.Collection;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.livraria.model.Cliente;
import com.livraria.model.ClienteLoginResponse;
import com.livraria.security.ManagerJWT;
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
	public ResponseEntity<ClienteLoginResponse> login(String email, String senha) throws ServletException{
		
		if(email == null || senha == null){
			return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
//			throw new ServletException("Email e Senha Obrigatorios!");
		}
		
		Cliente cliente = repository.login(email, senha);
		
		if(cliente == null){
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
//			throw new ServletException("Email ou Senha Incorretos!");
		}
		
		String token = ManagerJWT.createJWT(cliente.getId(), cliente.getNome());
		
		ClienteLoginResponse clr = new ClienteLoginResponse(cliente.getEmail(), token);
		
		return new ResponseEntity<ClienteLoginResponse>(clr, HttpStatus.CREATED);
	}
	
	
	public Cliente clienteLogado(String token){
		Integer clienteId = Integer.parseInt(ManagerJWT.decodeJWT(token).getId());
		Cliente cliente = repository.findOne(clienteId);
		cliente.setSenha(null);
		return cliente;
	}
	
	
//	@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
//	public void salvar(Cliente cliente){
//		em.persist(cliente);
//	}
	
}

package com.livraria.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.livraria.model.Cliente;
import com.livraria.ws.repository.ClienteRepository;


@Service
public class ClienteService {

	@Autowired
	ClienteRepository clienteRepository;

	public Cliente salvar(Cliente cliente){
		return clienteRepository.save(cliente);
	}
	
	public Collection<Cliente> listarTodos(){
		return clienteRepository.findAll();
	}

	public Cliente findOne(Integer id) {
		return clienteRepository.findOne(id);
	}
	
}

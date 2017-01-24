package com.livraria.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.Cliente;
import com.livraria.ws.repository.ClienteRepository;
import com.livraria.ws.service.ClienteService;

@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

	@Autowired
	ClienteRepository repository;
	
	@Autowired
	ClienteService service;
	
	@PostMapping("/")
	public Cliente savarCliente(@RequestBody Cliente cliente){
		return service.salvarCliente(cliente);
	}
	
	@GetMapping("/")
	public Collection<Cliente> listarClientes(){
		return service.listarClientes();
	}
	
	@GetMapping("/{id}")
	public Cliente getCliente(@PathVariable Integer id){
		return service.getCliente(id);
	}
	
}

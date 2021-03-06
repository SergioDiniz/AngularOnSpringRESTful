package com.livraria.ws.controller;

import java.util.Collection;
import java.util.Map;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.Cliente;
import com.livraria.model.ClienteLoginResponse;
import com.livraria.ws.repository.ClienteRepository;
import com.livraria.ws.service.ClienteService;
@CrossOrigin
@RestController
@RequestMapping("/api/cliente")
public class ClienteController {

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
	
	@DeleteMapping("/{id}")
	public void deletarCliente(@PathVariable Integer id){
		service.deletarCliente(id);
	}
	
	@PutMapping("/")
	public Cliente atualizarCliente(@RequestBody Cliente cliente){
		return service.salvarCliente(cliente);
	}
	
	// login
	@PostMapping("/login")
	public ResponseEntity<ClienteLoginResponse> login(@RequestBody Map<String, String> json) throws ServletException{
		String email = json.get("email");
		String senha = json.get("senha");
		return service.login(email, senha);
	}
	
	@GetMapping("/logado")
	public Cliente clienteLogado(@RequestHeader(value="Authorization") String token){
		return service.clienteLogado(token);
	}
	
}

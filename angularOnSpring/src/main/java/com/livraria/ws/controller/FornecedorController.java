package com.livraria.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.Fornecedor;
import com.livraria.ws.service.FornecedorService;
@CrossOrigin
@RestController
@RequestMapping("/api/fornecedor")
public class FornecedorController {

	@Autowired
	private FornecedorService service;
	
	@PostMapping("/")
	public Fornecedor salvarFornecedor(@RequestBody Fornecedor fornecedor){
		return service.salvarFornecedor(fornecedor);
	}
	
	@PutMapping("/")
	public Fornecedor atualizarFornecedor(@RequestBody Fornecedor fornecedor){
		return service.salvarFornecedor(fornecedor);
	}
	
	@DeleteMapping("/{id}")
	public void deleterFornecedor(@PathVariable Integer id){
		service.deleterFornecedor(id);
	}
	
	@GetMapping("/{id}")
	public Fornecedor getFornecedor(@PathVariable Integer id){
		return service.getFornecedor(id);
	}
	
	@GetMapping("/")
	public Collection<Fornecedor> listarFornecedores(){
		return service.listarFornecedores();
	}
	
	
	
}

package com.livraria.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.Livro;
import com.livraria.ws.repository.LivroRepository;
import com.livraria.ws.service.LivroService;

@RestController
@RequestMapping("/api/livro")
public class LivroController {

	@Autowired
	private LivroService service;
	
	// salvar
	@PostMapping("/")
	public Livro cadastrarLivro(@RequestBody Livro livro){
		return service.salvarLivro(livro);
	}
	
	// deletar
	@DeleteMapping("/{id}")
	public void deletarLivro(@PathVariable Integer id){
		service.deletarLivro(id);
	}
	
	// atualizar
	@PutMapping("/")
	public Livro atualizarLivro(@RequestBody Livro livro){
		return service.salvarLivro(livro);
	}
	
	// listar
	@GetMapping("/")
	public Collection<Livro> listarLivros(){
		return service.listarLivros();
	}
	
	// pesquisar
	@GetMapping("/{id}")
	public Livro getLivro(@PathVariable Integer id){
		return service.getLivro(id);
	}
}

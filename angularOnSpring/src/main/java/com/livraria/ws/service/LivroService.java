package com.livraria.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.livraria.model.Livro;
import com.livraria.ws.repository.LivroRepository;

@Service
public class LivroService {

	@Autowired
	private LivroRepository repository;
	
	// salvar e atualizar
	public Livro salvarLivro(Livro livro){
		return repository.save(livro);
	}
	
	// deletar
	public void deletarLivro(Integer id){
		repository.delete(id);
	}
	
	// listar
	public Collection<Livro> listarLivros(){
		return repository.findAll();
	}
	
	// pesquisar
	public Livro getLivro(Integer id){
		return repository.findOne(id);
	}
	
	// filtrar por categoria
	public Collection<Livro> livrosPorCategoria(String categoria){
		if(categoria.equals("Todos")){
			return listarLivros();
		}
		return repository.findByCategoriaOrderByTituloAsc(categoria);
	}
	
}

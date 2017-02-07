package com.livraria.ws.service;

import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.livraria.model.FotoLivroResponse;
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
		List<Livro> livros = repository.findAll();
		livros.forEach(l -> l.setFoto(null));
		return livros;
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
		List<Livro> livrosFiltro = repository.findByCategoriaOrderByTituloAsc(categoria);
		livrosFiltro.forEach(l -> l.setFoto(null));
		return livrosFiltro;
	}
	
	// pesquisar foto
	public ResponseEntity<FotoLivroResponse> getFotoLivro(Integer id){
		
		FotoLivroResponse foto = new FotoLivroResponse(repository.findFotoById(id));
		
		return new ResponseEntity<>(foto, HttpStatus.OK);
	}
	
}

package com.livraria.ws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.livraria.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Integer>{

	public List<Livro> findByCategoriaOrderByTituloAsc(String categoria);
	
}

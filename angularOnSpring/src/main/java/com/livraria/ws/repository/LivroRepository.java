package com.livraria.ws.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.livraria.model.Livro;

public interface LivroRepository extends JpaRepository<Livro, Integer>{

	public List<Livro> findByCategoriaOrderByTituloAsc(String categoria);
	
	@Query("select l.foto from Livro l where l.id = :#{#id}")
	public String findFotoById(@Param("id") Integer id);
	
}

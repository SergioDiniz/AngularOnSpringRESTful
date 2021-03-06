package com.livraria.ws.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.livraria.model.Cidades;

public interface CidadesRepository extends JpaRepository<Cidades, Integer> {

	@Query("select c from Cidades c where c.estados.id = :#{#estadoID}")
	Collection<Cidades> listarCidadesPorEstado(@Param("estadoID") Integer estadoID);
	
}

package com.livraria.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.livraria.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

	@Query("select  c from Cliente c where c.email = :#{#email} and c.senha = :#{#senha}")
	Cliente login(@Param("email") String email, @Param("senha") String senha);
	
}

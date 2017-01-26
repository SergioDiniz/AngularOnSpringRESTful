package com.livraria.ws.repository;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.livraria.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Integer>{
	
	@Query("select p from Pedido p where p.cliente.id = :#{#id}")
	Collection<Pedido> pedidosDeCLiente(@Param("id") Integer id);

}

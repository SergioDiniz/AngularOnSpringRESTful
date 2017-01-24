package com.livraria.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.livraria.model.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{

}

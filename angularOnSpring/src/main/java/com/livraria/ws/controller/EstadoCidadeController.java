package com.livraria.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.Cidades;
import com.livraria.model.Estados;
import com.livraria.ws.service.EstadoCidadeService;
@CrossOrigin
@RestController
@RequestMapping("/api/ec")
public class EstadoCidadeController {
	
	@Autowired
	private EstadoCidadeService service;

	@GetMapping("/estados")
	public Collection<Estados> listarEstados(){
		return service.listarEstados();
	}
	
	@GetMapping("/cidades/{estadoID}")
	public Collection<Cidades> listarCidadesPorEstado(@PathVariable Integer estadoID){
		return service.listarCidadesPorEstado(estadoID);
	}
	
}

package com.livraria.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.Cidades;
import com.livraria.model.Estados;
import com.livraria.ws.repository.CidadesRepository;
import com.livraria.ws.repository.EstadosRepository;

@RestController
@RequestMapping("/api/ec")
public class EstadosCidadesController {

	@Autowired
	private EstadosRepository estadosRepository;
	
	@Autowired
	private CidadesRepository cidadesRepository;
	
	@GetMapping(value="/estados", produces=MediaType.APPLICATION_JSON_VALUE)
	public Collection<Estados> listEstados(){
		return estadosRepository.findAll();
	}
	
	@GetMapping(value="/cidades/{estadoID}", produces=MediaType.APPLICATION_JSON_VALUE)
	public Collection<Cidades> listCidadesPorEstado(@PathVariable Integer estadoID){
		return cidadesRepository.getCidadesPorEstado(estadoID);
	}
	
	@PostMapping(value="/estados", consumes=MediaType.APPLICATION_JSON_VALUE)
	public Estados novaCidade(@RequestBody Estados estado){
		Estados e = new Estados();
		e.setNome("sergio");
		e.setSigla("SD");
		return estadosRepository.save(e);
	}
	
}

package com.livraria.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.livraria.model.Cidades;
import com.livraria.model.Estados;
import com.livraria.ws.repository.CidadesRepository;
import com.livraria.ws.repository.EstadosRepository;

@Service
public class EstadoCidadeService {

	@Autowired
	private EstadosRepository estadosRepository;
	
	@Autowired
	private CidadesRepository cidadesRepository;
	
	public Collection<Estados> listarEstados(){
		return estadosRepository.findAll();
	}
	
	public Collection<Cidades> listarCidadesPorEstado(Integer estadoID){
		return cidadesRepository.listarCidadesPorEstado(estadoID);
	}
	
}

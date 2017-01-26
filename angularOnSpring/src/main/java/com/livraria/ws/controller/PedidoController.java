package com.livraria.ws.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.ItemPedido;
import com.livraria.model.Livro;
import com.livraria.model.Pedido;
import com.livraria.ws.service.LivroService;
import com.livraria.ws.service.PedidoService;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

	@Autowired
	private PedidoService service;
	
	@Autowired
	private LivroService livroService;
	
	// salvar
	@PostMapping("/")
	public Pedido salvarPedido(@RequestBody Pedido pedido){
		return service.salvarPedido(pedido);
	}
	
	// listar
	@GetMapping("/")
	public Collection<Pedido> listarPedidos(){
		return service.listarPedidos();
	}
	
	// listar de cliente
	@GetMapping("/{id}")
	public Collection<Pedido> pedidosDeCliente(@PathVariable Integer id){
		return service.pedidosDeCliente(id);
	}
	
}

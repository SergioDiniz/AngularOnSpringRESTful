package com.livraria.ws.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.livraria.model.ItemPedido;
import com.livraria.model.Livro;
import com.livraria.model.Pedido;
import com.livraria.ws.service.LivroService;
import com.livraria.ws.service.PedidoService;

import ch.qos.logback.core.net.SyslogOutputStream;

@RestController
@RequestMapping("/api/pedidos")
public class PedidoController {

	@Autowired
	private PedidoService service;
	
	@Autowired
	private LivroService livroService;
	
	// salvar
	@PostMapping("/")
	public Pedido salvarPedido(@RequestBody Pedido pedido, @RequestHeader(value="Authorization") String token){
		return service.salvarPedido(pedido, token);
	}
	
	// listar
	@GetMapping("/all")
	public Collection<Pedido> listarPedidos(){
		return service.listarPedidos();
	}
	
	// listar de cliente
	@GetMapping("/")
	public Collection<Pedido> pedidosDeCliente(@RequestHeader(value="Authorization") String token){
		return service.pedidosDeCliente(token);
	}
	
	// receber pedido
	@PostMapping("/fazer")
	public void fazerPedido(@RequestBody List<ItemPedido> itemPedidos, @RequestHeader(value="Authorization") String token){	
		
		Pedido pedido = new Pedido();
		pedido.setItensPedido(itemPedidos);
		service.salvarPedido(pedido, token);
		
	}
	
}

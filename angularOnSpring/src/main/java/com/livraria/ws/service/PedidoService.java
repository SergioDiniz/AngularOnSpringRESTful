package com.livraria.ws.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.livraria.model.ItemPedido;
import com.livraria.model.Pedido;
import com.livraria.ws.repository.ItemPedidoRepository;
import com.livraria.ws.repository.PedidoRepository;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	// salvar pedido
	public Pedido salvarPedido(Pedido pedido){
		
		pedido.getItensPedido().forEach(p -> salvarItemPedido(p));
		
		return pedidoRepository.save(pedido);
	}
	
	// salvar itemPedido
	private ItemPedido salvarItemPedido(ItemPedido itemPedido){
		return itemPedidoRepository.save(itemPedido);
	}
	
	// listar pedidos
	public Collection<Pedido> listarPedidos(){
		return pedidoRepository.findAll();
	}
	
	// listar pedidos de clientes
	public Collection<Pedido> pedidosDeCliente(Integer id){
		return pedidoRepository.pedidosDeCLiente(id);
	}
	
}

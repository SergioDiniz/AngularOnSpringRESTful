package com.livraria.ws.service;

import java.util.Collection;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.livraria.model.Cliente;
import com.livraria.model.ItemPedido;
import com.livraria.model.Pedido;
import com.livraria.security.ManagerJWT;
import com.livraria.ws.repository.ItemPedidoRepository;
import com.livraria.ws.repository.PedidoRepository;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;
	
	@Autowired
	private ClienteService clienteService;
	
	@Autowired
	private ItemPedidoRepository itemPedidoRepository;
	
	double valorTotal = 0;
	
	// salvar pedido
	public Pedido salvarPedido(Pedido pedido, String token){

		pedido.getItensPedido().forEach(p -> salvarItemPedido(p));
		
		pedido.setDataPedido(new Date());
		pedido.setValorTotal(calcularValorTotalDePedido(pedido));
		Cliente cliente = clienteService.getClientePorToken(token); 
		pedido.setCliente(cliente);
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
	public Collection<Pedido> pedidosDeCliente(String token){
		Cliente cliente =  clienteService.clienteLogado(token);
		return pedidoRepository.pedidosDeCLiente(cliente.getId());
	}
	
	public Double calcularValorTotalDePedido(Pedido pedido){
		
		valorTotal = 0;
		
		pedido.getItensPedido().forEach(item -> {
			double valorLivro = item.getLivro().getValor();
			int quantidade = item.getQuantidade();
			
			valorTotal += valorLivro * quantidade;
			
		});
		
		return valorTotal;
		
	}
	
}

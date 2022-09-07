package com.devalmeida.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devalmeida.dsmeta.entities.Sale;
import com.devalmeida.dsmeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;	
	
	public List<Sale>  findSales() {
		return repository.findAll();		
	}
}

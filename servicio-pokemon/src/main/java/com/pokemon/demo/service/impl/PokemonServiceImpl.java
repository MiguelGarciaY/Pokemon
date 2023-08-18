 package com.pokemon.demo.service.impl;

import org.springframework.stereotype.Service;

import com.pokemon.demo.dto.PokemonSpeciesDto;
import com.pokemon.demo.service.PokemonService;
import com.pokemon.demo.util.Utilitario;

@Service
public class PokemonServiceImpl implements PokemonService {
	
	private final String apiUrl = "https://pokeapi.co/api/v2/pokemon-species";
	
	@Override
	public PokemonSpeciesDto getDataPokeApi() throws Throwable {		
		return Utilitario.get(apiUrl,PokemonSpeciesDto.class);
	}

}

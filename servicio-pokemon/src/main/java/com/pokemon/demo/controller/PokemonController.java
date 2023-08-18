package com.pokemon.demo.controller;

import org.springframework.http.HttpStatus;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pokemon.demo.dto.PokemonSpeciesDto;
import com.pokemon.demo.service.PokemonService;

@RestController
@RequestMapping(value = "/api-pokemon")
public class PokemonController {
	@Autowired
	PokemonService pokemonService;
	
	@RequestMapping(path = "/listar", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<PokemonSpeciesDto> listarPokemon() throws Throwable {
		return new ResponseEntity<PokemonSpeciesDto>(pokemonService.getDataPokeApi(),HttpStatus.OK);
	}
}

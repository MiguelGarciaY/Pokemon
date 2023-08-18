package com.pokemon.demo.model;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PokemonSpecies {
	int count;
	String next;
	String previus;
	List<Results> results;
}

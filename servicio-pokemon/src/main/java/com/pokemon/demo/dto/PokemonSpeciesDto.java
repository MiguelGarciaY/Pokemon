package com.pokemon.demo.dto;

import java.util.List;

import com.pokemon.demo.model.Results;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PokemonSpeciesDto {
    private int count;
    private String next;
    private String previous;
    private List<ResultsDto> results;
}

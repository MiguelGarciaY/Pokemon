import { Results } from "./Results.model";

export interface PokemonSpecies{
    count: number;
    next: string;
    previous: string;
    results: Results[];
}
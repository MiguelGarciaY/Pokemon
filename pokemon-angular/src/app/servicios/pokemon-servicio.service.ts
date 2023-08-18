import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicioService {

  constructor(private router: Router ,private httpClient: HttpClient) { }

  listarPokemon(): Observable<any>{
    return this.httpClient.get('api-pokemon/listar');
  }

  listarDetallesPokemon(link : string): Observable<any>{
    return this.httpClient.get(link);;
  }
}

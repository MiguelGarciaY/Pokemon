import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonServicioService } from 'src/app/servicios/pokemon-servicio.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  constructor(private route: ActivatedRoute, private pokemonService: PokemonServicioService, private location: Location) { }
  parametroBusqueda!: string
  rutaImgPokebola : string = '../assets/img/pokebola.png';
  nombrePokemon : any;
  colorPokemon : any;
  detallePokemon : any;
  linkSearchRutaImg !: string;
  rutaImgPokemon : any;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.parametroBusqueda = params['parametro'];      
    });
    console.log(this.parametroBusqueda)
    this.pokemonService.listarDetallesPokemon(this.parametroBusqueda).subscribe(rpst => {
      console.log('RSPT', rpst)
      this.nombrePokemon = rpst.name
      this.colorPokemon = rpst.color.name
      this.detallePokemon = rpst.flavor_text_entries[26].flavor_text
      this.linkSearchRutaImg = rpst.varieties[0].pokemon.url
      this.pokemonService.listarDetallesPokemon(this.linkSearchRutaImg).subscribe(rpstImg => {      
        console.log('BUSCARRR', rpstImg)
        this.rutaImgPokemon = rpstImg.sprites.front_default
        console.log('RSPTIMG', this.rutaImgPokemon)
      })
    })


  }
  goBack(): void {
    this.location.back();
  }
}

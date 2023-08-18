import { Component, OnInit, OnDestroy, ViewChild, ViewChildren, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { PokemonServicioService } from 'src/app/servicios/pokemon-servicio.service';
import { PokemonSpecies } from 'src/app/models/PokemonSpecies.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [PokemonServicioService]
})
export class PrincipalComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  @ViewChild(DataTableDirective)
  datatableElement!: DataTableDirective;
  showTable: boolean = false;
  ListPokemones: any;

  @Input() listaPokemones!: PokemonSpecies;


  constructor(private pokemonService: PokemonServicioService) { }

  ngOnInit(): void {
    this.dtOptions = {
      tableId: "tableId",
      scrollY: "530px",
      autoWidth: true,
      pageLength: 25,
      order: [[1, 'asc']],
      language: {
        "emptyTable": "No hay información disponible",
        "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
        "infoEmpty": "",
        "infoFiltered": "(filtrado de _MAX_ entradas totales)",
        "lengthMenu": "_MENU_ Entradas",
        "loadingRecords": "Cargando...",
        "processing": "Procesando...",
        "search": "Buscar registro",
        "zeroRecords": "Sin resultados",
        "paginate": {
          "first": "Primera",
          "last": "Última",
          "next": "Siguiente",
          "previous": "Anterior"
        },
        "aria": {
          "sortAscending": ": ordenar ascendentemente",
          "sortDescending": ": ordenar descendientemente"
        }
      },
      searching: true,
      dom: "<'d-flex align-items-center justify-content-between'f><rt><'d-flex align-items-center justify-content-between'lip>",
      responsive: true,
    };

    this.pokemonService.listarPokemon().subscribe(rpst => {      
      this.ListPokemones = rpst.results;
      this.dtTrigger.next(rpst.results);
      this.showTable = true;
    })
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  onResize() {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.columns.adjust();
    });
  }

}

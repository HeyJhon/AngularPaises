import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

   termino: string ="";
   hayError: boolean= false;
   paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;

      this.paisService.buscarPais(termino)
      .subscribe( paises => {
        console.log(paises);
        this.paises = paises;
      },
      error => {
        console.log(error);
        this.hayError = true;
        this.paises = [];
      }
      );

  }


  sugerencias(termino:string){
    this.hayError = false;
    //Crear sugerencias
  }
  
  ngOnInit(): void {
  }

}
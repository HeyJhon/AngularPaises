import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string ="";
  hayError: boolean= false;
  paises: Country[] = [];

 constructor(private paisService: PaisService) { }

 buscar(termino:string){
   this.hayError = false;
   this.termino = termino;

     this.paisService.buscarCapital(termino)
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

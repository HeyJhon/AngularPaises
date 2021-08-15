import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: ['button {margin-right: 5px;}'
  ]
})
export class PorRegionComponent implements OnInit {

  regiones:string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva:string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region:string){
    if(this.regionActiva === region)
    return;

    this.regionActiva = region;

    this.paises = [];



    this.paisService.buscarRegion(region)
    .subscribe(paises => {
      console.log(paises);
     this.paises = paises;
    })
  }

  getColorActive(region:string){

    return region == this.regionActiva ? 'btn-primary' : 'btn-out-line-primary';
  }

  ngOnInit(): void {
  }

}

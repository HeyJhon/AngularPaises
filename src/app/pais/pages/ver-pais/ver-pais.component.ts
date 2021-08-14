import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: ['.mr-1{ margin-right: 5px;}'
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) 
    { }

  ngOnInit(): void {
    
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.paisService.getPaisPorAlpha(id))
      , tap(console.log)
    )
    .subscribe(pais=> {
      this.pais = pais;
      console.log(pais);

    })

    // this.activatedRoute.params
    //     .subscribe(({id}) =>{
    //       console.log(id);

    //       this.paisService.getPaisPorAlpha(id)
    //       .subscribe(pais =>{
    //         console.log(pais);
    //       })

    //     })
  }

  

}
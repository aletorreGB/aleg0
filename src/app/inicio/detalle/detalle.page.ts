import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inicio } from '../inicio.model';
import { InicioService } from '../inicio.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {


inicio: Inicio


  constructor( private activatedRoute: ActivatedRoute, private inicioService : InicioService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {


      const recipeId = paramMap.get('pickId')
      

    })
  }

}

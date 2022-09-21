import { Component, OnInit } from '@angular/core';
import { InicioService } from './inicio.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  picks = []


  constructor(private inicioService : InicioService) { }

  ngOnInit() {
   this.picks =  this.inicioService.getPicks()
  }

}

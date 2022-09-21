import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ub-picks',
  templateUrl: './ub-picks.page.html',
  styleUrls: ['./ub-picks.page.scss'],
})
export class UbPICKSPage implements OnInit {
  

  private places = [
    {
      id: '1',
      title:'Camioneta 4x2',
      imageURL:'https://www.rentaleon.com/wp-content/uploads/2020/03/camioneta-fletes-baratos.jpeg',
      comments:['Camioneta 4X2 MOTOR  GASOLINA 2.5L 166 CABALLOS DE FUERZA ' ]
  
  
  
  }


  ]


  

  constructor() { }

  ngOnInit() {
  }

}

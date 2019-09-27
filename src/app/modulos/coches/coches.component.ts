import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coches',
  templateUrl: './coches.component.html',
  styleUrls: ['./coches.component.scss']
})
export class CochesComponent implements OnInit {

  coches: any[];
  constructor() {
    const coches1={
      marca: 'Mustang',
      modelo: 'GT-500',
      año: '1968',
      cilindrada: '5800cc'
    }
    const coches2={
      marca: 'Nissan',
      modelo: 'Skyline',
      año: '1999',
      cilindrada: '2600cc'
    }
    const coches3={
      marca: 'Audi',
      modelo: 'RS5',
      año: '2017',
      cilindrada: '2900'
    }
    this.coches = [];
    this.coches.push(coches1);
    this.coches.push(coches2);
    this.coches.push(coches3);

   }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-vehiculo',
  templateUrl: './list-vehiculo.component.html',
  styleUrls: ['./list-vehiculo.component.scss']
})
export class ListVehiculoComponent implements OnInit {

  @Input()
  vehiculos = [];

  @Input()
  tipo = '';

  @Input()
  detVehiculo = false;

  @Output ()
  verDet = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  checkDetalle(){
    this.detVehiculo = !this.detVehiculo;
  }

  verDetalle (vehi){
    this.verDet.emit(vehi)
  }
}

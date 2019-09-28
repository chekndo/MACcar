import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alta-vehiculo',
  templateUrl: './alta-vehiculo.component.html',
  styleUrls: ['./alta-vehiculo.component.scss']
})
export class AltaVehiculoComponent implements OnInit {

  constructor() { }

  @Input()
  vehiculo;

  @Input()
  tipo;

  @Output()
  alta=new EventEmitter<any>();

  ngOnInit() {
  }

  altaVehiculo(vehiculo){
    this.alta.emit(vehiculo);
  }
}

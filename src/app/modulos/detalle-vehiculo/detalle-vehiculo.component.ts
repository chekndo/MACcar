import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.scss']
})
export class DetalleVehiculoComponent implements OnInit {

  @Input()
  vehiculo = [];

  constructor() { }

  ngOnInit() {
  }

}

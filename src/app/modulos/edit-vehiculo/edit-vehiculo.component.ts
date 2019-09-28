import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-vehiculo',
  templateUrl: './edit-vehiculo.component.html',
  styleUrls: ['./edit-vehiculo.component.scss']
})
export class EditVehiculoComponent implements OnInit {

  constructor() { }

  @Input()
  vehiculo={};

  @Output()
  edit = new EventEmitter<any>();

  ngOnInit() {
  }

  pasarEditado(vehiculo){
    this.edit.emit(vehiculo);
  }

}

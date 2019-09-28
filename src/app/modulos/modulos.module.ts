import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio/inicio.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ListVehiculoComponent } from './list-vehiculo/list-vehiculo.component';
import { DetalleVehiculoComponent } from './detalle-vehiculo/detalle-vehiculo.component';



@NgModule({
  declarations: [InicioComponent, VehiculoComponent, ListVehiculoComponent, DetalleVehiculoComponent],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }

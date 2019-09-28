import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ListVehiculoComponent } from './list-vehiculo/list-vehiculo.component';
import { DetalleVehiculoComponent } from './detalle-vehiculo/detalle-vehiculo.component';
import { EditVehiculoComponent } from './edit-vehiculo/edit-vehiculo.component';
import { AltaVehiculoComponent } from './alta-vehiculo/alta-vehiculo.component';



@NgModule({
  declarations: [InicioComponent, VehiculoComponent, ListVehiculoComponent, DetalleVehiculoComponent, EditVehiculoComponent, AltaVehiculoComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ModulosModule { }

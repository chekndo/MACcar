import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CochesComponent } from './coches/coches.component';
import { MotosComponent } from './motos/motos.component';
import {VentanadetalleComponent} from './ventanadetalle/ventanadetalle.component';


@NgModule({
  declarations: [CochesComponent, MotosComponent, VentanadetalleComponent],
  imports: [
    CommonModule
  ]
})
export class ModulosModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulosModule } from './modulos/modulos.module';
import { InicioComponent } from './modulos/inicio/inicio.component';
import { VehiculoComponent } from './modulos/vehiculo/vehiculo.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'vehiculos', component: VehiculoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes), ModulosModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

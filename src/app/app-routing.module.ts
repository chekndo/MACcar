import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VentanadetalleComponent } from './modulos/ventanadetalle/ventanadetalle.component';
import { CochesComponent } from './modulos/coches/coches.component';
import { MotosComponent } from './modulos/motos/motos.component';
import { ModulosModule } from './modulos/modulos.module';


const routes: Routes = [
  { path: '', component: VentanadetalleComponent },
  { path: 'coches', component: CochesComponent },
  { path: 'motos', component: MotosComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), ModulosModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

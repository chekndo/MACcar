import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  coches = [
    {marca: 'Ford', 
     modelo: 'Mustang',
     cilindrada: '3500 c.c.',
     caballos: '325 cv',
     anyo: '1968',
     color: 'Gris con franjas negras',
     precio: '75.000 €'},
    {marca: 'Nissan', 
     modelo: 'GT-r',
     cilindrada: '3800 c.c.',
     caballos: '600 cv',
     anyo: '2019',
     color: 'Blanco',
     precio: '125.000 €'},      
    {marca: 'Lamborghini', 
     modelo: 'Gallardo',
     cilindrada: '4961 c.c.',
     caballos: '500 cv',
     anyo: '2019',
     color: 'Negro',
     precio: '153.000 €'}
  ];

  motos = [
    {marca: 'Kawasaki', 
     modelo: 'Z900',
     cilindrada: '948 c.c.',
     caballos: '125 cv',
     anyo: '2019',
     color: 'Candy Lime Green / Metallic Matte Graphite Gray',
     precio: '8.650 €'},
    {marca: 'Yamaha', 
     modelo: 'MT-09',     
     cilindrada: '847 c.c.',
     caballos: '115 cv',
     anyo: '2019',
     color: 'Night Fluo',
     precio: '10999 €'}, 
    {marca: 'Yamaha', 
     modelo: 'R6',  
     cilindrada: '599 c.c.',
     caballos: '118 cv',
     anyo: '2018',
     color: 'Tech Black',
     precio: '15.849 €'},           
    {marca: 'Honda', 
     modelo: 'CBR',  
     cilindrada: '649 c.c.',
     caballos: '94.6 cv',
     anyo: '2019',
     color: 'Red',
     precio: '9100 €'}
  ];

  botonCar = false;
  botonMot = false;
  listVehiculos = [];
  tipoVehiculo = '';
  detVehiculo = false;
  vehiculoDetalle = [];

  constructor() { }

  ngOnInit() {
  }

  cambiarEstadoCar() {
    this.botonCar = !this.botonMot;
    this.botonMot = false;
    this.tipoVehiculo = 'COCHES';
    this.listVehiculos = this.coches;
  }

  
  cambiarEstadoMot() {
    this.botonCar = false;
    this.botonMot = !this.botonMot;
    this.tipoVehiculo = 'MOTOS';
    this.listVehiculos = this.motos;
  }

  cambiarEstadoIni() {
    this.botonCar = false;
    this.botonMot = false;
    this.detVehiculo = false;
    this.tipoVehiculo = '';
  }

  verDet(vehiDet){
    this.detVehiculo = true;
    this.vehiculoDetalle = vehiDet;
  }

}

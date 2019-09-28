import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent implements OnInit {

  @Input()
  rolVisor;

  coches = [
    {id: '1',
     marca: 'Ford', 
     modelo: 'Mustang',
     cilindrada: '3500 c.c.',
     caballos: '325 cv',
     anyo: '1968',
     color: 'Gris con franjas negras',
     precio: '75.000 €'},
    {id: '2',
    marca: 'Nissan', 
     modelo: 'GT-r',
     cilindrada: '3800 c.c.',
     caballos: '600 cv',
     anyo: '2019',
     color: 'Blanco',
     precio: '125.000 €'},      
    {id: '3',
    marca: 'Lamborghini', 
     modelo: 'Gallardo',
     cilindrada: '4961 c.c.',
     caballos: '500 cv',
     anyo: '2019',
     color: 'Negro',
     precio: '153.000 €'}
  ];

  motos = [
    {id: '1',
     marca: 'Kawasaki', 
     modelo: 'Z900',
     cilindrada: '948 c.c.',
     caballos: '125 cv',
     anyo: '2019',
     color: 'Candy Lime Green / Metallic Matte Graphite Gray',
     precio: '8.650 €'},
    {id: '2',
     marca: 'Yamaha', 
     modelo: 'MT-09',     
     cilindrada: '847 c.c.',
     caballos: '115 cv',
     anyo: '2019',
     color: 'Night Fluo',
     precio: '10999 €'}, 
    {id: '3',
     marca: 'Yamaha', 
     modelo: 'R6',  
     cilindrada: '599 c.c.',
     caballos: '118 cv',
     anyo: '2018',
     color: 'Tech Black',
     precio: '15.849 €'},           
    {id: '4',
     marca: 'Honda', 
     modelo: 'CBR',  
     cilindrada: '649 c.c.',
     caballos: '94.6 cv',
     anyo: '2019',
     color: 'Red',
     precio: '9100 €'}
  ];

  botonCar = false;
  botonMot = false;
  detVehiculo = false;
  editando = false;
  agregar = false;
  listVehiculos = [];
  tipoVehiculo = '';
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

  pasarEditado() {
    this.editando = true;
    this.botonCar = false;
    this.botonMot = false;
    this.detVehiculo = false;
    this.tipoVehiculo = '';
  }

  verDeta(vehiDet){
    this.detVehiculo = true;
    this.vehiculoDetalle = vehiDet;
  }

  editarVehiculo(vehiculo){
    this.vehiculoDetalle =vehiculo;
    this.editando = false;
  }

  agregarVehiculo(tipo){
    this.agregar = true;
    this.vehiculoDetalle = [];
  }

  altaVehiculo(vehiculo){
    if (this.tipoVehiculo === 'COCHES')
    {
      this.coches.unshift(vehiculo);
      this.listVehiculos = this.coches
    }
    else if (this.tipoVehiculo === 'MOTOS'){
      this.motos.unshift(vehiculo);
      this.listVehiculos = this.motos;
    } 
    this.agregar = false;
  }

  borrarVehiculo(vehiculo){
    
    if (this.tipoVehiculo === 'COCHES')
    {
      this.coches = this.coches.filter(t => t.id !== vehiculo.id);
      this.listVehiculos = this.coches;
    }
    else if (this.tipoVehiculo === 'MOTOS'){
      this.motos = this.motos.filter(t => t.id !== vehiculo.id);
      this.listVehiculos = this.motos;
    } 
    this.detVehiculo = !this.detVehiculo;    
  }

}

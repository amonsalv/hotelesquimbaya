import { Component } from '@angular/core';

import { Habitacion } from '../interfaces/Habitacion';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent {

  public habitacion1:Habitacion={
    nombre:"Cabaña en san felix",
    foto:["https://firebasestorage.googleapis.com/v0/b/hotelquimbayaamm.appspot.com/o/caba%C3%B1a1.png?alt=media&token=f7d07a5a-cef0-4b95-aecb-ff7df9d8e89b","https://firebasestorage.googleapis.com/v0/b/hotelquimbayaamm.appspot.com/o/caba%C3%B1a1v.png?alt=media&token=d127a779-7cfa-4756-a6e1-60dd352e9a6f"],
    descripcion:"Cabaña con 2 camas, cocina y comedor",
    precioNoche:250,
    cantidadMaxima:4
  }

  
  public habitacion2:Habitacion={
    nombre:"Cabaña en envigado",
    foto:["https://firebasestorage.googleapis.com/v0/b/hotelquimbayaamm.appspot.com/o/caba%C3%B1a1.png?alt=media&token=f7d07a5a-cef0-4b95-aecb-ff7df9d8e89b","https://firebasestorage.googleapis.com/v0/b/hotelquimbayaamm.appspot.com/o/caba%C3%B1a1v.png?alt=media&token=d127a779-7cfa-4756-a6e1-60dd352e9a6f"],
    descripcion:"Cabaña con 2 camas, cocina y comedor",
    precioNoche:250,
    cantidadMaxima:4
  }

  public habitaciones:Habitacion[]=[this.habitacion1,this.habitacion2]

  public constructor(){
    console.log(this.habitaciones)
  }


}

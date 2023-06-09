import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { HabitacionService } from '../services/habitacion.service';
import { ReservasService } from '../services/reservas.service';

@Component({
  selector: 'app-formulario-habitacion',
  templateUrl: './formulariohabitacion.component.html',
  styleUrls: ['./formulariohabitacion.component.css']
})
//hacemos la validacion de formulario que se hace por medio de ts
export class FormulariohabitacionComponent {

  public formulario:FormGroup
  public datosFormulario:any[]=[]
  public habitaciones: any

  public constructor (public constructorFormulario:FormBuilder, public servicio:ReservasService ,public servicioHabitacion:HabitacionService){
    this.formulario=this.inicializarFormulario()
    this.servicioHabitacion.buscarHabitaciones().subscribe({
      next: (respuesta) => {
        this.habitaciones= respuesta.habitaciones
        console.log(respuesta)
      }, error: (Error)=>{
        console.log(Error)
      }
    })
  }

  //indicamos al ts que inputs tenemos asociados al html
  public inicializarFormulario():FormGroup{
    return this.constructorFormulario.group({
      //arreglos y el valor que le vamos a asignar
      nombre:[''], 
      foto:[''],
      descripcion:[''],
      precioNoche:[''],
      cantMaxima:['']
    })
  }
  
  public procesarDatos():void{

    let datos=this.formulario.value
    
    this.servicio.registrarReserva(datos).subscribe({
      next: (respuesta) => { 
        location.reload()
      }, 
        error: (Error) => {
          console.log(Error)
          }
        })
      }
}
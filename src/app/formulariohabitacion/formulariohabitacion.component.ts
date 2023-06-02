import { Component } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms'
import { HabitacionService } from '../habitacion.service';



@Component({
  selector: 'app-formulario-habitacion',
  templateUrl: './formulario-habitacion.component.html',
  styleUrls: ['./formulario-habitacion.component.css']
})
export class FormularioHabitacionComponent {

  formulario!:FormGroup;
  datos:any[]=[];

  constructor( public fabricaDiccionario:FormBuilder, public servicioHabitacion:HabitacionService) { 
    this.formulario=this.inicializarFormulario()

  }

  public inicializarFormulario():FormGroup{
    return this.fabricaDiccionario.group({
      nombre:['juan'],
      foto:[''],
      descripcion:[''],
      precioNoche:[''],
      cantidadmaxima:['']
    })
  }

  public recogerInformacion():void{

    let datos=this.formulario.value
    
    this.servicioHabitacion.registrarHabitacion(datos)
    .subscribe(respuesta=>{
      console.log(respuesta)
    })

  }
  



}

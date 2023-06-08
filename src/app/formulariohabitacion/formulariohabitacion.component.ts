import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-formulario-habitacion',
  templateUrl: './formulariohabitacion.component.html',
  styleUrls: ['./formulariohabitacion.component.css']
})
//hacemos la validacion de formulario que se hace por medio de ts
export class FormulariohabitacionComponent {

  public formulario:FormGroup
  public datosFormulario:any[]=[]

  public constructor (public constructorFormulario:FormBuilder){
    this.formulario=this.inicializarFormulario()
  }

  public inicializarFormulario():FormGroup{
    return this.constructorFormulario.group({})
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {

  public url:string="https://pruebaapihoteles.vercel.app/"

  constructor(public servicioHabitacion:HttpClient) { }

  buscarHabitaciones():Observable<any>{
    let urlServicio:string=this.url+"buscarhabitaciones"
    return this.servicioHabitacion.get(urlServicio)
  }

  RegistarHabitacion(datos:any):Observable<any>{
    let urlServicio:string=this.url+"registrarhabitacion"
    return this.servicioHabitacion.post(urlServicio,datos)
  
  }

}

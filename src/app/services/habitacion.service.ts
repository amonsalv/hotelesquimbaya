import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  
  public url:string='https://servidor-viernes.vercel.app/'

  constructor(public servicioHabitacion:HttpClient) { }

  public buscarHabitaciones():Observable<any>{
    let urlServicio:string=this.url+"buscarhabitaciones"
    return this.servicioHabitacion.get(urlServicio)
  }

  public registrarHabitacion(datos:any):Observable<any>{
    let urlServicio:string=this.url+"registrarhabitacion"
    return this.servicioHabitacion.post(urlServicio,datos)
  
  }

  


}
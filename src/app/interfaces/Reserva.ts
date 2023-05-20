export interface Reserva{
    nombreCliente:string,
    Apellidocliente:string,
    telefono:number,
    fechaInicio:Date,
    fechaFinal:Date,
    cantidadPersonas:number,
    idHabitacion:string,
    costoReserva?:number
}
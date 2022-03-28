import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empleado } from './Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
API: string="http://172.17.9.186/empleados/"
  constructor(private clienteHttp:HttpClient) { }

  agregarEmpleado(datosEmpleado:empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1",datosEmpleado);
  }
  ObtenerEmpleado(){
    return this.clienteHttp.get(this.API);
  }
  borrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+id);
  }
  consultarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+id);
  }
  editarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id,datosEmpleado); 

}

}
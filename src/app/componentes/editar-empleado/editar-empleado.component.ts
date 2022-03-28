import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';



@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  Id:any;

  constructor(
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    public formulario:FormBuilder,
    private routeador:Router
  ) { 
    this.Id=this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.consultarEmpleado(this.Id).subscribe(respuesta=>{
    this.formularioDeEmpleados.setValue({
      nombre:respuesta[0]['nombre'],
      correo:respuesta[0]['correo']
    })
    }
      );
    this.formularioDeEmpleados=this.formulario.group(
      {
      nombre:[''],
      correo:['']
      }
      )
    
  }
  

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.Id);
    console.log(this.formularioDeEmpleados.value);
    this.crudService.editarEmpleado(this.Id,this.formularioDeEmpleados.value).subscribe(()=>{
      this.routeador.navigateByUrl('/listar-empleado')
    }
    );
  }
}

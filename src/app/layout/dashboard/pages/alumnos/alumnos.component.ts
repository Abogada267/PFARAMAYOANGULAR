import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  template: `
    <h2>Listado de Alumnos</h2>
    <div *ngFor="let alumno of alumnos">
      <p>{{ alumno.apellido }}, {{ alumno.nombre }} - {{ alumno.correo }}</p>
    </div>
    <app-entrada-datos (datosGuardados)="guardarDatos($event)"></app-entrada-datos>
  `,
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  dataSource: any; 
  displayedColumns: string[] = ['id', 'name', 'email']; 
  alumnoFormData: any = {};
  AlumnoNameInput: string = '';
  AlumnoData: any;
  totalItems: number = 0;
  pageSize: number = 5;

   alumnos: {apellido: string, nombre: string, correo: string}[] = [];

  guardarDatos(datos: {apellido: string, nombre: string, correo: string}) {
    this.alumnos.push(datos);
  
  }

 onPage(event: any) {
   
 }
  onSubmitAlumno() {
   
  }
}
   
  

  


import { Component, Input, OnInit } from '@angular/core';
import { DatosGuardados } from '../../../../shared.models';
import { Cursos } from '../cursos/models';

interface Alumno {
  apellido: string;
  nombre: string;
  correo: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
  @Input() cursosData: Cursos[] = [];
  @Input() inscripciones: any[] = []; 
  nuevoAlumno: any;
  listaAlumnos: Alumno[] = [];
  displayedColumns: string[] = ['apellido', 'nombre', 'correo'];
   totalItems: unknown;
  pageSize: unknown;
  cursoId: any;
  nombreDelCurso?: string;

  constructor( ) {}

  ngOnInit(): void {
    this.cargarCursos();
  }

 inscribirse(): void {
  
   
  }
  cargarCursos(): void {
   }

  recibirDatosGuardados(datos: DatosGuardados) {
    const nuevoAlumno: Alumno = {
      apellido: datos.apellido,
      nombre: datos.nombre,
      correo: datos.correo,
    };
    this.listaAlumnos.push(nuevoAlumno);

    

    if (this.cursoId !== undefined) {
      const inscripcion = { alumno: nuevoAlumno, cursoId: this.cursoId };
      this.inscripciones.push(inscripcion);
    }
  }

  onSubmitAlumno() {
    
  }

  onPage(event: any) {
   
  }

  nombreDelCursoPorId(cursoId: number): string {
    const curso = this.cursosData.find((curso) => curso.id === cursoId);
    return curso ? curso.name : 'Curso no encontrado';
  }
}



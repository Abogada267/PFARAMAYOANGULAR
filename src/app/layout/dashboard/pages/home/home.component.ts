import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { CursosService } from "../../../../core/services/cursos.service";
import { InscripcionesService } from "../../../../core/services/inscripciones.service";
import { Home } from '../home/home';


interface Inscripcion {
  cursoId: number;
  alumno: {
    apellido: string;
    nombre: string;
    correo: string;
  };
  }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeNameInput: string = '';
  homeData: any; 
  productsService: any; 
   inscripciones: Inscripcion[] = [];
  totalItems: number = 0; 
  pageSize: number = 10;
  
  constructor(
    private router: Router,
    public dialog: MatDialog,
    private cursosService: CursosService,
  private inscripcionesService: InscripcionesService)
   {}

 recibirDatosGuardados(nuevaInscripcion: Inscripcion) {
    this.inscripciones.push(nuevaInscripcion);
    this.totalItems = this.inscripciones.length;
  }

   ngOnInit(): void {
   
    window.addEventListener('message', (event) => {
      if (event.data === 'nuevoAlumnoInscrito') {
        
        this.actualizarListaInscripciones();
      }
    });
  }

  actualizarListaInscripciones(): void {
 
    this.inscripcionesService.obtenerInscripciones().subscribe(inscripciones => {
      this.inscripciones = inscripciones;
    });
  }



inscribirse(cursoId: number): void {
  this.cursosService.inscribirseEnCurso(cursoId).subscribe(
    () => {
      console.log('Inscripción exitosa');
      const nuevaInscripcion: Inscripcion = {
        cursoId: cursoId,
        alumno: {
          apellido: 'Apellido del alumno',
          nombre: 'Nombre del alumno',
          correo: 'correo@example.com'
        }
      };
      this.recibirDatosGuardados(nuevaInscripcion);
      this.router.navigate(['../alumnos']);
    },
    error => {
      console.error('Error al inscribirse:', error);
    }
  );
}


  updateHomeName(event: any): void {
    this.homeNameInput = (event.target as HTMLInputElement).value;
  }

  navegarAotraPagina(): void {
    this.router.navigate(['../alumnos']); 
  }

 
   detalle(): void {
    this.router.navigate(['../cursos']); 
  }

  onCreate(): void {
   
  }

  onEdit(product: Home) {
   
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) {
  
    }
  }
}



import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CursosService } from '../../../../core/services/cursos.service';
import { cursosList } from './cursos.mock';
import { EditCursoDialogComponent } from './edit-curso-dialog.component';
import { Cursos } from './models';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursosData: Cursos[] = [];
  cursosNameInput: string = '';
  displayedColumns: string[] = ['id', 'name', 'descripcion', 'cantidad de inscriptos']; 
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageIndex: number = 0;
  pageSize: number = 10;
  length: number = 0;
  cursosList = cursosList;
cursos: any;
  

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private cursosService: CursosService 
  ) { }

  ngOnInit(): void {
    this.loadCursos();
  }

  loadCursos(): void {
    this.cursosService.getCursos(this.pageIndex, this.pageSize).subscribe(
      (data: Cursos[]) => {
        this.cursosData = data;
      },
      (error: any) => {
        console.error('Error al cargar cursos:', error);
      }
    );
  }

  onPage(event: PageEvent): void {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadCursos();
  }

  updateHomeName(event: any): void {
    this.cursosNameInput = event.target.value;
  }

  navegarAotraPagina(): void {
    this.router.navigate(['../alumnos']);
  }

   onCreate(): void {
    const dialogRef = this.dialog.open(EditCursoDialogComponent, {
      width: '400px'
    });

    dialogRef.componentInstance.cursoActualizado.subscribe((nuevoCurso: Cursos) => {
       this.cursosData.push(nuevoCurso);
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de creación de curso se cerró');
    });
  }

  onEdit(curso: Cursos): void {
    const dialogRef = this.dialog.open(EditCursoDialogComponent, {
      width: '400px', 
      data: curso
    });

    dialogRef.componentInstance.cursoActualizado.subscribe((cursoActualizado: Cursos) => {
      console.log('Curso actualizado:', cursoActualizado);
      this.loadCursos(); 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('El diálogo de edición de curso se cerró');
    });
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) {
     
    }
  }
}


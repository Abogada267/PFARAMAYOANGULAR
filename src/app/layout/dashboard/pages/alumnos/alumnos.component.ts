import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from "@angular/router";
import { AlumnosService } from '../../../../../app/core/services/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {
  dataSource: any; 
  displayedColumns: string[] = ['id', 'name', 'email']; 
  alumnoFormData: any = {};
  AlumnoNameInput: string = '';
  AlumnoData: any;
  totalItems: number = 0;
  pageSize: number = 5;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private AlumnosService: AlumnosService
  ) { }

  ngOnInit() {
    
  }

  updateHomeName(event: any): void {
    this.AlumnoNameInput = (event.target as HTMLInputElement).value;
  }

  navegarAotraPagina(): void {
    this.router.navigate(['../Alumnos']);
  }

  onSubmitAlumno(): void {
    this.AlumnosService.guardarAlumno(this.alumnoFormData).subscribe(
      (response: any) => {
        console.log('Alumno guardado correctamente:', response);
      },
      (error: any) => {
        console.error('Error al guardar el alumno:', error);
      }
    );
  }

  onCreate(): void {
   
  }

  onEdit(product: any) {
    
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) {
    
    }
  }

  onPage(event: PageEvent): void {
    console.log('Página actual:', event.pageIndex);
    console.log('Elementos por página:', event.pageSize);
  }
}


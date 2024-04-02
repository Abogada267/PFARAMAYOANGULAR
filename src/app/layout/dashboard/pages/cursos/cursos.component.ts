import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from '@angular/material/paginator';
import { Router } from "@angular/router";
import { Cursos } from './models';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursosNameInput: string = '';
  cursosData: Cursos[] = []; 
displayedColumns: any;
loadMore: any;
loadChildren: any;
treeControl: any;
dataSource: any;

  constructor(
    private router: Router,
    public dialog: MatDialog,
   
  ) { }

  ngOnInit() {

  
  }

  updateHomeName(event: any): void {
    this.cursosNameInput = (event.target as HTMLInputElement).value;
  }



  onCreate(): void {
    
  }

   onPage(event: PageEvent): void {
    
    console.log(event);
  }
    navegarAotraPagina(): void {
    
    this.router.navigate(['../alumnos']); 
  }


  onEdit(curso: Cursos) {
    
  }

  onDelete(id: number): void {
    if (confirm('¿Está seguro?')) {
      
    }
  }
}







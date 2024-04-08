import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CursosService } from '../../../../core/services/cursos.service';
import { Cursos } from './models';

@Component({
  selector: 'app-edit-curso-dialog',
  templateUrl: './edit-curso-dialog.component.html',
  styleUrls: ['./edit-curso-dialog.component.scss']
})
export class EditCursoDialogComponent {
  formularioDatos: any = {}; // Inicializamos el formularioDatos

  // Emite el curso actualizado
  @Output() cursoActualizado: EventEmitter<Cursos> = new EventEmitter<Cursos>();

  constructor(
    public dialogRef: MatDialogRef<EditCursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public curso: Cursos,
    private cursosService: CursosService 
  ) {}

  async guardarCambios(): Promise<void> {
    console.log('Guardar cambios en el curso:', this.formularioDatos);
    try {
     
      const nuevoCurso: Cursos = {
        id: Math.random(),
        name: this.formularioDatos.nombre,
        descripcion: this.formularioDatos.descripcion,
        imagenUrl: this.formularioDatos.imagenUrl,
        cantidadInscriptos: 0 
      };

      
      this.cursoActualizado.emit(nuevoCurso);

     
      this.dialogRef.close(); 
    } catch (error) {
      console.error('Error al guardar curso:', error);
    }
  }
  
  cancelar(): void {
    this.dialogRef.close();
  }
}







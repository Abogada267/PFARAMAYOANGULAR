import { Component, EventEmitter, Output } from '@angular/core';
import { Inscripcion, InscripcionesService } from '../../../../core/services/inscripciones.service';
import { DatosGuardados } from '../../../../shared/models/DatosGuardados';

@Component({
  selector: 'app-entrada-datos',
  templateUrl: './entrada-datos.component.html',
  styleUrls: ['./entrada-datos.component.scss']
})
export class EntradaDatosComponent {
  @Output() datosGuardados: EventEmitter<DatosGuardados> = new EventEmitter<DatosGuardados>();
inscripcion: any;

  constructor(private inscripcionesService: InscripcionesService) {}

  inscribirse(): void {
    const curso = (document.getElementById('curso') as HTMLInputElement).value;
    const apellido = (document.getElementById('apellido') as HTMLInputElement).value;
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const correo = (document.getElementById('correo') as HTMLInputElement).value;

    const datos: DatosGuardados = {
      apellido: apellido,
      nombre: nombre,
      correo: correo
    };
    this.datosGuardados.emit(datos);
const inscripcion: Inscripcion = { 
      cursoId: 1, 
      alumno: {
        apellido: apellido,
        nombre: nombre,
        correo: correo
      }
};
  
    this.inscripcionesService.agregarInscripcion(inscripcion);
    
    (document.getElementById('curso') as HTMLInputElement).value = '';
    (document.getElementById('apellido') as HTMLInputElement).value = '';
    (document.getElementById('nombre') as HTMLInputElement).value = '';
    (document.getElementById('correo') as HTMLInputElement).value = '';
  }
}






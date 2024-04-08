import { Component, EventEmitter, Output } from '@angular/core';
import { DatosGuardados } from '../../../../shared.models';

@Component({
  selector: 'app-entrada-datos',
  templateUrl: './entrada-datos.component.html',
  styleUrls: ['./entrada-datos.component.scss'] 
})
export class EntradaDatosComponent {
  @Output() datosGuardados: EventEmitter<DatosGuardados> = new EventEmitter<DatosGuardados>();

  apellido: string = '';
  nombre: string = '';
  correo: string = '';
listaAlumnos: any;

  guardar() {
    
    if (this.apellido && this.nombre && this.correo) {
      const datos: DatosGuardados = {
        apellido: this.apellido,
        nombre: this.nombre,
        correo: this.correo
      };
      this.datosGuardados.emit(datos);
      
     
      this.apellido = '';
      this.nombre = '';
      this.correo = '';
    } else {
    
      alert('Por favor ingrese todos los campos.');
    }
  }
}

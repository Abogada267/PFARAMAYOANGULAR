import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-entrada-datos',
  template: `
    <div>
      <label>Apellido:</label>
      <input [(ngModel)]="apellido" placeholder="Ingrese su apellido">
    </div>
    <div>
      <label>Nombre:</label>
      <input [(ngModel)]="nombre" placeholder="Ingrese su nombre">
    </div>
    <div>
      <label>Correo Electrónico:</label>
      <input [(ngModel)]="correo" placeholder="Ingrese su correo electrónico">
    </div>
    <button (click)="guardar()">Guardar</button>
  `,
  styleUrls: ['./entrada-datos.component.scss'] 
})
export class EntradaDatosComponent {
  apellido: string = '';
  nombre: string = '';
  correo: string = '';

  @Output() datosGuardados = new EventEmitter<{apellido: string, nombre: string, correo: string}>();

  guardar() {
    if (this.apellido && this.nombre && this.correo) {
      this.datosGuardados.emit({apellido: this.apellido, nombre: this.nombre, correo: this.correo});
    } else {
      alert("Por favor ingrese todos los campos");
    }
  }
}


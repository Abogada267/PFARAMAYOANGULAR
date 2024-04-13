import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatosGuardados } from '../../shared/models/DatosGuardados';

export interface Inscripcion {
  cursoId: number;
  alumno: DatosGuardados;
}

    
@Injectable({
  providedIn: 'root'
})
export class InscripcionesService {
  private inscripcionesSubject: BehaviorSubject<Inscripcion[]> = new BehaviorSubject<Inscripcion[]>([]);
  public inscripciones$: Observable<Inscripcion[]> = this.inscripcionesSubject.asObservable();

  constructor() { }

  agregarInscripcion(inscripcion: Inscripcion): void {
    const inscripciones = this.inscripcionesSubject.getValue();
    inscripciones.push(inscripcion);
    this.inscripcionesSubject.next(inscripciones);
  }

  obtenerInscripciones(): Observable<Inscripcion[]> {
    return this.inscripciones$;
  }
}

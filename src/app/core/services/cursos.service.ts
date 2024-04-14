import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cursos } from '../../layout/dashboard/pages/cursos/models';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
   private apiUrl = 'http://localhost:3000/api/cursos';
  private cursos: Cursos[] = [];
  
  constructor(private http: HttpClient) { }

  actualizarCurso(cursoId: number, datosActualizados: any): Observable<any> {
    const url = `${this.apiUrl}/api/cursos/actualizar-por-nombre`;
    return this.http.post<any>(url, { cursoId: cursoId, datosActualizados }).pipe(
      catchError(error => {
        console.error('Error al actualizar curso:', error);
        return throwError(error);
      })
    );
  }


   agregarCurso(curso: Cursos): void {
    this.cursos.push(curso);
  }

  getCursos(pageIndex: number, pageSize: number): Observable<Cursos[]> {
  
    return this.http.get<Cursos[]>(this.apiUrl).pipe(
      
      catchError(error => {
        console.error('Error al obtener cursos:', error);
        return throwError(error);
      })
    );
  }

  inscribirseEnCurso(cursoId: number): Observable<any> {
  
    return this.http.post<any>(`${this.apiUrl}/${cursoId}/inscripcion`, {}).pipe(
      catchError(error => {
        console.error('Error al inscribirse en el curso:', error);
        return throwError(error);
      })
    );
  }
}








  



  




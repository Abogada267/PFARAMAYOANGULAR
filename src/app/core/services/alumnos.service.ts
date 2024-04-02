import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, mergeMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Alumno } from '../../layout/dashboard/pages/alumnos/models';
import { Pagination } from '../models/pagination';
import { AlertsService } from '../services/alerts.service';

const ROLES_DB: string[] = ['ADMIN', 'USER'];

@Injectable ({
providedIn: 'root'
  })
export class AlumnosService {
  constructor(private alerts: AlertsService,  private httpClient: HttpClient
  ) {}

  guardarAlumno(alumno: Alumno): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiURL}/alumnos`, alumno)
      .pipe(
        catchError(error => {
          this.alerts.showError('Error al guardar el alumno');
          throw error;
        })
      );
  }

  generateString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getAlumnoById(id: number | string): Observable<Alumno | undefined> {
    return this.httpClient.get<Alumno>(`${environment.apiURL}/alumnos/${id}`)
       }
      
  
  getRoles(): Observable<string[]> {
    return of(ROLES_DB).pipe(delay(1000));
  }

 getAlumnos() {
    // let headers = new HttpHeaders();
    // headers = headers.append('HOLAMUNDO', localStorage.getItem('token') || '');
    return this.httpClient
      .get<Alumno[]>(`${environment.apiURL}/alumnos`, {
        // headers: headers,
      })
      .pipe(
        catchError((error) => {
          this.alerts.showError('Error al cargar los usuarios');
          return of([]);
        })
      );
  }

  paginate(page: number, perPage = 5) {
    return this.httpClient.get<Pagination<Alumno>>(
      `${environment.apiURL}/alumnos?_page=${page}&_per_page=${perPage}`
    );
  }

  createAlumno(payload: Alumno) {
    return this.httpClient
      .post<Alumno>(`${environment.apiURL}/alumnos`, {
        ...payload,
        token: this.generateString(15),
        })
        .pipe(mergeMap(() => this.getAlumnos()));
  }
    
  deleteAlumno(alumnoID: Alumno) {
    return this.httpClient
      .delete<Alumno[]>(`${environment.apiURL}/alumnos/${alumnoID}`)
      .pipe( mergeMap(() => this.getAlumnos())
      );
  }

  getAllBuyers(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.apiURL}/alumnos?role=BUYER`
    );
  }
}

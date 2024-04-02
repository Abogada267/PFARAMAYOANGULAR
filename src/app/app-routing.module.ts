import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from '../../src/app/layout/dashboard/pages/cursos/cursos.component';
import { HomeComponent } from '../../src/app/layout/dashboard/pages/home/home.component';
import { UsersComponent } from '../../src/app/layout/dashboard/pages/users/users.component';
import { AlumnosComponent } from '../app/layout/dashboard/pages/alumnos/alumnos.component';
import { AlumnosDetailComponent } from './layout/dashboard/pages/alumnos/alumnos-detail/alumnos-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/:id', component: AlumnosDetailComponent },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTableModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

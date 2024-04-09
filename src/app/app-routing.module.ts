import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosDetailComponent } from './layout/dashboard/pages/alumnos/alumnos-detail/alumnos-detail.component';
import { AlumnosComponent } from './layout/dashboard/pages/alumnos/alumnos.component';
import { CursosComponent } from './layout/dashboard/pages/cursos/cursos.component';
import { HomeComponent } from './layout/dashboard/pages/home/home.component';
import { QuienessomosComponent } from './layout/dashboard/pages/quienessomos/quienessomos.component';
import { UsersComponent } from './layout/dashboard/pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'quienessomos', pathMatch: 'full' },
  { path: 'quienessomos', component: QuienessomosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/:id', component: AlumnosDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosDetailComponent } from './layout/dashboard/pages/alumnos/alumnos-detail/alumnos-detail.component';
import { AlumnosComponent } from './layout/dashboard/pages/alumnos/alumnos.component';
import { CursosDetailComponent } from './layout/dashboard/pages/cursos/cursos-detail.component';
import { CursosComponent } from './layout/dashboard/pages/cursos/cursos.component';
import { HomeComponent } from './layout/dashboard/pages/home/home.component';
import { QuienessomosComponent } from './layout/dashboard/pages/quienessomos/quienessomos.component';
import { ReduxComponent } from './layout/dashboard/pages/redux/redux.component';
import { UsersComponent } from './layout/dashboard/pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'quienessomos', pathMatch: 'full' },
  { path: 'quienessomos', component: QuienessomosComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'cursos/:cursosId', component: CursosDetailComponent },
  { path: 'alumnos', component: AlumnosComponent },
  { path: 'alumnos/:id', component: AlumnosDetailComponent },
  { path: 'redux', component: ReduxComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatTableModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

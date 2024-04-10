import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatOption } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatColumnDef, MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AlumnosService } from '../../core/services/alumnos.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AlumnosDetailComponent } from '../dashboard/pages/alumnos/alumnos-detail/alumnos-detail.component';
import { PipesComponent } from '../dashboard/pages/pipes/pipes.component';
import { UserDetailComponent } from '../dashboard/pages/users/pages/user-detail/user-detail.component';
import { AlumnosSearchComponent } from './pages/alumnos/alumnos-search/alumnos-search.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { AlumnosFormComponent } from './pages/alumnos/components/alumnos-form/alumnos-form.component';
import { EntradaDatosComponent } from './pages/alumnos/entrada-datos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { EditCursoDialogComponent } from './pages/cursos/edit-curso-dialog.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienessomosComponent } from './pages/quienessomos/quienessomos.component';
import { UsersComponent } from './pages/users/users.component';


@NgModule({
  declarations: [
    PipesComponent,
    UserDetailComponent,
    AlumnosDetailComponent,
    DashboardComponent,
    UsersComponent,
    AlumnosComponent,
    CursosComponent,
    HomeComponent,
    AlumnosSearchComponent,
    AlumnosFormComponent,
    EntradaDatosComponent,
    EditCursoDialogComponent,
    QuienessomosComponent,
       
     
    
  ],
   providers: [AlumnosService],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    FormsModule,
    RouterModule, 
    MatPaginatorModule,
    MatTableModule, 
    MatColumnDef,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    MatCardModule,
    RouterOutlet,
    MatOption,
    MatPaginator, MatIconModule, 
    MatIcon,
    MatColumnDef,
    ReactiveFormsModule,
    MatCard,
    MatCardModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatGridListModule,
    
    
  ],
  exports: [
  DashboardComponent,AlumnosComponent,CursosComponent, HomeComponent,AlumnosSearchComponent,AlumnosFormComponent,EntradaDatosComponent, EditCursoDialogComponent,QuienessomosComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardModule { }

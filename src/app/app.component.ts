import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatSidenav, MatSidenavContainer, MatSidenavModule } from '@angular/material/sidenav';
import { MatCell, MatHeaderCell, MatHeaderRow, MatRow, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatToolbarModule, MatToolbarRow } from '@angular/material/toolbar';
import { ReactiveFormsComponent } from "./components/reactive-forms/reactive-forms.component";
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { DashboardModule } from "./layout/dashboard/dashboard.module";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatRow,
        MatListModule,
        MatTableModule,
        MatHeaderCell,
        MatCell,
        MatHeaderRow,
        MatSidenavContainer,
        MatToolbarRow,
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatIcon,
        MatPaginator,
        MatMenuModule,
        DashboardModule,
      ReactiveFormsComponent,
    TemplateDrivenComponent,
    ]
})
export class AppComponent {
   title = 'Hello, finaltrabajoangulararamayo';
  @ViewChild('drawer') drawer: MatSidenav | undefined; 
  dataSource = new MatTableDataSource<any>([]);
  showFiller = false;
  displayedColumns: any;

  constructor() { }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}

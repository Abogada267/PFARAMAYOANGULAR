import { Component, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
 styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
 @ViewChild('drawer') drawer: MatDrawer | undefined;
showFiller: any;
logout: any;
AlumnosLink: any;
alumno: any;

  constructor() { }

  toggleDrawer() {
    if (this.drawer) {
      this.drawer.toggle();
    }
  }
}

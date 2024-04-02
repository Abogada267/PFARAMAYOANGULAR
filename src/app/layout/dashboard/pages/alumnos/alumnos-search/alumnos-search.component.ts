import { Component } from '@angular/core';
import { Subscribable } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-alumnos-search',
  templateUrl: './alumnos-search.component.html',
  styleUrls: ['./alumnos-search.component.scss']
})
export class AlumnosSearchComponent {
search(arg0: string) {
throw new Error('Method not implemented.');
}
alumnos$: Observable<undefined> | Subscribable<undefined> | Promise<undefined> | undefined;

}

import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.scss'],
})
export class QuienessomosComponent {
  tiles: Tile[] = [
    {
      text: 'Estudio Juridico con amplia trayectoria y renovada experiencia profesional',
      cols: 3, rows: 1, color: 'lightblue'
    },
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  selectedItem: { text: string; cols: number; rows: number; color: string; };

  constructor(private _snackBar: MatSnackBar) {
     this.selectedItem = { text: 'Estudio Juridico con amplia trayectoria y renovada experiencia profesional', cols: 3, rows: 1, color: 'lightblue' };
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}



